import { NextResponse } from "next/server";
import { requireSuperadmin } from "@/lib/supabase/guards";

const allowedRoles = new Set(["user", "superadmin"]);

export async function PATCH(request, { params }) {
  try {
    const guard = await requireSuperadmin();
    if (!guard.ok) {
      return NextResponse.json({ error: guard.message }, { status: guard.status });
    }

    const { userId } = params;
    const { role } = await request.json();

    if (!allowedRoles.has(role)) {
      return NextResponse.json({ error: "Invalid role value." }, { status: 400 });
    }

    const { admin, user } = guard;

    if (user.id === userId && role !== "superadmin") {
      return NextResponse.json(
        { error: "Superadmin cannot remove their own superadmin role." },
        { status: 400 },
      );
    }

    const { error } = await admin.from("profiles").update({ role }).eq("id", userId);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Unexpected server error." }, { status: 500 });
  }
}

export async function DELETE(_request, { params }) {
  try {
    const guard = await requireSuperadmin();
    if (!guard.ok) {
      return NextResponse.json({ error: guard.message }, { status: guard.status });
    }

    const { userId } = params;
    const { admin, user } = guard;

    if (user.id === userId) {
      return NextResponse.json({ error: "You cannot delete your own account from here." }, { status: 400 });
    }

    const { error } = await admin.auth.admin.deleteUser(userId);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Unexpected server error." }, { status: 500 });
  }
}
