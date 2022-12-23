import { FC } from "react";
import Image from "next/image";

export const AccordionIcon: FC<{ icon: string; size: number }> = ({ icon, size }) => {
  return <Image src={icon} width={size} height={size} alt="icon" />;
};
