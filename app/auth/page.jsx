"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

        setMessage(
          "Registration success. Check your email for confirmation if email verification is enabled.",
        );
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
    <main className="auth-main">
      <div className="container auth-wrap">
        <div className="auth-card">
          <p className="eyebrow">Account Access</p>
          <h1>{mode === "login" ? "Login" : "Register"} to CV. NISFI NASBAR</h1>
          <p>Users who register here are stored in Supabase and can immediately log in to the website.</p>
          {!supabase && (
            <p className="msg error">
              Missing Supabase configuration. Set environment variables in <code>.env.local</code>.
            </p>
          )}

          <div className="auth-switch">
            <button
              type="button"
              className={mode === "login" ? "active" : ""}
              onClick={() => setMode("login")}
            >
              Login
            </button>
            <button
              type="button"
              className={mode === "register" ? "active" : ""}
              onClick={() => setMode("register")}
            >
              Register
            </button>
          </div>

          <form className="auth-form" onSubmit={submitAuth}>
            {mode === "register" && (
              <label>
                Full Name
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name"
                />
              </label>
            )}

            <label>
              Email
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
            </label>

            <label>
              Password
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 6 characters"
              />
            </label>

            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? "Processing..." : mode === "login" ? "Login Now" : "Create Account"}
            </button>
          </form>

          {message && <p className="msg success">{message}</p>}
          {error && <p className="msg error">{error}</p>}
        </div>
      </div>
    </main>
  );
}
