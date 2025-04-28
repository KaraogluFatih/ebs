import { GlobalConfig } from "payload";

const Partners: GlobalConfig = {
  slug: "partners",
  label: "Partner Section",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "sectionLabel",
      label: "Section Label",
      type: "text",
      required: true,
      defaultValue: "Unsere Partner",
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      defaultValue: "Gemeinsam für Bildung und Gemeinschaft",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
      defaultValue:
        "Wir arbeiten eng mit verschiedenen Partnern zusammen, um unsere Angebote zu bereichern und zu erweitern.",
    },
    {
      name: "partners",
      label: "Partner List",
      type: "array",
      required: true,
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
        },
        {
          name: "website",
          label: "Website",
          type: "text",
          required: true,
        },
        {
          name: "logo",
          label: "Logo",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};

export default Partners;
