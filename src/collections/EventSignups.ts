// payload/collections/Signups.ts
import { CollectionConfig } from "payload";

const EventSignups: CollectionConfig = {
  slug: "eventsignups",
  fields: [
    { name: "event", type: "text", required: true },
    { name: "firstName", type: "text", required: true },
    { name: "lastName", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "address", type: "textarea" },
    { name: "phone", type: "text" },
  ],
  access: {
    create: () => true, // Public signups
    read: ({ req }) => !!req.user, // Only logged in users can see
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
};

export default EventSignups;
