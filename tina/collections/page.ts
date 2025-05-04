import type { Collection } from "tinacms";

export const PageCollection: Collection = {
  name: "page",
  label: "صفحات الموقع",
  path: "src/content/page",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    },
  },
  fields: [
    {
      name: "seoTitle",
      label: "عنوان الصفحة",
      type: "string",
      required: true
    },
    {
      name: "body",
      label: "محتوى الصفحة",
      type: "rich-text",
      isBody: true,
      required: true
    }
  ]
}
