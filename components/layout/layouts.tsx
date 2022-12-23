import type { PropsWithChildren, FC } from "react";
import { Footer } from "./Footer/footers";
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
