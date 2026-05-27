"use client";

import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectFade } from "swiper/modules";
import { getImageUrl } from "../../common/image";

interface SlideProps {
  title: string[];
}

export default function Slide({ title }: SlideProps) {
  const shuffledIndices = useMemo(() => {
    const list = Array.from(new Array(title.length).keys());
    return list.sort(() => 0.5 - Math.random());
  }, [title.length]);

  return (
    <Swiper
      className="h-full lg:w-[600px]"
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      grabCursor={true}
      modules={[EffectFade]}
    >
      {shuffledIndices.map((index, i) => (
        <SwiperSlide
          className="h-full flex flex-col justify-center gap-2 box-border px-2"
          key={index}
        >
          <div className="relative w-full h-[300px] lg:h-[400px]">
            <Image
              priority={i === 0}
              fill
              sizes="(max-width: 1200px) 100vw, 33vw"
              className="object-contain"
              alt={`lover-${index}`}
              src={getImageUrl(`lover/${index}.jpg`)}
            />
          </div>
          <div className="text-sm text-center">{title[index]}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
