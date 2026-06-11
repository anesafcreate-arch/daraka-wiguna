"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, Mail, UserRound } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export default function AuthPage() {
  const router = useRouter();
  const supabase = getSupabaseBrowserClient();
  const [mode, setMode] = useState("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submitAuth = async (event) => {
    event.preventDefault();
    if (!supabase) {
      setError("Supabase is not configured. Add environment values first.");
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    try {
      if (mode === "register") {
        const { error: registerError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName || null,
            },
          },
        });

        if (registerError) throw registerError;

        setMessage("Registration success. Check your email if confirmation is enabled.");
      } else {
        const { error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (loginError) throw loginError;
        router.push("/admin");
        router.refresh();
      }
    } catch (authError) {
      setError(authError.message || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-14 sm:py-20">
      <div className="page-frame">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="dark-panel site-grid rounded-[32px] px-7 py-10 text-white sm:px-10">
            <p className="section-label">
              <span className="lime-dot"></span>
              Account Access
            </p>
            <h1 className="font-display mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              {mode === "login" ? "Login" : "Register"} to {mode === "login" ? "manage access" : "create an account"}.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Registrasi di halaman ini langsung terhubung ke Supabase Auth, sehingga pengguna bisa
              masuk ke website menggunakan akun yang sama.
            </p>
          </div>

          <div className="soft-panel rounded-[32px] p-7 sm:p-10">
            {!supabase && (
              <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                Missing Supabase configuration. Set environment variables in <code>.env.local</code>.
              </div>
            )}

            <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
              {["login", "register"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setMode(item)}
                  className={[
                    "rounded-full px-5 py-2 text-sm font-medium transition",
                    mode === item ? "bg-slate-950 text-white" : "text-slate-600 hover:text-slate-950",
                  ].join(" ")}
                >
                  {item === "login" ? "Login" : "Register"}
                </button>
              ))}
            </div>

            <form className="mt-8 space-y-5" onSubmit={submitAuth}>
              {mode === "register" && (
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Full Name</span>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <UserRound className="h-5 w-5 text-[#1591CC]" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </label>
              )}

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <Mail className="h-5 w-5 text-[#1591CC]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <LockKeyhole className="h-5 w-5 text-[#1591CC]" />
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 6 characters"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>
              </label>

              <button
                className="brand-primary-btn inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition disabled:opacity-60"
                type="submit"
                disabled={loading}
              >
                {loading ? "Processing..." : mode === "login" ? "Login Now" : "Create Account"}
              </button>
            </form>

            {message && (
              <div className="brand-success-banner mt-5 rounded-2xl px-4 py-3 text-sm">
                {message}
              </div>
            )}
            {error && (
              <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
