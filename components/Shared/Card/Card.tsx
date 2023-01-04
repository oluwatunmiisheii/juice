import type { ReactNode, PropsWithChildren } from "react";
import Image from "next/image";

interface CardProps {
  children: ReactNode;
  extraClasses?: string;
}

export const Card = ({ children, extraClasses }: CardProps) => {
  return (
    <div className={`bg-white rounded-xl backdrop-blur-[20px] p-6 md:p-10 ${extraClasses}`} data-aos="fade-up">
      {children}
    </div>
  );
};

const Icon = ({ src, size = 88 }: { src: string; size?: number }) => {
  return (
    <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
      <Image src={src} height={size} width={size} alt="icon" />
    </div>
  );
};

const Title = ({ children }: PropsWithChildren) => (
  <h3 className="mb-4 text-[28px] leading-[42px] font-bold" data-aos="fade-up" data-aos-delay="300">
    {children}
  </h3>
);

const Body = ({ children }: PropsWithChildren) => (
  <p className="text-lg leading-8 tracking-[0.37px]" data-aos="fade-up" data-aos-delay="500">
    {children}
  </p>
);

Card.Title = Title;
Card.Body = Body;
Card.Icon = Icon;
