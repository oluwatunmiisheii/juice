import { Hero, Articles } from "@/components/Articles";
import { Seo } from "@/components/Shared";

export default function About() {
  return (
    <>
      <Seo pageTitle="About" />
      <h1 className="sr-only">Articles</h1>
      <Hero />
      <Articles />
    </>
  );
}
