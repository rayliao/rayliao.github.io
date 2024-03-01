import Family from "../components/Family";

export default function Page() {
  const max = 25;
  const list = Array.from(new Array(max + 1).keys());
  const shuffleList = list.reverse();
  return <Family data={shuffleList} path="family" />;
}
