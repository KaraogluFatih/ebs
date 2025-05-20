import { CollectionConfig } from "payload";

const Documents: CollectionConfig = {
  slug: "documents",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "document",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Gottesdienst", value: "Gottesdienst" },
        { label: "Vortrag", value: "Vortrag" },
        { label: "Musik", value: "Musik" },
        { label: "Bibelkreis", value: "Bibelkreis" },
        { label: "Kinder", value: "Kinder" },
      ],
    },
  ],
};

export default Documents;
