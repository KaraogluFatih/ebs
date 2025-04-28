import { GlobalConfig } from "payload";

export const FAQs: GlobalConfig = {
  slug: "faqs",
  label: "FAQs",
  fields: [
    {
      name: "faqs",
      label: "FAQ",
      type: "array",
      labels: {
        singular: "FAQ",
        plural: "FAQs",
      },
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
        },
        {
          name: "answer",
          type: "text",
        },
      ],
    },
  ],
};
