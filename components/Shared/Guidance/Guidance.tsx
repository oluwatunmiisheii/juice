import { Container } from "../Container/Container";
import Image from "next/image";
import { Button } from "../Button/Button";
import { CheckList } from "../CheckList/CheckList";
import Link from "next/link";

export const Guidance = () => {
  return (
    <div className="bg-customBlack w-full min-h-[580px] relative" data-aos="fade-up">
      <Container>
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="text-[#EEEEEE] py-16 pr-6">
            <h4 className="text-[40px] font-bold leading-[54px] mb-6" data-aos="fade-up">
              Do you think you’re a <br /> good fit?
            </h4>
            <p className="text-lg leading-[32px] mb-4 font-normal" data-aos="fade-up">
              Even though we may not be looking for talents and the moment we are open to any inquiries. Reach out to us
              and convince why we should work together.
            </p>
            <CheckList
              items={[
                "Make sure your resume is attached",
                "We value skills the most",
                "We’ll reply to every email regardless of the decision",
              ]}
            />
            <Link href="contact-us">
              <Button
                className="mt-8"
                variant="secondary"
                onClick={() => console.log("Clicked")}
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:hidden h-[300px]">
          <Image src="/images/talent.png" height={600} width={600} alt="Talent" className="h-full w-full" />
        </div>
      </Container>
      <div className="absolute right-0 h-full top-0 w-1/2 hidden lg:block" data-aos="fade-down" data-aos-delay="600">
        <div className="bg-[url('/images/talent.png')] bg-cover h-full bg-center bg-no-repeat" />
      </div>
    </div>
  );
};
