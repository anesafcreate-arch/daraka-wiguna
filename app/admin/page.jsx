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
    <main className="admin-main">
      <div className="container admin-wrap">
        <div className="admin-header">
          <p className="eyebrow">Superadmin</p>
          <h1>User Management Dashboard</h1>
          <p>Edit user roles directly from this page. All data is synced from Supabase Auth and profiles.</p>
        </div>

        {status && <p className="msg success">{status}</p>}
        {error && (
          <div className="admin-warning">
            <p className="msg error">{error}</p>
            <button type="button" className="btn btn-outline" onClick={bootstrapSuperadmin}>
              Activate My Superadmin
            </button>
          </div>
        )}

        <div className="admin-table-wrap">
          {loading ? (
            <p>Loading users...</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.email || "-"}</td>
                    <td>{user.full_name || "-"}</td>
                    <td>
                      <select
                        value={roleDraft[user.id] || "user"}
                        onChange={(e) =>
                          setRoleDraft((prev) => ({
                            ...prev,
                            [user.id]: e.target.value,
                          }))
                        }
                      >
                        <option value="user">user</option>
                        <option value="superadmin">superadmin</option>
                      </select>
                    </td>
                    <td>{new Date(user.created_at).toLocaleString()}</td>
                    <td className="actions-cell">
                      <button
                        type="button"
                        className="btn btn-outline btn-small"
                        onClick={() => updateRole(user.id)}
                        disabled={savingId === user.id}
                      >
                        Save Role
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-small"
                        onClick={() => deleteUser(user.id)}
                        disabled={savingId === user.id}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}
