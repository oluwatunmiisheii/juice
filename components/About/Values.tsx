import Image from "next/image";
import { Section } from "../Shared";

const values = [
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
      <div className="bg-white rounded-xl backdrop-blur-[20px] flex justify-between pl-10 pt-10 flex-col md:flex-row mt-10 mb-6">
        <div className="basis-[45%]">
          <h3 className="mb-4 text-[28px] leading-[42px] font-bold">Lorem ipsum</h3>
          <p className="text-lg leading-8 tracking-[0.37px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc arcu, iaculis quis ipsum vel, efficitur
            venenatis lacus. Nulla mattis nulla sem, a tempor urna vehicula sit amet.
          </p>
        </div>
        <div className="basis-[45%] align">
          <Image
            src="/images/about/value-img.svg"
            height={100}
            width={100}
            alt="Two each of gray, white, and black shirts laying flat."
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {values.map((value, index) => (
          <div key={index} className="bg-white rounded-xl backdrop-blur-[20px] p-10">
            <Image
              src={value.image}
              height={88}
              width={88}
              alt="Two each of gray, white, and black shirts laying flat."
            />
            <h3 className="text-[28px] leading-[42px] font-bold mb-4 mt-6">{value.title}</h3>
            <p className="text-lg leading-[32px] tracking-[0.37px]">{value.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
