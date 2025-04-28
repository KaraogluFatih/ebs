import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { GlobalConfig } from "payload";

const Directions: GlobalConfig = {
  slug: "directions",
  label: "Directions",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Section Title",
      type: "text",
      required: true,
      defaultValue: "Anfahrt",
    },
    {
      name: "options",
      label: "Transport Options",
      type: "array",
      fields: [
        {
          name: "label",
          label: "Tab Label",
          type: "text",
        },
        {
          name: "description",
          label: "Descriptions",
          type: "text",
        },
      ],
    },
  ],
};

export default Directions;
