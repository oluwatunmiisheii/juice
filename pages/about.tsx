import { Hero, Values, Team } from "@/components/About";
import { Guidance, Seo } from "@/components/Shared";

export default function About() {
  return (
    <>
      <Seo pageTitle="About" />
      <h1 className="sr-only">About</h1>
      <Hero />
      <Values />
      <Team />
      <Guidance />
    </>
  );
}
