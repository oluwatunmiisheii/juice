import { Guidance, UseCases, Seo } from "@/components/Shared";
import { Benefits, Info, Hero, Documentation } from "@/components/Home";

export default function Home() {
  return (
    <>
      <Seo pageTitle="Home" />
      <h1 className="sr-only">Home</h1>
      <Hero />
      <Info />
      <Documentation />
      <Benefits />
      <UseCases />
      <Guidance />
    </>
  );
}
