import { Montserrat, Days_One } from "next/font/google";
import { FC } from "react";

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

const days_one = Days_One({
  weight: ["400"],
  subsets: ["latin"],
});

export const Fonts: FC = () => {
  return (
    <style jsx global>
      {`
        :root {
          --font-montserrat: ${montserrat.style.fontFamily};
          --font-days-one: ${days_one.style.fontFamily};
        }
      `}
    </style>
  );
};
