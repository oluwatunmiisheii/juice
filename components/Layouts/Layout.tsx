import type { PropsWithChildren, FC } from "react";
import { Footer } from "./Footer/Footer";
import { Navigation } from "./Navigation/Navigation";

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main className="text-customBlack">{children}</main>
      <Footer />
    </div>
  );
};
