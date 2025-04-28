import { OpeningHours } from "@/types/openingHours";
import config from "@payload-config";
import { getPayload } from "payload";

export const getOpeningHours = async (): Promise<OpeningHours> => {
  const payload = await getPayload({ config });
  const data = await payload.findGlobal({ slug: "opening-hours" });
  return data as OpeningHours;
};
