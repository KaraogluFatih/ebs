export interface MissionAndGoals {
  title: string;
  description: string;
  image: {
    id: string;
    url: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width?: number;
    height?: number;
    alt?: string;
  };
  goalsTitle: string;
  goals: GoalItem[];
}

export interface GoalItem {
  goal: string;
}
