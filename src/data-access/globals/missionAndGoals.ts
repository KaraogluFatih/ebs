import { MissionAndGoals } from "@/types/missionAndGoals";
import config from "@payload-config";
import { getPayload } from "payload";

export const getMission = async (): Promise<MissionAndGoals> => {
  const payload = await getPayload({ config });
  const data = await payload.findGlobal({ slug: "mission-and-goals" });
  return data as MissionAndGoals;
};
