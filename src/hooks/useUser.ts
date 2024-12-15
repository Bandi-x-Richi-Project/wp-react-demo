import { useQuery } from "react-query";
import { getUserData } from "../api/userApi";

export const useUser = () => {
  return useQuery("user", getUserData, {
    // staleTime: 60000, // Cache data for 1 minute
  });
};
