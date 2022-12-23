import { PageHero } from "../Shared";
import { ContactForm } from "./ContactForm";

export const Hero = () => {
  return (
    <PageHero
      title="How can we help?"
      description="Making a general inquiry, or you’ll like us to talk in detail? Tell us what you need and we will get back to you as soon as possible."
      rightSideContent={<ContactForm />}
    />
  );
};
