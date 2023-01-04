import { useState } from "react";
import { Button, SlideOver } from "@/components/Shared";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/articles",
  },
  {
    name: "Terms",
    href: "/terms-and-conditions",
  },
  {
    name: "FAQ",
    href: "#",
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
      <Link href="/contact-us">
        <Button variant="tertiary" size="small" className="!px-5">
          Contact Us
        </Button>
      </Link>
    </nav>
  );
};

const MobileNavigation = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="flex justify-between w-full items-center h-full lg:hidden">
        <Link href="/">
          <Image src="/images/full-logo.svg" alt="Logo" width={100} height={80} />
        </Link>
        <button onClick={() => setShow(true)}>
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>
      <SlideOver open={show} setOpen={setShow}>
        <SlideOver.Header>
          <div className="flex justify-end">
            <SlideOver.Close type="close" />
          </div>
        </SlideOver.Header>
        <SlideOver.Body>
          <ul className="space-y-7">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-2xl">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact-us">
                <Button variant="tertiary" size="small" className="!px-5">
                  Contact Us
                </Button>
              </Link>
            </li>
          </ul>
        </SlideOver.Body>
      </SlideOver>
    </>
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
