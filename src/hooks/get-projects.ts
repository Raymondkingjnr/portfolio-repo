import {useQuery} from "@tanstack/react-query";
import {webproject, mobile} from "@/api/projects-api";

export const useProjects = () => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: webproject,
        enabled: true,
        gcTime: 1000 * 60 * 30,
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 1000 * 60 * 10,
    });
}

export const useMobileProjects = () => {
    return useQuery({
        queryKey: ['mobile'],
        queryFn: mobile,
        enabled: true,
        gcTime: 1000 * 60 * 30,
        refetchOnWindowFocus: false,
    })
}