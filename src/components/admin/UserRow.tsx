import { useState } from 'react';
import { doc, setDoc, deleteDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';

export interface UserProfile {
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
  lastSeen: { seconds: number } | null;
}

export interface AdminEntry {
  uid: string;
  displayName: string;
  superadmin: boolean;
}

interface Props {
  profile: UserProfile;
  adminEntry: AdminEntry | null;
  onChanged: () => void;
}

export default function UserRow({ profile, adminEntry, onChanged }: Props) {
  const { user } = useAuth();
  const [busy, setBusy] = useState(false);
  const isSelf = user?.uid === profile.uid;
  const isAdmin = adminEntry !== null;
  const isSuperAdmin = adminEntry?.superadmin === true;

  async function run(fn: () => Promise<void>) {
    setBusy(true);
    try { await fn(); onChanged(); } finally { setBusy(false); }
  }

  const grantAdmin = () => run(() => setDoc(doc(db, 'admins', profile.uid), {
    displayName: profile.displayName, superadmin: false, addedAt: Timestamp.now(),
  }));

  const revokeAdmin = () => run(() => deleteDoc(doc(db, 'admins', profile.uid)));

  const grantSuperAdmin = () => run(() => setDoc(doc(db, 'admins', profile.uid), {
    displayName: profile.displayName, superadmin: true,
    ...(adminEntry ? {} : { addedAt: Timestamp.now() }),
  }, { merge: true }));

  const revokeSuperAdmin = () => run(() =>
    setDoc(doc(db, 'admins', profile.uid), { superadmin: false }, { merge: true })
  );

  return (
    <div className="user-row">
      <img className="user-row-avatar" src={profile.photoURL} alt={profile.displayName} referrerPolicy="no-referrer" />
      <div className="user-row-info">
        <span className="user-row-name">{profile.displayName}</span>
        <span className="user-row-email">{profile.email}</span>
      </div>
      <div className="user-row-badges">
        {isAdmin && <span className="user-role-badge user-role-badge--admin">Admin</span>}
        {isSuperAdmin && <span className="user-role-badge user-role-badge--superadmin">Superadmin</span>}
      </div>
      <div className="user-row-actions">
        {!isSelf && (
          <>
            {isAdmin ? (
              <button className="role-toggle-btn role-toggle-btn--revoke" onClick={revokeAdmin} disabled={busy}>
                Revoke Admin
              </button>
            ) : (
              <button className="role-toggle-btn role-toggle-btn--grant" onClick={grantAdmin} disabled={busy}>
                Make Admin
              </button>
            )}
            {isAdmin && (
              isSuperAdmin ? (
                <button className="role-toggle-btn role-toggle-btn--revoke" onClick={revokeSuperAdmin} disabled={busy}>
                  Revoke Superadmin
                </button>
              ) : (
                <button className="role-toggle-btn role-toggle-btn--grant" onClick={grantSuperAdmin} disabled={busy}>
                  Make Superadmin
                </button>
              )
            )}
          </>
        )}
        {isSelf && <span className="user-row-self">You</span>}
      </div>
    </div>
  );
}
