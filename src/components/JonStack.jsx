import { useLayoutEffect, useState } from "react";
import Stack from "./Stack.jsx";
import { JonData } from "@utils/personal";
import { getImageUrl } from "@utils/image";

const SIZER = JonData.reduce((a, b) => (b.content.length > a.content.length ? b : a));

function shuffled(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function JonStack() {
  const [items, setItems] = useState(JonData);
  useLayoutEffect(() => {
    setItems(shuffled(JonData));
  }, []);
  const [top, setTop] = useState(0);
  const current = items[top];

  const cards = items.map((item, index) => (
    <img
      key={index}
      src={getImageUrl(item.image ?? `jon/${item.name}.JPG`)}
      alt={item.date ? `Jonas - ${item.date}` : `Jonas - Age ${item.name}`}
      loading={index < 4 ? "eager" : "lazy"}
      draggable={false}
    />
  ));

  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center px-2 py-16">
      <div className="aspect-square w-[min(75vw,560px)]">
        <Stack
          cards={cards}
          layout="fan"
          sendToBackOnClick
          radius={5}
          shadow={false}
          onChange={setTop}
        />
      </div>
      <div className="relative mt-9 w-[min(75vw,560px)]">
        <div className="invisible" aria-hidden="true">
          <p className="text-sm">{SIZER.content}</p>
          <p className="mt-2 font-mono text-xs opacity-60">{SIZER.date}</p>
        </div>
        <div className="absolute inset-x-0 top-0">
          <p className="text-sm">{current.content}</p>
          {current.date && (
            <p className="mt-2 font-mono text-xs opacity-60">{current.date}</p>
          )}
        </div>
      </div>
    </div>
  );
}