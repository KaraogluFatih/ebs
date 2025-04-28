// collections/Events.ts

import { CollectionConfig } from "payload";

const Events: CollectionConfig = {
  slug: "events",
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
      name: "descriptionShort",
      type: "textarea",
      label: "Short Description",
    },
    {
      name: "descriptionLong",
      type: "richText",
      label: "Detailed Description",
    },
    {
      name: "tags",
      type: "array",
      label: "Tags",
      fields: [
        {
          name: "tag",
          type: "text",
        },
      ],
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "date",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
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
      name: "time",
      type: "text",
      label: "Start Time",
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "organizer",
      type: "text",
    },
    {
      name: "cost",
      type: "text",
    },
    {
      name: "maxParticipants",
      type: "number",
      label: "Max Participants",
    },
    {
      name: "currentParticipants",
      type: "number",
      label: "Current Participants",
      defaultValue: 0,
    },
  ],
};

export default Events;
