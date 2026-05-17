import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import {
  User, AuthCredential, onAuthStateChanged,
  signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  updateProfile, linkWithCredential, signOut as firebaseSignOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';

interface AuthContextValue {
  user: User | null;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string, name: string) => Promise<void>;
  linkCredential: (cred: AuthCredential) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      try {
        if (firebaseUser) {
          const adminDoc = await getDoc(doc(db, 'admins', firebaseUser.uid));
          const adminData = adminDoc.exists() ? adminDoc.data() : null;
          setIsAdmin(adminDoc.exists());
          setIsSuperAdmin(adminData?.superadmin === true);
          await setDoc(doc(db, 'users', firebaseUser.uid), {
            uid: firebaseUser.uid,
            displayName: firebaseUser.displayName ?? '',
            photoURL: firebaseUser.photoURL ?? '',
            email: firebaseUser.email ?? '',
            lastSeen: Timestamp.now(),
          }, { merge: true });
        } else {
          setIsAdmin(false);
          setIsSuperAdmin(false);
        }
      } catch (err) {
        console.error('Auth setup error:', err);
      } finally {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const signInWithGoogle = useCallback(async () => {
    await signInWithPopup(auth, googleProvider);
  }, []);

  const signInWithEmail = useCallback(async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  }, []);

  const signUpWithEmail = useCallback(async (email: string, password: string, name: string) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName: name });
    // Trigger onAuthStateChanged to pick up the updated displayName
    setUser({ ...result.user });
  }, []);

  const linkCredential = useCallback(async (cred: AuthCredential) => {
    if (!auth.currentUser) throw new Error('Not signed in');
    await linkWithCredential(auth.currentUser, cred);
  }, []);

  const signOut = useCallback(async () => {
    await firebaseSignOut(auth);
  }, []);

  return (
    <AuthContext.Provider value={{
      user, isAdmin, isSuperAdmin, loading,
      signInWithGoogle, signInWithEmail, signUpWithEmail,
      linkCredential, signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
