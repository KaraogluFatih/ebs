// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

import Events from "./collections/Events";
import Articles from "./collections/Articles";
import Videos from "./collections/Videos";
import path from "path";
import sharp from "sharp";
import ContactInfo from "./collections/contact-info";
import EventSignups from "./collections/EventSignups";
import MissionAndGoals from "./collections/MissionAndGoals";
import Team from "./collections/Team";
import Partners from "./collections/Partners";
import OpeningHours from "./collections/OpeningHours";
import Directions from "./collections/Directions";
import { FAQs } from "./collections/FAQs";
import Documents from "./collections/Documents";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Events,
    Articles,
    Videos,
    EventSignups,
    Documents,
  ],
  globals: [
    ContactInfo,
    MissionAndGoals,
    Team,
    Partners,
    OpeningHours,
    Directions,
    FAQs,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
});
