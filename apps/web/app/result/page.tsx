import Image from "next/image";
import { Button } from "@repo/ui/button";
import "./result.css";
import { Box } from "@repo/ui/box";
import { getResult } from "../../action/getResult";
import { notFound } from "next/navigation";
import { JSX } from "react";

export default async function Page(): Promise<JSX.Element> {
  const headerText = "지원자분 성함을 적어주세요";
  const data = await getResult();

  if (!data) {
    return notFound();
  }

  return (
    <div className={"result-container"}>
      <div className={"wrapper"}>
        <header className={"header"}>
          <div className={"text"}>{headerText}</div>
        </header>

        <main className={"result-content"}>
          <div className={"result-wrapper"}>
            <Image
              alt={"img"}
              width={100}
              height={100}
              src={data.download_url}
              className="img"
            />
            <div className={"info"}>
              <Box
                label1={"id"}
                text1={data.id}
                label2={"author"}
                text2={data.author}
              />
              <Box
                label1={"with"}
                text1={String(data.width)}
                label2={"height"}
                text2={String(data.height)}
              />
              <Box
                label1={"url"}
                text1={data.url}
                label2={"download_url"}
                text2={data.download_url}
              />
              <Button
                textColor={"white"}
                backgroundColor={"black"}
                label={"다음"}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
