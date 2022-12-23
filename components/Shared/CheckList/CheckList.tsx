import { FC } from "react";
import Image from "next/image";

interface CheckListProps {
  items: string[];
}
export const CheckList: FC<CheckListProps> = ({ items }) => {
  return (
    <ul className="flex flex-col space-y-4 font-normal">
      {items.map((item, index) => (
        <li className="flex items-center" key={index}>
          <Image
            src="/images/success-check.svg"
            height={16}
            width={16}
            alt="Success check"
            className="mr-3 flex-shrink-0"
          />
          <p className="text-lg leading-[32px]">{item}</p>
        </li>
      ))}
    </ul>
  );
};
