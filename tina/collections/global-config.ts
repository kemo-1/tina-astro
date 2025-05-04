import type { Collection } from "tinacms";
import IconComponent from "../components/IconComponent";

export const GlobalConfigCollection: Collection = {
  name: "config",
  label: "Global Config",
  path: "src/content/config",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      name: "seo",
      label: "إعدادات عامة للموقع",
      type: "object",
      fields: [
        {
          name: "title",
          label: "عنوان الموقع الذي سيظهر عند مشاركة الروابط",
          type: "string",
          required: true,
        },
        {
          name: "description",
          label: "وصف الموقع الذي سيظهر عند مشاركة الروابط",
          type: "string",
          required: true,
        },
        {
          name: "siteOwner",
          label: "اسم الشركة أو صاحب الموقع كما سيظهر في",
          required: true,
          type: "string",
          ui: {
            defaultValue: "Your name here"
          },
        },
        // Add more settings here...
      ],
    },
    {
      name: "nav",
      label: "قائمة الروابط العلوية",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title
          };
        },
      },
      fields: [
        {
          name: "title",
          label: "عنوان رابط علوي",
          type: "string",
          required: true
        },
        {
          name: "link",
          label: "الرابط الذي ستذهب إليه",
          type: "string",
          required: true

        }
      ]
    },
    {
      name: "contactLinks",
      label: "روابط التواصل",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title
          }
        },
      },
      fields: [
        {
          name: "title",
          label: "العنوان",
          type: "string"
        },
        {
          name: "link",
          label: "الرابط",
          type: "string"
        },
        {
          name: "icon",
          label: "الرمز",
          type: "string",
          ui: {
            //@ts-ignore
            component: IconComponent
          }
        }
      ],
    }

    // Add other config fields here...
  ]
}
