import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Shared";

const footerLinks = [
  {
    title: "Resources",
    links: [
      {
        title: "Documentation",
        url: "https://www.google.com",
      },
      {
        title: "Help Center",
        url: "https://www.google.com",
      },
      {
        title: "Guides",
        url: "https://www.google.com",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Terms & conditions",
        url: "https://www.google.com",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "About Us",
        url: "https://www.google.com",
      },
      {
        title: "Contact Us",
        url: "https://www.google.com",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-customPurple py-16">
      <Container>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-8 md:px-0">
          <div className="flex items-start">
            <div className="mr-3">
              <Image src="/images/juice-icon.svg" width={32} height={32} alt="" />
            </div>
            <p className="text-sm leading-8 text-customBlack">
              &copy; {new Date().getFullYear()} <br />
              All rights reserved
            </p>
          </div>
          {footerLinks.map((footerLink) => (
            <ul key={footerLink.title} className="flex flex-col space-y-2 md:space-y-4">
              <li className="font-bold text-customBlack text-lg leading-[38px]">{footerLink.title}</li>
              {footerLink.links.map((link) => (
                <li key={link.title} className="text-customBlack text-base font-normal leading-9 tracking-[0.37px]">
                  <Link href={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </Container>
    </footer>
  );
};
