import { defineType } from "sanity";

export const apiTypes = defineType({
  name: "api",
  title: "API",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "stacks",
      title: "Stacks",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "readMeUrl",
      title: "README URL",
      type: "url",
    },
    {
      name: "hostUrl",
      title: "Host URL",
      type: "url",
    },
  ],
});
