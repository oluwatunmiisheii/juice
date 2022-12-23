import { Button } from "@/components/Shared";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "Documentation",
    href: "/",
  },
  {
    name: "Benefits",
    href: "/about",
  },
  {
    name: "Use cases",
    href: "/services",
  },
  {
    name: "Guidance",
    href: "/blog",
  },
];

const DesktopNavigation = () => {
  return (
    <nav className="hidden lg:flex justify-between w-full items-center h-full">
      <Link href="/">
        <Image src="/images/full-logo.svg" alt="Logo" width={100} height={80} />
      </Link>
      <ul className="hidden lg:flex space-x-7">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Button variant="tertiary" size="small" className="!px-5">
        Contact Us
      </Button>
    </nav>
  );
};

const MobileNavigation = () => {
  return (
    <nav className="flex justify-between w-full items-center h-full lg:hidden">
      <Link href="/">
        <Image src="/images/full-logo.svg" alt="Logo" width={100} height={80} />
      </Link>
      {/* // hamburger menu goes here */}
    </nav>
  );
};

export const Navigation = () => {
  return (
    <header className="px-7 h-[90px] bg-nav-gradient backdrop-blur-[20px] sticky top-0 z-20">
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
};
