"use client";
import { Button } from "@repo/ui/button";
import { JSX } from "react";
import "./main.css";
import { useRouter } from "next/navigation";

export default function Page(): JSX.Element {
  const headerText = "지원자분 성함을 적어주세요";
  const contentText = "안녕하세요\n정예림입니다.";
  const isSize = "lg";
  const route = useRouter();
  return (
    <div className={"intro-container"}>
      <div className={"wrapper"}>
        <header className={"header"}>
          <div className={"text"}>{headerText}</div>
        </header>
        <main className={"content-wrapper"}>
          <div className={"text"}>{contentText}</div>
        </main>
        <Button
          onClick={() => route.push("/result")}
          size={isSize}
          textColor={"white"}
          backgroundColor={"black"}
          label={"다음"}
        />
      </div>
    </div>
  );
}
