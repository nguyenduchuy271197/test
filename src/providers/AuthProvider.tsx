"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, createContext, useEffect, useRef, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";

interface AuthContextType {
  isAuth: boolean;
  onLogin: (password: string) => void;
  onLogout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  onLogin: () => {},
  onLogout: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const initialPath = useRef(pathname);

  const [password, setPassword, removePassword] = useLocalStorage({
    key: "password",
    defaultValue: "",
  });

  const isAuth = password === process.env.NEXT_PUBLIC_PASSWORD;

  function handleLogin(password: string) {
    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      setPassword(password);
    } else {
      setPassword("");
    }
  }

  function handleLogout() {
    removePassword();
  }

  useEffect(() => {
    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      router.push(initialPath.current);
    } else {
      router.push("/login");
    }
  }, [router, password]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
