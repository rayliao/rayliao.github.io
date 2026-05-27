import Image from "next/image";
import { JonData } from "../common/config";
import { Metadata } from "next";
import { getImageUrl } from "../common/image";

export const metadata: Metadata = {
  title: "Jon",
};

export default function Page() {
  return (
    <div className="p-2 flex flex-col items-center gap-10 lg:gap-40">
      {JonData.map((item, index) => (
        <div
          key={item.name}
          className="w-full lg:w-[600px] flex flex-col gap-2"
        >
          <div className="relative w-full aspect-square">
            <Image
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              priority={index < 2}
              alt={`Jon - Age ${item.name}`}
              className="object-contain"
              src={getImageUrl(`jon/${item.name}.JPG`)}
            />
          </div>
          <p className="text-sm">{item.content}</p>
        </div>
      ))}
    </div>
  );
}
