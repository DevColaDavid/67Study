import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

const SITE_PASSWORD = "67";
const AUTH_KEY = "apstudy_auth_ok";
const LAST_ACTIVE_KEY = "apstudy_last_active_ms";
const INACTIVITY_MS = 45 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const ACTIVITY_EVENTS = ["click", "keydown", "touchstart", "scroll"] as const;

type AuthContextValue = {
  unlocked: boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function nowMs() {
  return Date.now();
}

function updateLastActive() {
  localStorage.setItem(LAST_ACTIVE_KEY, String(nowMs()));
}

function clearAuth() {
  sessionStorage.removeItem(AUTH_KEY);
}

function hasTimedOut() {
  const raw = localStorage.getItem(LAST_ACTIVE_KEY);
  const t = Number(raw);
  if (!Number.isFinite(t) || t <= 0) {
    return true;
  }
  return nowMs() - t > INACTIVITY_MS;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(() => {
    if (sessionStorage.getItem(AUTH_KEY) === "1" && !hasTimedOut()) {
      updateLastActive();
      return true;
    }
    clearAuth();
    return false;
  });

  const [overlayMessage, setOverlayMessage] = useState<string | null>(() =>
    sessionStorage.getItem(AUTH_KEY) === "1" && !hasTimedOut()
      ? null
      : "Enter the password to access AP Study.",
  );

  const attemptsRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const logout = useCallback(() => {
    window.dispatchEvent(new Event("apstudy-lock"));
    clearAuth();
    setUnlocked(false);
    setOverlayMessage("You've been logged out. Enter password to continue.");
    attemptsRef.current = 0;
  }, []);

  useEffect(() => {
    if (!unlocked) {
      return;
    }
    const onActivity = () => {
      if (sessionStorage.getItem(AUTH_KEY) === "1") {
        updateLastActive();
      }
    };
    ACTIVITY_EVENTS.forEach((ev) => {
      document.addEventListener(ev, onActivity, { passive: true });
    });
    return () => {
      ACTIVITY_EVENTS.forEach((ev) => document.removeEventListener(ev, onActivity));
    };
  }, [unlocked]);

  useEffect(() => {
    const onReturn = () => {
      if (document.hidden) {
        return;
      }
      if (sessionStorage.getItem(AUTH_KEY) === "1" && hasTimedOut()) {
        window.dispatchEvent(new Event("apstudy-lock"));
        clearAuth();
        setUnlocked(false);
        setOverlayMessage("You've been away for a while. Enter password to continue.");
      }
    };
    document.addEventListener("visibilitychange", onReturn);
    window.addEventListener("focus", onReturn);
    return () => {
      document.removeEventListener("visibilitychange", onReturn);
      window.removeEventListener("focus", onReturn);
    };
  }, []);

  useEffect(() => {
    if (unlocked) {
      window.dispatchEvent(new CustomEvent("apstudy-expand-chapters"));
    }
  }, [unlocked]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const input = inputRef.current;
      if (!input) {
        return;
      }
      if (input.value === SITE_PASSWORD) {
        sessionStorage.setItem(AUTH_KEY, "1");
        updateLastActive();
        attemptsRef.current = 0;
        setUnlocked(true);
        setOverlayMessage(null);
        return;
      }
      attemptsRef.current += 1;
      const left = MAX_ATTEMPTS - attemptsRef.current;
      const err = document.getElementById("auth-error");
      if (left <= 0) {
        if (err) {
          err.textContent = "Too many attempts. Refresh to try again.";
        }
        input.disabled = true;
        return;
      }
      if (err) {
        err.textContent = `Incorrect password. ${left} attempt(s) left.`;
      }
      input.select();
    },
    [],
  );

  const value = useMemo(() => ({ unlocked, logout }), [unlocked, logout]);

  useEffect(() => {
    if (overlayMessage !== null) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    return undefined;
  }, [overlayMessage]);

  return (
    <AuthContext.Provider value={value}>
      {children}
      {overlayMessage !== null && (
        <div className="auth-overlay">
          <div className="auth-card">
            <h2 className="auth-title">Session locked</h2>
            <p className="auth-subtitle">{overlayMessage}</p>
            <form className="auth-form" onSubmit={onSubmit}>
              <input
                ref={inputRef}
                className="auth-input"
                type="password"
                placeholder="Enter password"
                autoComplete="current-password"
                required
                autoFocus
              />
              <button className="auth-button" type="submit">
                Unlock
              </button>
              <div className="auth-error" id="auth-error" />
            </form>
          </div>
        </div>
      )}
      {unlocked && (
        <button type="button" className="logout-button" onClick={logout}>
          Log out
        </button>
      )}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
