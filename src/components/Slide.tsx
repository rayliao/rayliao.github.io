import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { getImageUrl } from "@utils/image";

interface SlideProps {
  title: string[];
}

export default function Slide({ title }: SlideProps) {
  const shuffledIndices = useMemo(() => {
    const list = Array.from(new Array(title.length).keys());
    // 故意每次挂载随机排序，useMemo 保证重渲染稳定
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
        <SwiperSlide className="h-full box-border px-2" key={index}>
          <div className="flex h-full flex-col justify-center gap-2">
            <div className="relative w-full h-[300px] lg:h-[400px]">
              <img
                loading={i === 0 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-contain"
                alt={`lover-${index}`}
                src={getImageUrl(`lover/${index}.jpg`)}
              />
            </div>
            <div className="text-sm text-center">{title[index]}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}