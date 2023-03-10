import { PropsWithChildren, FC } from "react";

export const Container: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className="max-w-5xl mx-auto px-7">{children}</div>;
};
