import { type SchemaTypeDefinition } from "sanity";
import { projectTypes } from "./projects";
import { mobileProjectTypes } from "./mobile-projects";
import { works } from "./work";
import { Icons } from "./skillsIcon";
import { Resume } from "./resume";
import { apiTypes } from "./apis";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectTypes, mobileProjectTypes, apiTypes, works, Icons, Resume],
};
