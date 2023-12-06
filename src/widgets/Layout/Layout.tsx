import s from "./styles.module.scss";
import { FC } from "react";

interface LayoutProps {
  children?: any;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.page_container}>
      <div className={s.main_section}>{children}</div>
    </div>
  );
};
