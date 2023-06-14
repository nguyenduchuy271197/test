"use client";

import { Button } from "@/components/ui/Button";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

export default function LogoutButton() {
  const { onLogout } = useContext(AuthContext);
  return (
    <Button onClick={onLogout} variant="ghost">
      Logout
    </Button>
  );
}
