import type { ReactNode, PropsWithChildren } from "react";
import Image from "next/image";

interface CardProps {
  children: ReactNode;
  extraClasses?: string;
}

export const Card = ({ children, extraClasses }: CardProps) => {
  return <div className={`bg-white rounded-xl backdrop-blur-[20px] p-10 ${extraClasses}`}>{children}</div>;
};

const Title = ({ children }: PropsWithChildren) => (
  <h3 className="mb-4 text-[28px] leading-[42px] font-bold">{children}</h3>
);

const Body = ({ children }: PropsWithChildren) => <p className="text-lg leading-8 tracking-[0.37px]">{children}</p>;

const Icon = ({ src, size = 88 }: { src: string; size?: number }) => {
  return (
    <div className="mb-6">
      <Image src={src} height={size} width={size} alt="icon" />
    </div>
  );
};

Card.Title = Title;
Card.Body = Body;
Card.Icon = Icon;
