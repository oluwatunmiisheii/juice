import { FC, ReactNode } from "react";
import { Container } from "../Container/Container";

interface SectionProps {
  title: ReactNode;
  description: ReactNode;
  background?: string;
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({ title, description, children, background = "" }) => {
  return (
    <section className={`${background} py-8 md:py-16`}>
      <Container>
        <div className="w-full lg:w-1/2">
          <h2 className="text-[32px] leading-[40px] md:text-[40px] md:leading-[54px] font-bold mb-6" data-aos="fade-up">
            {title}
          </h2>
          <p className="text-lg leading-[32px] text-customGray tracking-[0.37px]" data-aos="fade-up">
            {description}
          </p>
        </div>
        {children}
      </Container>
    </section>
  );
};
