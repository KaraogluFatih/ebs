import { ContactInfo } from "@/types/contact-info";
import config from "@payload-config";
import { getPayload } from "payload";

export const getContactInfo = async (): Promise<ContactInfo> => {
  const payload = await getPayload({ config });
  const data = await payload.findGlobal({ slug: "contact-info" });
  return data as ContactInfo;
};
