import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";


{/* SWIPER HERE N HERE */}

<>
<Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
  effect={"fade"}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Autoplay, Pagination, EffectFade]}
  className="heroSwiper"
>
  {sortedData.map((movie, index) => {
    if (movie.primaryImage != null) {
      return (
        <SwiperSlide key={index}>
          <div
            className={`w-100 min-h-[80vh] max-h-[500px] `}
          >
            {/* <Image
              src={movie.primaryImage.url}
              alt={movie.originalTitleText.text}
              width={400}
              height={400}
            /> */}
            {/* {movie.originalTitleText.text} */}
          </div>
        </SwiperSlide>
      );
    }
  })}
</Swiper>
</>

{/* SWIPER HERE N HERE */}