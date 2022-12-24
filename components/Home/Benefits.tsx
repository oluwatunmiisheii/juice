import { Card, Section } from "../Shared";
import { spacesToUnderScore } from "@/utils/spacesToUnderScore";

const benefits = [
  {
    image: "/images/benefits/digital-wallets.svg",
    title: "Digital wallets",
    description:
      "Generate white label custodial wallets for your business and your end users via our API. This wallet can receive digital currency on-chain and via regular bank transfer.",
  },
  {
    image: "/images/benefits/international-payment.svg",
    title: "International payouts",
    description:
      "Frictionlessly move funds to major destinations in the world via our unified dashboard. We charge 0% in commission, only a per-transaction fee of $50 only.",
  },
  {
    image: "/images/benefits/liquidity-sourcing.svg",
    title: "Liquidity sourcing",
    description:
      "Maintain cash flow required for international payments. Juice will provide your business with cash available for swaps whenever you want to make global payments.",
  },
  {
    image: "/images/benefits/cross-border-remmitance.svg",
    title: "Cross border remmittance",
    description: "Send money to major destinations in the world in either USD, or users local currency. ",
  },
  {
    image: "/images/benefits/kyc-fraud.svg",
    title: "KYC & fraud checks",
    description:
      "Get your business and your users onboarded safely and compliantly, without all the frustrations. Maximize payments from legitimate customers and minimize fraud.",
  },
  {
    image: "/images/benefits/payment-gateway.svg",
    title: "Payment gateway",
    description:
      "Avoid the collections difficulties in emerging markets. Enable fully compliant payment collections for your business. Accept payments from your users in both digital and.",
  },
];

const metrics = [
  {
    title: "+70",
    description: "Countries supported for USD payments",
  },
  {
    title: "+100",
    description: "Countries supported for local payouts",
  },
  {
    title: "70%",
    description: "Quicker payout time",
  },
];

export const Benefits = () => {
  return (
    <Section title="Benefits" description="Why Juice">
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <Card key={spacesToUnderScore(benefit.title)}>
              <Card.Icon src={benefit.image} size={88} />
              <Card.Title>{benefit.title}</Card.Title>
              <Card.Body>{benefit.description}</Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-customBlack rounded-xl mt-6 text-customGrayLight">
        <div className="grid grid-cols-3 gap-8">
          {metrics.map((metric) => {
            return (
              <Card key={spacesToUnderScore(metric.title)} extraClasses="bg-customBlack">
                <Card.Title>{metric.title}</Card.Title>
                <Card.Body>{metric.description}</Card.Body>
              </Card>
            );
          })}
        </div>
        <div className="pb-10 px-10">
          <p className="uppercase text-[#D8D8D8] text-xs]">all bragging rights unreserved.*</p>
        </div>
      </div>
    </Section>
  );
};
