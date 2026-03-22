import {useQuery} from "@tanstack/react-query";
import {getWorkExperience} from "@/api/work-experience-api";

export const useWorkExperience = () => {
    return useQuery({
        queryKey: ['work-experience'],
        queryFn: getWorkExperience,
        enabled: true,
    })
}