import { defineType } from "sanity";

export const mobileProjectTypes = defineType({
  name: "mobileprojects",
  title: "mobileprojects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gitLink",
      title: "GitHub Link",
      type: "url",
    },
    {
      name: "url",
      title: "Live URL",
      type: "url",
    },
    {
      name: "img",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      title: "Project Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "stacks",
      title: "Tech Stacks",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "des",
      title: "Description",
      type: "array",
      of: [{ type: "text" }],
    },
  ],
});
