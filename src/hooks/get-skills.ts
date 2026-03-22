import {getSkills} from "@/api/skills-api";
import {useQuery} from "@tanstack/react-query";

export const useSkills = () =>{
  return  useQuery({
        queryKey: ['skills'],
      queryFn: getSkills,
      enabled: true,
    })
}