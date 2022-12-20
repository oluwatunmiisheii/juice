import type { PropsWithChildren, FC } from "react";
import { Footer } from "./footer/footer";

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <header></header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};
