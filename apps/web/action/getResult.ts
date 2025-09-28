"use server";

import { notFound } from "next/navigation";
import { ResultType } from "../data";

export async function getResult(): Promise<ResultType | null> {
  try {
    const res = await fetch("https://picsum.photos/id/0/info");
    const data = await res.json();
    if (data) {
      return data as unknown as ResultType;
    } else {
      return null;
    }
  } catch (error) {
    return notFound();
  }
}
