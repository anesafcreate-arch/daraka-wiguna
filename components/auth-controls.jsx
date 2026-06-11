"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LayoutDashboard, LogOut, Settings2 } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export default function AuthControls() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const supabase = getSupabaseBrowserClient();

  useEffect(() => {
    if (!supabase) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    const loadUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!isMounted) return;
      setIsAuthenticated(Boolean(user));
      setIsLoading(false);
    };

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(Boolean(session?.user));
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  const handleLogout = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    router.refresh();
  };

  if (!supabase) {
    return (
      <Link
        href="/auth"
        className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[#f6f8ff] px-4 py-2 text-sm font-medium text-[var(--navy)] transition hover:border-[#1591CC] hover:text-[#1591CC]"
      >
        <Settings2 className="h-4 w-4" />
        Configure Supabase
      </Link>
    );
  }

  if (isLoading) {
    return <span className="hidden text-sm text-slate-500 lg:inline">Checking session...</span>;
  }

  if (!isAuthenticated) {
    return (
      <Link
        href="/auth"
        className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#1591CC] hover:text-[#1591CC]"
      >
        <LayoutDashboard className="h-4 w-4" />
        Login / Register
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/admin"
        className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#1591CC] hover:text-[#1591CC]"
      >
        <LayoutDashboard className="h-4 w-4" />
        Admin Panel
      </Link>
      <button
        type="button"
        onClick={handleLogout}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-red-200 hover:text-red-600"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </button>
    </div>
  );
}
