import { useCallback, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import UserRow, { UserProfile, AdminEntry } from './UserRow';

export default function UsersSection() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [admins, setAdmins] = useState<Map<string, AdminEntry>>(new Map());
  const [loading, setLoading] = useState(false);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const [usersSnap, adminsSnap] = await Promise.all([
        getDocs(collection(db, 'users')),
        getDocs(collection(db, 'admins')),
      ]);
      setUsers(usersSnap.docs.map((d) => ({ ...(d.data() as UserProfile) })));
      const map = new Map<string, AdminEntry>();
      adminsSnap.docs.forEach((d) => map.set(d.id, { uid: d.id, ...(d.data() as Omit<AdminEntry, 'uid'>) }));
      setAdmins(map);
    } catch (err) {
      console.error('UsersSection fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const sorted = [...users].sort((a, b) => {
    const aAdmin = admins.has(a.uid) ? 1 : 0;
    const bAdmin = admins.has(b.uid) ? 1 : 0;
    return bAdmin - aAdmin || a.displayName.localeCompare(b.displayName);
  });

  return (
    <div className="users-section">
      <div className="admin-section-header-row">
        <div>
          <h2 className="admin-section-title">User Management</h2>
          <p className="admin-section-desc">
            {users.length} user{users.length !== 1 ? 's' : ''} have signed in.
            Grant or revoke admin access below.
          </p>
        </div>
        <button className="admin-refresh-btn" onClick={fetchAll} disabled={loading}>
          {loading ? 'Loading…' : '↻ Refresh'}
        </button>
      </div>
      <div className="user-list">
        {sorted.map((u) => (
          <UserRow key={u.uid} profile={u} adminEntry={admins.get(u.uid) ?? null} onChanged={fetchAll} />
        ))}
      </div>
    </div>
  );
}
