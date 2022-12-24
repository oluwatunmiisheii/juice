import Image from "next/image";
import { Button } from "../Shared";

export const Hero = () => {
  return (
    <div className="bg-[url('/images/hero.png')] bg-cover min-h-[500px] w-full bg-center flex items-center justify-center text-center relative">
      <div className="w-full lg:w-[50%]">
        <h1 className="text-[56px] leading-[70px] font-bold text-center mb-6">
          Everything you need for reliable global payments
        </h1>
        <p className="text-lg text-center mb-8 leading-[32px] tracking-[0.37px]">
          Juice is an ecosystem of services making business cross border payment less complex, more reliable and
          compliant than ever before.
        </p>
        <Button>Contact Us</Button>

        <div className="mt-16">
          <div className="grid grid-cols-6">
            {Array(6)
              .fill(undefined)
              .map((item, index) => (
                <div key={`${item}-${index}`} className="flex items-center justify-center">
                  <Image height={48} width={48} src="/images/credentials/img-1.svg" alt="" />
                </div>
              ))}
          </div>
          <p className="mt-4 text-customGray">DIVERSE INDUSTRY LEADERS TRUST JUICE</p>
        </div>
      </div>
    </div>
  );
};
