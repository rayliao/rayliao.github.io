import Family from "../../../components/Family";

export default function Page() {
  const shuffleList = [1, 2, 5, 6, 7, 8, 10, 11, 12, 13, 14].reverse();
  return <Family data={shuffleList} path="li" />;
}
