"use client";
import "./box.css";
import { useRouter } from "next/navigation";
import { JSX } from "react";

export interface BoxProps {
  label1: string;
  text1: string;
  onClick1?: boolean;
  label2: string;
  text2: string;
  onClick2?: boolean;
}

/** Primary UI component for user interaction */
export const Box = ({
  label1,
  text1,
  label2,
  text2,
  ...props
}: BoxProps): JSX.Element => {
  const route = useRouter();

  return (
    <div className={["storybook-box"].join(" ")} {...props}>
      <div className={"content"}>
        <p className={"label"}>{label1}</p>
        <p
          onClick={() => props.onClick1 && route.push(text1)}
          className={props.onClick1 ? "underline cursor text" : "text"}
        >
          {text1}
        </p>
      </div>
      <div className={"content"}>
        <p className={"label"}>{label2}</p>
        <p
          onClick={() => props.onClick2 && route.push(text2)}
          className={props.onClick2 ? "underline text" : "text"}
        >
          {text2}
        </p>
      </div>
    </div>
  );
};
