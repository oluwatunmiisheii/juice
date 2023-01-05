import { Hero } from "@/components/Contact";
import { UseCases, Seo } from "@/components/Shared";

const ContactUs = () => {
  return (
    <>
      <Seo pageTitle="Contact Us" />
      <h1 className="sr-only">Contact</h1>
      <div className="bg-contact-gradient">
        <Hero />
        <UseCases />
      </div>
    </>
  );
};

export default ContactUs;
