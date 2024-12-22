import { useQuery } from "react-query";
import { getUserData } from "../api/userApi";

export const useUser = () => {
  return useQuery("user", getUserData, {
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    cacheTime: 15 * 60 * 1000, // Keep data in cache for 15 minutes
    refetchOnWindowFocus: false, // Disable refetching on window focus
  });
};
