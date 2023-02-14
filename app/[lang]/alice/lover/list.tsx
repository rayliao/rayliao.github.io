"use client";

import { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/legacy/image";
import { title } from "./page";

export default function List() {
  const list = Array.from(new Array(title.length).keys());
  const shuffleList = list.sort(() => 0.5 - Math.random());
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
      {shuffleList.map((index) => (
        <SwiperSlide
          className="h-full flex flex-col justify-center gap-2 box-border px-2"
          key={index}
        >
          <div className="relative w-full h-[300px] lg:h-[400px]">
            <Image
              priority
              layout="fill"
              objectFit="contain"
              alt={`lover-${index}`}
              src={`/images/lover/${index}.jpg`}
            />
          </div>
          <div className="text-sm text-center">{title[index]}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
