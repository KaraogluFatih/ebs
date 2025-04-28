import { Directions } from "@/types/directions";
import config from "@payload-config";
import { getPayload } from "payload";

export const getDirections = async (): Promise<Directions> => {
  const payload = await getPayload({ config });
  const data = await payload.findGlobal({ slug: "directions" });
  return data as Directions;
};
