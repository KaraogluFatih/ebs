import { GlobalConfig } from "payload";

const OpeningHours: GlobalConfig = {
  slug: "opening-hours",
  label: "Opening-Hours",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Section Title",
      type: "text",
      required: true,
      defaultValue: "Öffnungszeiten",
    },
    {
      name: "entries",
      label: "Opening Hours Entries",
      type: "array",
      required: true,
      fields: [
        {
          name: "days",
          label: "Days",
          type: "text",
          required: true,
        },
        {
          name: "time",
          label: "Time",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default OpeningHours;
