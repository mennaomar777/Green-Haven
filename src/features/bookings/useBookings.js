import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { data, error, isLoading } = useQuery({
    queryKey: ["bookings", currentPage],
    queryFn: () => getBookings(currentPage, 10),
    keepPreviousData: true,
  });

  const pageCount = Math.ceil((data?.count || 0) / 10);

  // Pre-Fetching
  useEffect(() => {
    if (currentPage < pageCount) {
      queryClient.prefetchQuery({
        queryKey: ["bookings", currentPage + 1],
        queryFn: () => getBookings(currentPage + 1, 10),
        keepPreviousData: true,
      });
    }

    if (currentPage > 1) {
      queryClient.prefetchQuery({
        queryKey: ["bookings", currentPage - 1],
        queryFn: () => getBookings(currentPage - 1, 10),
        keepPreviousData: true,
      });
    }
  }, [currentPage, pageCount, queryClient]);

  return {
    bookings: data?.bookings || [],
    count: data?.count || 0,
    isLoading,
    error,
  };
}
