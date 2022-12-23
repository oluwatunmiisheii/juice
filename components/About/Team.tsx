import Image from "next/image";
import Link from "next/link";
import { Section } from "../Shared";

const teams = [
  {
    title: "Management",
    members: [
      {
        name: "Ife Johnson",
        position: "Job position title",
        image: "/images/about/team/management/ife.svg",
        linkedin: "https://www.linkedin.com/",
      },
      {
        name: "Justin Ziegler",
        position: "Job position title",
        image: "/images/about/team/management/justin.svg",
        linkedin: "https://www.linkedin.com/",
      },
    ],
  },
  {
    title: "Engineering",
    members: [
      {
        name: "Ridwan Otun",
        position: "Job position title",
        image: "/images/about/team/engineering/ridwan.svg",
        linkedin: "https://www.linkedin.com/",
      },
      {
        name: "Pelumi Sola-Aremu",
        position: "Job position title",
        image: "/images/about/team/engineering/pelumi.svg",
        linkedin: "https://www.linkedin.com/",
      },
      {
        name: "Uk Chukundah",
        position: "Job position title",
        image: "/images/about/team/engineering/uk.svg",
        linkedin: "https://www.linkedin.com/",
      },
      {
        name: "Popsana Barida",
        position: "Job position title",
        image: "/images/about/team/engineering/popsana.svg",
        linkedin: "https://www.linkedin.com/",
      },
      {
        name: "Rasheed Atanda",
        position: "Job position title",
        image: "/images/about/team/engineering/rasheed.svg",
        linkedin: "https://www.linkedin.com/",
      },
      {
        name: "Chizi Ogbonda",
        position: "Job position title",
        image: "/images/about/team/engineering/chizi.svg",
        linkedin: "https://www.linkedin.com/",
      },
      {
        name: "Joseph Oladokun",
        position: "Job position title",
        image: "/images/about/team/engineering/joseph.svg",
        linkedin: "https://www.linkedin.com/",
      },
    ],
  },
  {
    title: "Product",
    members: [
      {
        name: "Ron Ogheneruona",
        position: "Job position title",
        image: "/images/about/team/products/ron.svg",
        linkedin: "https://www.linkedin.com/",
      },
      {
        name: "Grace Thompson",
        position: "Job position title",
        image: "/images/about/team/products/grace.svg",
        linkedin: "https://www.linkedin.com/",
      },
      {
        name: "Tomasz Zastawny",
        position: "Job position title",
        image: "/images/about/team/products/tomasz.svg",
        linkedin: "https://www.linkedin.com/",
      },
    ],
  },
  {
    title: "Treasury Ops",
    members: [
      {
        name: "Uche Okehie",
        position: "Job position title",
        image: "/images/about/team/treasury/uche.svg",
        linkedin: "https://www.linkedin.com/",
      },
    ],
  },
];

export const Team = () => {
  return (
    <Section title="Our Team" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
      {teams.map((team, index) => (
        <div key={index} className="mt-10">
          <h3 className="text-[28px] leading-[42px] font-bold mb-4">{team.title}</h3>
          <div className="grid grid-cols-3 gap-6">
            {team.members.map((member, i) => (
              <div key={i} className="bg-white rounded-xl backdrop-blur-[20px]">
                <Image src={member.image} height={240} width={100} alt={member.name} className="w-full" />
                <div className="p-10">
                  <h3 className="text-2xl leading-[38px] font-bold mb-2">{member.name}</h3>
                  <p className="text-lg leading-[32px] tracking-[0.37px] text-customGray">{member.position}</p>
                  <div className="mt-6">
                    <Link href={member.linkedin} target="_blank">
                      <Image src="/images/linkedin.svg" height={24} width={24} alt={`${member.name} LinkedIn`} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
};
