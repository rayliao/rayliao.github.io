import { Metadata } from "next";
import Family from "../components/Family";

export const metadata: Metadata = {
  title: "Li",
};

export default function Page() {
  const shuffleList = [1, 2, 5, 6, 7, 8, 10, 11, 12, 13, 14].reverse();
  return <Family data={shuffleList} path="li" />;
}
