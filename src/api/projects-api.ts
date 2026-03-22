import {defineQuery} from "groq";
import { client } from "@/sanity/client";
import {Project,Mobileprojects} from "../../sanity.types";

export const projectQuery = defineQuery(`*[_type == "project"] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  img,
  images,
  gitLink,
  url,
  stacks,
  des
}`);


export  const mobileProjectsQuery = defineQuery(`*[_type == "mobileprojects"] {
   _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  img,
  gitLink,
  url,
  images,
  stacks,
  des
  }`);

export const webproject = async (): Promise<Project[]> => {
   return  await client.fetch(projectQuery);

}

export const mobile = async (): Promise<Mobileprojects[]> => {
   return  await client.fetch(mobileProjectsQuery);
}