import { defineField, defineType } from "sanity";

export const works = defineType({
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Icon",
      type: "image", // SVG, PNG, JPG, etc.
      options: {
        accept: "image/svg+xml", // ensures SVG uploads
      },
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
