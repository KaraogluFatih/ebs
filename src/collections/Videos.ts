import { CollectionConfig } from "payload";

const Videos: CollectionConfig = {
  slug: "videos",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
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
    {
      name: "date",
      type: "date",
      required: true,
    },
    {
      name: "views",
      type: "number",
      required: true,
      defaultValue: 0,
    },
    {
      name: "duration",
      type: "text",
      required: true,
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media", // make sure you have a media collection
      required: true,
    },
    {
      name: "videoFile",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Videos;
