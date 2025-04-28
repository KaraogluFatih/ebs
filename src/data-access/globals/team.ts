import { Team } from "@/types/team";
import config from "@payload-config";
import { getPayload } from "payload";

export const getTeam = async (): Promise<Team> => {
  const payload = await getPayload({ config });
  const data = await payload.findGlobal({ slug: "team" });
  return data as Team;
};
