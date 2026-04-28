import { getSupabaseServerClient } from "./server";
import { getSupabaseAdmin } from "./admin";

export async function requireSuperadmin() {
  const supabase = await getSupabaseServerClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { ok: false, status: 401, message: "Not authenticated." };
  }

  const admin = getSupabaseAdmin();
  const { data: profile, error: profileError } = await admin
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profileError || !profile || profile.role !== "superadmin") {
    return { ok: false, status: 403, message: "Superadmin access required." };
  }

  return { ok: true, user, admin };
}
