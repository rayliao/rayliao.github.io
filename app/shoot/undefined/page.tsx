import { Metadata } from "next";
import Layout from "../../components/Layout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Undefined",
};

export default function Page() {
  const list = Array.from(new Array(34).keys());
  return (
    <Layout>
      <div className="flex flex-col items-center gap-2">
        {list.map((k) => (
          <div
            className="relative w-full max-w-[600px] aspect-square lg:w-[600px] lg:h-[600px]"
            key={k}
          >
            <Image
              fill
              className="object-cover"
              alt=""
              src={`/images/undefined/${k + 1}.jpg`}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
