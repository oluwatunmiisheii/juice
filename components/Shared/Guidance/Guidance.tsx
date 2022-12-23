import { Container } from "../Container/Container";
import Image from "next/image";
import { Button } from "../Button/Button";
import { CheckList } from "../CheckList/CheckList";

export const TalentEnquiry = () => {
  return (
    <div className="bg-customBlack w-full h-[580px] relative">
      <Container>
        <div className="w-1/2 flex flex-col items-center h-full">
          <div className="text-[#EEEEEE] py-16 pr-6">
            <h4 className="text-[40px] font-bold leading-[54px] mb-6">
              Do you think you’re a <br /> good fit?
            </h4>
            <p className="text-lg leading-[32px] mb-4 font-normal">
              Even though we may not be looking for talents and the moment we are open to any inquiries. Reach out to us
              and convince why we should work toghether.
            </p>
            <CheckList
              items={[
                "Make sure your resume is attached",
                "We value skills the most",
                "We’ll reply to every email regardless of the decision",
              ]}
            />
            <Button className="mt-8" variant="secondary" onClick={() => console.log("Clicked")}>
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
      <div className="absolute right-0 h-full top-0 w-1/2">
        <Image src="/images/talent.png" height={600} width={600} alt="Talent" className="h-full w-full" />
      </div>
    </div>
  );
};
