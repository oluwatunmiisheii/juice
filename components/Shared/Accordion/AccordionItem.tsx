import { ReactNode, FC } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Transition } from "@headlessui/react";
import classnames from "classnames";
import useAccordionContext from "./Accordion";

interface AccordionItemProps {
  children: ReactNode;
  value: string;
  title?: ReactNode;
  className?: string;
}

export const AccordionItem: FC<AccordionItemProps> = ({ children, value, title, className = "" }) => {
  const { expanded, toggle } = useAccordionContext();
  const open = expanded === value;

  return (
    <>
      <div className={`bg-white backdrop-blur-[20px] rounded-xl ${className}`}>
        <button
          onClick={() => toggle(value)}
          className="w-full py-8 px-6 flex justify-between items-center"
          aria-controls={`accordion-${value}-header`}
          aria-expanded={open}
          id={`accordion-${value}`}
        >
          <h3 className="font-bold tracking-[0.37px] leading-8 text-[28px]">{title}</h3>
          <div className="rounded-xl bg-[#EEEEEE] p-2 flex items-center justify-between">
            <ChevronDownIcon className={classnames("w-4 h-4 transition", { "transform rotate-180": open })} />
          </div>
        </button>
      </div>
      <Transition
        show={open}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div
          className="px-6 py-8 bg-white backdrop-blur-[20px] rounded-xl mt-4"
          aria-hidden={!open}
          id={`accordion-${value}-item`}
          aria-labelledby={`accordion-${value}`}
        >
          {children}
        </div>
      </Transition>
    </>
  );
};
