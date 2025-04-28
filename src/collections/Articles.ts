import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";

const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "title",
    livePreview: {
      url: ({ data, collectionConfig }) => {
        const baseUrl = data?.tenant?.url || "https://default-domain.com";

        if (collectionConfig.slug === "articles") {
          return `http://localhost:3000/articles/${data.id}`;
        }

        return baseUrl;
      },
      collections: ["articles"],
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({}),
    },
    {
      name: "shortDescription",
      type: "textarea",
    },
    {
      name: "readTime",
      type: "text",
    },
    {
      name: "category",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default Articles;
