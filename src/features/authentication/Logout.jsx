import React from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { LogOut } from "lucide-react";
import useLogout from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

export default function Logout() {
  const { logoutMutate, isLoading } = useLogout();
  if (isLoading) return <SpinnerMini />;
  return (
    <ButtonIcon onClick={() => logoutMutate()} disabled={isLoading}>
      <LogOut size={20} />
    </ButtonIcon>
  );
}
