"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
      <Link href="/auth" className="btn btn-outline btn-small">
        Configure Supabase
      </Link>
    );
  }

  if (isLoading) {
    return <span className="nav-note">Checking session...</span>;
  }

  if (!isAuthenticated) {
    return (
      <Link href="/auth" className="btn btn-outline btn-small">
        Login / Register
      </Link>
    );
  }

  return (
    <div className="auth-inline">
      <Link href="/admin" className="btn btn-outline btn-small">
        Admin Panel
      </Link>
      <button type="button" onClick={handleLogout} className="btn btn-light btn-small">
        Logout
      </button>
    </div>
  );
}
