"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState("");
  const [status, setStatus] = useState("");
  const [roleDraft, setRoleDraft] = useState({});

  const loadUsers = async () => {
    setLoading(true);
    setError("");
    setStatus("");

    const response = await fetch("/api/admin/users");
    const payload = await response.json();

    if (!response.ok) {
      setError(payload.error || "Failed to load users.");
      setUsers([]);
      setLoading(false);
      return;
    }

    setUsers(payload.users || []);
    const draft = {};
    (payload.users || []).forEach((user) => {
      draft[user.id] = user.role || "user";
    });
    setRoleDraft(draft);
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const bootstrapSuperadmin = async () => {
    setStatus("");
    const response = await fetch("/api/admin/bootstrap-superadmin", { method: "POST" });
    const payload = await response.json();

    if (!response.ok) {
      setError(payload.error || "Unable to bootstrap superadmin.");
      return;
    }

    setStatus(payload.message || "Superadmin activated.");
    await loadUsers();
  };

  const updateRole = async (userId) => {
    setSavingId(userId);
    setStatus("");
    setError("");

    const response = await fetch(`/api/admin/users/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: roleDraft[userId] || "user" }),
    });

    const payload = await response.json();
    if (!response.ok) {
      setError(payload.error || "Failed to update role.");
      setSavingId("");
      return;
    }

    setStatus("User role updated.");
    await loadUsers();
    setSavingId("");
  };

  const deleteUser = async (userId) => {
    const confirmed = window.confirm("Delete this user account?");
    if (!confirmed) return;

    setSavingId(userId);
    setStatus("");
    setError("");

    const response = await fetch(`/api/admin/users/${userId}`, {
      method: "DELETE",
    });
    const payload = await response.json();

    if (!response.ok) {
      setError(payload.error || "Failed to delete user.");
      setSavingId("");
      return;
    }

    setStatus("User deleted.");
    await loadUsers();
    setSavingId("");
  };

  return (
    <section className="py-14 sm:py-20">
      <div className="page-frame">
        <div className="dark-panel site-grid rounded-[32px] px-7 py-10 text-white sm:px-10">
          <p className="section-label">
            <span className="lime-dot"></span>
            Superadmin
          </p>
          <h1 className="font-display mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            User Management Dashboard
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Edit user roles directly from this page. All data is synced from Supabase Auth and profiles.
          </p>
        </div>

        <div className="mt-8 soft-panel rounded-[32px] p-6 sm:p-8">
          {status && (
            <div className="mb-5 rounded-2xl border border-lime-200 bg-lime-50 px-4 py-3 text-sm text-lime-800">
              {status}
            </div>
          )}

          {error && (
            <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-600 sm:flex-row sm:items-center sm:justify-between">
              <span>{error}</span>
              <button
                type="button"
                className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800"
                onClick={bootstrapSuperadmin}
              >
                Activate My Superadmin
              </button>
            </div>
          )}

          <div className="overflow-x-auto">
            {loading ? (
              <p className="text-sm text-slate-600">Loading users...</p>
            ) : (
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.18em] text-slate-500">
                    <th className="px-4 py-4 font-semibold">Email</th>
                    <th className="px-4 py-4 font-semibold">Name</th>
                    <th className="px-4 py-4 font-semibold">Role</th>
                    <th className="px-4 py-4 font-semibold">Created</th>
                    <th className="px-4 py-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-slate-100 align-top last:border-b-0">
                      <td className="px-4 py-4 text-slate-700">{user.email || "-"}</td>
                      <td className="px-4 py-4 text-slate-700">{user.full_name || "-"}</td>
                      <td className="px-4 py-4">
                        <select
                          value={roleDraft[user.id] || "user"}
                          onChange={(e) =>
                            setRoleDraft((prev) => ({
                              ...prev,
                              [user.id]: e.target.value,
                            }))
                          }
                          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 outline-none"
                        >
                          <option value="user">user</option>
                          <option value="superadmin">superadmin</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 text-slate-600">
                        {user.created_at ? new Date(user.created_at).toLocaleString() : "-"}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-lime-300 hover:text-lime-700"
                            onClick={() => updateRole(user.id)}
                            disabled={savingId === user.id}
                          >
                            Save Role
                          </button>
                          <button
                            type="button"
                            className="rounded-full border border-red-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-red-600 transition hover:bg-red-50"
                            onClick={() => deleteUser(user.id)}
                            disabled={savingId === user.id}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
