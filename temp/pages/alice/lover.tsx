import { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import Head from "next/head";
import Image from "next/image";
import { EffectFade } from "swiper";

const title = [
  "2019年，輕度發燒的你，軟弱可憐得像個小孩，平時都是你在照顧我，我不會照顧人，以致於粥都煮糊了。",
  "2019年，所有東西從星河灣搬過來洛濤居，臨近春節，正式入住。",
  "2019年，在洛溪租了房子剛剛搬過去，你像個小孩一樣賴皮地一回到家就癱在地上不肯起來。",
  "2018，花蓮的海，迄今為止和你待過最好看的地方。",
  "2018，太魯閣，只記得那次的行程很熱，但一行人走著棧道還是有趣的，你這怕曬的傢伙，圍了頭巾覺得有趣就摁下了快門。",
  "2018，广州。奶奶生日，相比帮你摆拍美美的照片，我更喜欢记录你各种各样的表情状态。",
  "2018，廣州",
  "2018，去大夫山的路上。拍個婚紗照真是累，在這個過程中，各自賭氣過，爭吵過，我們一致的共識是都不喜歡此次的拍攝結婚，但我們看中的都是過程，以後回憶起來，我們能記得我們曾去拍攝過婚紗照這就夠了，反正往後你的美麗我都會幫你記錄",
  "2018，廣州",
  "2018，香港。我知道你內心還是希望有個大鑽戒，而我卻只能盡我所能的給你最好的，你卻很體貼的選了足夠小的。望有天我可以暴富，給予你最好的。",
  "2018，白雲山頂。曾與你嘗試不同的事情。",
  "2018，廣州。我生日那天，多謝你那有心的兌換券。",
  "2018，台北夜市。最得意的你",
  "2018，九份",
  "2018，台灣平溪線",
  "2018，九份",
  "2018，台北跳蚤市場",
  "2018，花蓮七星潭——那是迄今最舒服浪漫的海。",
  "2018，九份。這裡的感覺很特別",
  "2018，台北車站",
  "2018，珠海城軌",
  "2004年，老家韓江，時間久到這張照片都不確定是不是我拍的了，依稀記得是。",
  "2019年廣州番禺，週末與同事一起出遊，炎炎夏日摘水果，釣蝦，嘆住空調打麻將，還可以燒烤的遊樂果園。可愛的你以及鏡頭後被你強逼的我。",
  "2019年，香港長洲",
  "2019年，香港長洲",
  "时间和菲林的魔力就是如此，已然忘记是什么时候，你具体是在缝什么，可当我看到这张照片，幸福和温暖由心口化开，散到全身。2019年，洛濤居",
  "拍照拍到西边太阳落山，葵园的游客都陆续离开，我的眼皮都快眯到翻过来，而你翻看照片和精心编辑朋友圈时那可爱又满足的开心劲，让这一点点辛劳不值一提。2019，百万葵园",
  "曾許諾過要每個月都紀錄你的模樣和變化，然而懒惰和放松对变化的细微关注，稍未留神，成长就在你的肚子上形成了不小的形状。2019，百萬葵園",
];

const Lover: NextPage = () => {
  const list = Array.from(new Array(title.length).keys());
  const shuffleList = list.sort(() => 0.5 - Math.random());
  return (
    <div className="h-screen">
      <Head>
        <title>lover alice - RayLiao</title>
      </Head>
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
    </div>
  );
};

export default Lover;
