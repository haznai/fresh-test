import { JSX } from "preact";
import TalkSubsection from "./TalkSubsection.tsx";

export default function TalksSection(): JSX.Element {
  return (
    <>
      <TalkSubsection
        title="AI Trends and Predictions for 2025"
        description="Short-term and Long-term predictions for AI in 2025, held at the AI x Bern Meetup."
        image="/talks/ai-trends-and-predictions-for-2025.png"
        imageAlt="Preview slide from AI Trends and Predictions presentation"
        link="/talks/ai-trends-and-predictions-for-2025.pdf"
      />
      <TalkSubsection
        title="Intuitions for AI Usage"
        description="In which I provide my students intuition pumps for AI/LLM usage. In German, but easily translatable via LLMs."
        image="/talks/intuitions-for-ai-usage.png"
        imageAlt="Preview slide from Intuitions for AI Usage presentation"
        link="/talks/intuitions-for-ai-usage.pdf"
      />
    </>
  );
}
