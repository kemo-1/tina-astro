import type { Collection } from "tinacms";

export const BlogCollection: Collection = {

  name: "blog",
  label: "المدونة",
  path: "src/content/blog",
  format: "mdx",
  ui: {
    router({ document }) {
      return `/blog/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "العنوان",
      isTitle: true,
      required: true,
    },
    {
      name: "description",
      label: "الوصف",
      type: "string",
    },
    {
      name: "pubDate",
      label: "تاريخ النشر",
      type: "datetime",
    },
    {
      name: "updatedDate",
      label: "تاريخ اخر تحديث",
      type: "datetime",
    },
    {
      name: "heroImage",
      label: "صورة المقال",
      type: "image",
    },
    {
      type: "rich-text",
      name: "body",
      label: "المحتوى",
      isBody: true,
    },
  ],
}
