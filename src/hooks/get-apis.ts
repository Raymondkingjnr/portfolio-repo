import { useQuery } from "@tanstack/react-query";
import { getApis } from "@/api/apis-api";

export const useApis = () => {
  return useQuery({
    queryKey: ["apis"],
    queryFn: getApis,
    enabled: true,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 10,
  });
};
