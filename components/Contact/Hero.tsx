import Image from "next/image";
import { PageHero } from "../Shared";
import { ContactForm } from "./ContactForm";

export const Hero = () => {
  return (
    <PageHero
      title="How can we help?"
      description="Making a general inquiry, or you’ll like us to talk in detail? Tell us what you need and we will get back to you as soon as possible."
      rightSideContent={<ContactForm />}
    >
      <div className="grid grid-cols-3 md:grid-cols-4 mt-8 gap-8" data-aos="fade-up">
        {Array(6)
          .fill(undefined)
          .map((item, index) => (
            <div key={`${item}-${index + 1}`}>
              <Image height={48} width={48} src="/images/credentials/img-1.svg" alt="" />
            </div>
          ))}
      </div>
      <p className="mt-8 uppercase text-customGray text-xs">Diverse industry leaders use Juice</p>
    </PageHero>
  );
};
