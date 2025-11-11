import React from "react";
import { signUp } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

export default function useSignUp() {
  const { mutate: signUpMutate, isLoading } = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("");
    },
  });
  return { signUpMutate, isLoading };
}
