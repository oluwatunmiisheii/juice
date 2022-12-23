import { createContext, useCallback, useContext, useMemo, useState, ReactNode, FC } from "react";
import { AccordionIcon } from "./AccordionIcon";
import { AccordionItem } from "./AccordionItem";

const AccordionContext = createContext({ expanded: "", toggle: (value: string) => {} });

interface AccordionProps {
  children: ReactNode;
  defaultExpanded?: string;
}

const Accordion = ({ children, defaultExpanded = "" }: AccordionProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggle = useCallback(
    (value: string) => {
      setExpanded(() => {
        if (expanded !== value) return value;
        return "";
      });
    },
    [expanded, setExpanded],
  );

  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);

  return (
    <AccordionContext.Provider value={value}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

export default function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error("useAccordionContext must be used within a AccordionContext");
  }
  return context;
}

Accordion.Item = AccordionItem;
Accordion.Icon = AccordionIcon;

export { Accordion };
