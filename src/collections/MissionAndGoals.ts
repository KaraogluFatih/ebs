import { GlobalConfig } from "payload";

const MissionAndGoals: GlobalConfig = {
  slug: "mission-and-goals",
  label: "Misson-and-Goals",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      defaultValue: "Bildung im christlichen Kontext",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
      defaultValue:
        "Das Evangelische Bildungswerk Kempten versteht sich als Ort der Begegnung, des Lernens und des Glaubens. Wir bieten Raum für Austausch, Reflexion und persönliches Wachstum auf der Grundlage christlicher Werte.",
    },
    {
      name: "image",
      label: "Right-side Image",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "goalsTitle",
      label: "Goals Section Title",
      type: "text",
      required: true,
      defaultValue: "Unsere Ziele",
    },
    {
      name: "goals",
      label: "Ziele (Goals)",
      type: "array",
      required: true,
      fields: [
        {
          name: "goal",
          label: "Goal Item",
          type: "text",
        },
      ],
      defaultValue: [
        {
          goal: "Menschen in ihrer persönlichen und spirituellen Entwicklung zu begleiten und zu fördern",
        },
        {
          goal: "Einen Beitrag zum gesellschaftlichen Dialog über ethische, soziale und religiöse Fragen zu leisten",
        },
        {
          goal: "Gemeinschaft zu stiften und Menschen unterschiedlicher Generationen und Hintergründe zusammenzubringen",
        },
        {
          goal: "Christliche Bildung in zeitgemäßer Form anzubieten und den Glauben im Alltag erfahrbar zu machen",
        },
      ],
    },
  ],
};

export default MissionAndGoals;
