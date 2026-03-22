import {defineQuery} from "groq";


import { SkillsIconQueryResult } from "../../sanity.types";
import { client } from "@/sanity/client";


const SkillsIconQuery = defineQuery(`*[_type == "icon"]{
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  svg
}`);

export const getSkills = async ():Promise<SkillsIconQueryResult> => {
  return   await client.fetch(SkillsIconQuery);
}