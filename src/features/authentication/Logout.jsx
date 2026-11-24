import React from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { LogOut } from "lucide-react";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

export default function Logout() {
  const { logoutMutate, isLoading } = useLogout();
  if (isLoading) return <Loading small label="Signing out…" />;
  return (
    <ButtonIcon onClick={() => logoutMutate()} disabled={isLoading}>
      <LogOut size={20} />
    </ButtonIcon>
  );
}
