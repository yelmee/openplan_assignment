// import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
// import styles from "./page.module.css";
import {
    JSX
} from "react";

// type Props = Omit<ImageProps, "src"> & {
//   srcLight: string;
//   srcDark: string;
// };

// const ThemeImage = (props: Props) => {
//   const { srcLight, srcDark, ...rest } = props;
//
//   return (
//     <>
//       <Image {...rest} src={srcLight} className="imgLight" />
//       <Image {...rest} src={srcDark} className="imgDark" />
//     </>
//   );
// };

export default function Home(): JSX.Element {
  return (
      <div
          className={""}>
        <Button label={'tesdf'}/>
      </div>
  );
}
