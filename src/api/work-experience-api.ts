import {WorkExperienceQueryResult} from "../../sanity.types";
import {client} from "@/sanity/client";
import {defineQuery} from "groq";

const workExperienceQuery = defineQuery(`*[_type == "work"] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  company,
  icon,
  role,
  responsibilities,
}`);

export const getWorkExperience = async ():Promise<WorkExperienceQueryResult> => {
  return  await client.fetch(workExperienceQuery);
}

