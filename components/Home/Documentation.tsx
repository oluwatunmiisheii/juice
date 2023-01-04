import React from "react";
import Image from "next/image";
import { Container, Button, CheckList } from "../Shared";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export const Documentation = () => {
  return (
    <div className="bg-customBlack w-full min-h-[580px] relative" data-aos="fade-up">
      <Container>
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="text-[#EEEEEE] py-16 pr-6" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-[40px] font-bold leading-[54px] mb-6">
              Higher levels of <br /> operational efficiency <br /> with our API suite
            </h4>
            <p className="text-lg leading-[32px] mb-4 font-normal" data-aos="fade-up" data-aos-delay="300">
              Juice is an ecosystem of services making business cross border payment less complex, more reliable and
              compliant than ever before.
            </p>
            <CheckList
              items={["Thousand of successful payouts", "Compliance & risk experts", "Round the clock support"]}
            />
            <Button
              className="mt-8"
              variant="secondary"
              onClick={() => console.log("Clicked")}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <span className="underline mr-3">Documentation</span>
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="w-full lg:hidden h-[300px]">
          <Image src="/images/documentation-img.png" height={600} width={600} alt="Talent" className="h-full w-full" />
        </div>
      </Container>
      <div className="absolute right-0 h-full top-0 w-1/2 hidden lg:block" data-aos="fade-down" data-aos-delay="600">
        <div className="bg-[url('/images/documentation-img.png')] bg-cover h-full bg-center bg-no-repeat" />
      </div>
    </div>
  );
};
