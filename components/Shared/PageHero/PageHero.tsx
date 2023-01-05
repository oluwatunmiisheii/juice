import type { FC, ReactNode } from "react";
import Image from "next/image";
import { Container } from "../Container/Container";

interface PageHeroProps {
  title: string;
  description?: ReactNode;
  image?: string;
  rightSideContent?: ReactNode;
  children?: ReactNode;
}

export const PageHero: FC<PageHeroProps> = ({ title, description, image, rightSideContent, children }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10 pt-16">
        <div>
          <h1 className="text-[40px] md:text-[56px] font-bold leading-[70px]" data-aos="fade-up">
            {title}
          </h1>
          {description ? (
            <div className="text-lg leading-[32px] tracking-[0.37px] mt-6" data-aos="fade-up" data-aos-delay="100">
              {description}
            </div>
          ) : null}
          {children}
        </div>
        <div>
          {image && (
            <div className="relative h-[350px]" data-aos="fade-down" data-aos-delay="300">
              <Image src={image} alt="" fill quality={100} priority />
            </div>
          )}
          {rightSideContent ? rightSideContent : null}
        </div>
      </div>
    </Container>
  );
};
