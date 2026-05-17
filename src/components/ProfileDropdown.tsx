import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProfileDropdown() {
  const { user, isAdmin, isSuperAdmin, signOut } = useAuth();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  if (!user || location.pathname === '/login') return null;

  return (
    <div className="profile-dropdown-wrap" ref={containerRef}>
      <button
        className="profile-avatar-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open profile"
        title={user.displayName ?? 'Profile'}
      >
        <img
          className="profile-avatar-img"
          src={user.photoURL ?? ''}
          alt={user.displayName ?? ''}
          referrerPolicy="no-referrer"
        />
      </button>

      {open && (
        <div className="profile-panel">
          <div className="profile-panel-header">
            <img
              className="profile-panel-avatar"
              src={user.photoURL ?? ''}
              alt={user.displayName ?? ''}
              referrerPolicy="no-referrer"
            />
            <div className="profile-panel-info">
              <span className="profile-panel-name">{user.displayName}</span>
              <span className="profile-panel-email">{user.email}</span>
            </div>
          </div>

          {(isAdmin || isSuperAdmin) && (
            <div className="profile-panel-badges">
              {isAdmin && <span className="user-role-badge user-role-badge--admin">Admin</span>}
              {isSuperAdmin && <span className="user-role-badge user-role-badge--superadmin">Superadmin</span>}
            </div>
          )}

          <div className="profile-panel-divider" />

          <button
            className="profile-signout-btn"
            onClick={() => { setOpen(false); signOut(); }}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
