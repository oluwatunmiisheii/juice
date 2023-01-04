import { Card, CheckList, Section } from "../Shared";
import Image from "next/image";

export const Info = () => {
  return (
    <Section title="Accept and process payments in a secure and scalable way" description="">
      <div
        className="bg-white rounded-xl backdrop-blur-[20px] flex justify-between px-6 pt-6 lg:pr-0 lg:pl-10 lg:pt-10 flex-col md:flex-row mt-10 mb-6"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-delay="200"
      >
        <div className="basis-[100%] md:basis-[45%] flex-shrink-0">
          <h3 className="mb-4 text-[28px] leading-[42px] font-bold">Speedy settlements</h3>
          <p className="text-lg leading-8 tracking-[0.37px]">
            Legacy payments take up to 4 business days to settle. With Juice’s rapid payment system, payments settle in
            only a couple of hours. Save time and effort with effective scheme management, and timely settlement.
          </p>
        </div>
        <div className="basis-[45%] relative">
          <div className="w-full h-[280px]" data-aos="fade-down" data-aos-offset="100" data-aos-delay="400">
            <Image src="/images/about/value-img.svg" fill alt="info image" />
          </div>
        </div>
      </div>

      <div
        className="p-6 md:p-10 bg-[#5D57F6] text-customGrayLight rounded-xl mb-6"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-delay="400"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <h3 className="text-[28px] leading-[42px] font-bold" data-aos="fade-up">
              $50 for for all payin and payout transactions
            </h3>
          </div>
          <div />
          <p className="text-lg tracking-[0.37px] leading-[32px]" data-aos="fade-up">
            Using Juice rails, cross border payments is simple. See your transfers settle as soon as the next business
            hour. We offer clear pricing and no surprise fees.
          </p>
          <p className="text-lg tracking-[0.37px] leading-[32px]" data-aos="fade-up">
            Using Juice rails, cross border payments is simple. See your transfers settle as soon as the next business
            hour. We offer clear pricing and no surprise fees.
          </p>
        </div>
        <div
          className="w-full h-[250px] md:h-[500px] relative mt-6"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-delay="600"
        >
          <Image src="/images/dash-analytics.png" fill alt="dashboard-analytics" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <Card.Icon src="/images/benefits/kyc-fraud.svg" size={88} />
          <Card.Title>Security enabled</Card.Title>
          <Card.Body>
            Juice delivers a frictionless flow that offers many layers of protection without sacrificing user
            experience. Accrue way less in operational expenses associated with fraud investigations.
          </Card.Body>
        </Card>
        <Card>
          <Card.Icon src="/images/benefits/liquidity-sourcing.svg" size={88} />
          <Card.Title>Great pricing</Card.Title>
          <Card.Body>
            Especially valuable for businesses processing huge volumes at high frequencies, Juice charges a flat fee per
            transaction. No percentage or any surprise monthly fees.
          </Card.Body>
        </Card>
      </div>
      <div className="bg-customBlack rounded-xl mt-6 text-customGrayLight p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
          <div>
            <h3 className="text-[28px] leading-[42px] font-bold">$50 for for all payin and payout transactions</h3>
          </div>
          <div />
          <p className="text-lg tracking-[0.37px] leading-[32px]">
            Using Juice rails, cross border payments is simple. See your transfers settle as soon as the next business
            hour. We offer clear pricing and no surprise fees.
          </p>
          <div>
            <CheckList
              items={[
                "Make sure your resume is attached",
                "We value skills the most",
                "We’ll reply to every email regardless of the decision",
              ]}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
