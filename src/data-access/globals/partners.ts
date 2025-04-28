import { Partners } from "@/types/partners";
import config from "@payload-config";
import { getPayload } from "payload";

export const getPartners = async (): Promise<Partners> => {
  const payload = await getPayload({ config });
  const data = await payload.findGlobal({ slug: "partners" });
  return data as Partners;
};
