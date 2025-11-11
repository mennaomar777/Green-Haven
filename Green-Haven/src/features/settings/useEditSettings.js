import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export default function useEditSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSettingsMutate, isLoading: isEditting } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Settings Successfully edited!");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateSettingsMutate, isEditting };
}
