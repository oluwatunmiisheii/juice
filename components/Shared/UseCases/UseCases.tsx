import { Accordion } from "../Accordion/Accordion";
import { Button } from "../Button/Button";
import { Section } from "../Section/Section";

export const UseCases = () => {
  return (
    <Section
      title="Payment solutions for diverse use cases"
      description="Discover how we help some of Africa’s leading businesses"
    >
      <div className="mt-10">
        <Accordion>
          <Accordion.Item value="operating-businesses" title="Operating businesses">
            <p className="text-lg leading-[32px] text-customGray tracking-[0.37px]">
              Start accepting payments in real time, no matter where your customers are based. Payments will settle in
              under one day. Increase your conversion with multiple payment methods your customers can choose from, for
              their ease.
            </p>
            <Button className="mt-8">Contact us</Button>
          </Accordion.Item>
          <Accordion.Item value="finance-managers" title="Finance Managers" className="mt-4">
            <p className="text-lg leading-[32px] text-customGray tracking-[0.37px]">
              Empower your team with scalable technology that saves you time and money. Optimize your treasury
              operations to move money in the quickest and most compliant way possible.
            </p>
            <Button className="mt-8">Contact us</Button>
          </Accordion.Item>
          <Accordion.Item value="bcds" title="BDCs and IMTOs" className="mt-4">
            <p className="text-lg leading-[32px] text-customGray tracking-[0.37px]">
              Convert local currency to USD with ease. Expand your diaspora remittance inflow and outflow to over 100
              countries worldwide.
            </p>
            <Button className="mt-8">Contact us</Button>
          </Accordion.Item>
        </Accordion>
        <div className="px-6 py-8 bg-white backdrop-blur-[20px] rounded-xl mt-4">
          <h3 className="font-bold text-[24px] tracking-[0.37px] leading-8 md:text-[28px] mb-6">
            Not sure if you&apos;re a good match?
          </h3>
          <p className="text-lg leading-[32px] text-customGray tracking-[0.37px]">
            Start accepting payments in real time, no matter where your customers are based. Payments will settle in
            under one day. Increase your conversion with multiple payment methods your customers can choose from, for
            their ease.
          </p>
          <Button className="mt-8">Contact us</Button>
        </div>
      </div>
    </Section>
  );
};
