import { defineType } from "sanity";

export const Icons = defineType({
  name: "icon",
  title: "Icon",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "svg",
      title: "SVG Code",
      type: "text",
    },
  ],
});
