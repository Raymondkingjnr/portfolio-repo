import { defineType } from "sanity";

export const Resume = defineType({
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "My Resume",
    },
    {
      name: "file",
      title: "Resume File",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx", // restrict to PDF or Word files
      },
    },
  ],
});
