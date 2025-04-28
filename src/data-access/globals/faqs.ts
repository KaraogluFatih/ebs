import { Faqs } from "@/types/faq";
import config from "@payload-config";
import { getPayload } from "payload";

export const getFaqs = async (): Promise<Faqs> => {
  const payload = await getPayload({ config });
  const data = await payload.findGlobal({ slug: "faqs" });
  return data as Faqs;
};
