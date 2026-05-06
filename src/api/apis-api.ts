import { defineQuery } from "groq";
import { client } from "@/sanity/client";
import { Api } from "../../sanity.types";

export const apiQuery = defineQuery(`*[_type == "api"] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  description,
  stacks,
  features,
  readMeUrl,
  hostUrl
}`);

export const getApis = async (): Promise<Api[]> => {
  return await client.fetch(apiQuery);
};
