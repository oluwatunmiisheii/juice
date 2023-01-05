import { StoryBody, StoryHeader } from "@/components/Articles";
import { Seo } from "@/components/Shared";

export default function About() {
  return (
    <>
      <Seo pageTitle="Articles Details" />
      <h1 className="sr-only">Article Details</h1>
      <StoryHeader />
      <StoryBody />
    </>
  );
}
