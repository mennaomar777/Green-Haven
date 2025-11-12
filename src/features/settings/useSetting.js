import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getSettings } from "../../services/apiSettings";

export default function useSetting() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { isLoading, error, settings };
}
