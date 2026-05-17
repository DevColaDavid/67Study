import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import UserRow, { UserProfile, AdminEntry } from './UserRow';

export default function UsersSection() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [admins, setAdmins] = useState<Map<string, AdminEntry>>(new Map());

  useEffect(() => {
    const unsub1 = onSnapshot(collection(db, 'users'), (snap) => {
      setUsers(snap.docs.map((d) => ({ ...(d.data() as UserProfile) })));
    }, (err) => console.error('Users listener error:', err));

    const unsub2 = onSnapshot(collection(db, 'admins'), (snap) => {
      const map = new Map<string, AdminEntry>();
      snap.docs.forEach((d) => map.set(d.id, { uid: d.id, ...(d.data() as Omit<AdminEntry, 'uid'>) }));
      setAdmins(map);
    }, (err) => console.error('Admins listener error:', err));

    return () => { unsub1(); unsub2(); };
  }, []);

  const sorted = [...users].sort((a, b) => {
    const aAdmin = admins.has(a.uid) ? 1 : 0;
    const bAdmin = admins.has(b.uid) ? 1 : 0;
    return bAdmin - aAdmin || a.displayName.localeCompare(b.displayName);
  });

  return (
    <div className="users-section">
      <h2 className="admin-section-title">User Management</h2>
      <p className="admin-section-desc">
        {users.length} user{users.length !== 1 ? 's' : ''} have signed in.
        Grant or revoke admin access below.
      </p>
      <div className="user-list">
        {sorted.map((u) => (
          <UserRow key={u.uid} profile={u} adminEntry={admins.get(u.uid) ?? null} />
        ))}
      </div>
    </div>
  );
}
