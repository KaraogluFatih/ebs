import { GlobalConfig } from "payload";

const Team: GlobalConfig = {
  slug: "team",
  label: "Team Section",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "sectionLabel",
      label: "Section Label",
      type: "text",
      required: true,
      defaultValue: "Unser Team",
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      defaultValue: "Die Menschen hinter dem Bildungswerk",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
      defaultValue:
        "Unser engagiertes Team setzt sich täglich dafür ein, qualitativ hochwertige Bildungsangebote zu entwickeln und umzusetzen.",
    },
    {
      name: "members",
      label: "Team Members",
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
          name: "role",
          label: "Role",
          type: "text",
          required: true,
        },
        {
          name: "image",
          label: "Profile Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "bio",
          label: "Short Bio / Description",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
};

export default Team;
