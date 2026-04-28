import { NextResponse } from "next/server";
import { requireSuperadmin } from "@/lib/supabase/guards";

export async function GET() {
  try {
    const guard = await requireSuperadmin();
    if (!guard.ok) {
      return NextResponse.json({ error: guard.message }, { status: guard.status });
    }

    const { admin } = guard;
    const [{ data: userData, error: usersError }, { data: profiles, error: profilesError }] =
      await Promise.all([
        admin.auth.admin.listUsers({
          page: 1,
          perPage: 1000,
        }),
        admin.from("profiles").select("id, full_name, role, created_at"),
      ]);

    if (usersError || profilesError) {
      return NextResponse.json(
        { error: usersError?.message || profilesError?.message || "Failed to fetch users." },
        { status: 500 },
      );
    }

    const profileMap = new Map((profiles || []).map((item) => [item.id, item]));

    const users = (userData?.users || []).map((user) => {
      const profile = profileMap.get(user.id);
      return {
        id: user.id,
        email: user.email,
        email_confirmed_at: user.email_confirmed_at,
        created_at: user.created_at,
        role: profile?.role || "user",
        full_name: profile?.full_name || user.user_metadata?.full_name || "",
      };
    });

    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Unexpected server error." }, { status: 500 });
  }
}
