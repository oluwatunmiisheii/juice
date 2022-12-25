import { spacesToUnderScore } from "@/utils/spacesToUnderScore";
import Image from "next/image";
import { Section, Card } from "../Shared";

const values = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc arcu, iaculis quis ipsum vel, efficitur venenatis lacus. Nulla mattis nulla sem, a tempor urna vehicula sit amet.",
    image: "/images/about/value-img.svg",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc arcu, iaculis quis ipsum vel, efficitur venenatis lacus. Nulla mattis nulla sem, a tempor urna vehicula sit amet.",
    image: "/images/cash-in-hand.svg",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc arcu, iaculis quis ipsum vel, efficitur venenatis lacus. Nulla mattis nulla sem, a tempor urna vehicula sit amet.",
    image: "/images/cash-in-hand.svg",
  },
];

export const Values = () => {
  return (
    <Section title="Juice Values" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
      {/* <div className="bg-white rounded-xl backdrop-blur-[20px] flex justify-between pl-10 pt-10 flex-col md:flex-row mt-10 mb-6">
        <div className="basis-[45%]">
          <h3 className="mb-4 text-[28px] leading-[42px] font-bold">{values[0].title}</h3>
          <p className="text-lg leading-8 tracking-[0.37px]">{values[0].description}</p>
        </div>
        <div className="basis-[45%] align">
          <Image src={values[0].image} height={100} width={100} alt="lorem Ipsum" className="h-full w-full" />
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.slice(1).map((value) => (
          <Card key={spacesToUnderScore(value.title)}>
            <Card.Icon src={value.image} size={88} />
            <Card.Title>{value.title}</Card.Title>
            <Card.Body>{value.description}</Card.Body>
          </Card>
        ))}
      </div>
    </Section>
  );
};
