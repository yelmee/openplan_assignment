import "./box.css";

export interface BoxProps {
  label1: string;
  text1: string;
  onClick1?: () => void;
  label2: string;
  text2: string;
  onClick2?: () => void;
}

/** Primary UI component for user interaction */
export const Box = ({
  label1,
  text1,
  onClick1,
  label2,
  text2,
  onClick2,
  ...props
}: BoxProps) => {
  return (
    <div className={["storybook-box"].join(" ")} {...props}>
      <div className={"content"}>
        <p className={"label"}>{label1}</p>
        <p onClick={onClick1} className={"text"}>
          {text1}
        </p>
      </div>
      <div className={"content"}>
        <p className={"label"}>{label2}</p>
        <p onClick={onClick2} className={"text"}>
          {text2}
        </p>
      </div>
    </div>
  );
};
