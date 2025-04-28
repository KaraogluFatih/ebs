import { GlobalConfig } from "payload";

const ContactInfo: GlobalConfig = {
  slug: "contact-info",
  label: "Contact Info",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "organization",
      type: "text",
      label: "Organization Name",
      required: true,
    },
    {
      name: "street",
      type: "text",
      label: "Street",
      required: true,
    },
    {
      name: "postalCode",
      type: "text",
      label: "Postal Code",
      required: true,
    },
    {
      name: "city",
      type: "text",
      label: "City",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      label: "Phone",
    },
    {
      name: "email",
      type: "email",
      label: "Email",
    },
    {
      name: "coordinates",
      type: "point",
    },
  ],
};

export default ContactInfo;
