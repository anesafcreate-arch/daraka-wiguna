import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export async function POST() {
  try {
    const supabase = await getSupabaseServerClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: "Please login first." }, { status: 401 });
    }

    const superadminEmail = process.env.SUPERADMIN_EMAIL?.trim().toLowerCase();
    if (superadminEmail && user.email?.toLowerCase() !== superadminEmail) {
      return NextResponse.json(
        { error: `Only ${superadminEmail} can bootstrap superadmin.` },
        { status: 403 },
      );
    }

    const admin = getSupabaseAdmin();

    const { data: existingSuperadmin, error: countError } = await admin
      .from("profiles")
      .select("id")
      .eq("role", "superadmin")
      .limit(1);

    if (countError) {
      return NextResponse.json({ error: countError.message }, { status: 500 });
    }

    if (existingSuperadmin && existingSuperadmin.length > 0) {
      return NextResponse.json(
        { error: "A superadmin already exists. Use the existing superadmin account to manage roles." },
        { status: 400 },
      );
    }

    const { error: updateError } = await admin
      .from("profiles")
      .update({ role: "superadmin" })
      .eq("id", user.id);

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Superadmin activated for current account." });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Unexpected server error." }, { status: 500 });
  }
}
