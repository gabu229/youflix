import useSWR, { mutate } from "swr";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

import { AnimatedHeading } from "@cp/TextAnimations";
import Image from "next/image";
import Link from "next/link";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function MoviesCardList({
  title = "List Title",
  dataFrom = "/api/movies/random",
}) {
  const { data: movList, error: firstError } = useSWR(dataFrom, fetcher);

  if (firstError) {
    return <ListLoadingState />;
  }

  if (!movList) {
    return <ListLoadingState />;
  }

  return (
    <>
      <section className="m-0">
        <div className="w-full sm:p-3 md:px-8 m-0 bg-gradient-to-b md:bg-gradient-to-l from-black/90 from-55% to-black/40 backdrop-blur-[1px]">
          <AnimatedHeading
            className="md:leading-[45px] md:text-2xl text-1xl font-extrabold mb-5"
            // content={`${flashMovie.originalTitleText.text}`}
            content={title}
          />
          <div className="min-h-[60vh]">
            <>
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                {movList.results.map((movie, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <MovieCard movieId={movie.id} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </>
          </div>
        </div>
      </section>
    </>
  );
}

function MovieCard({ movieId, key }) {
  const { data: singleMov, error: secondError } = useSWR(
    movieId ? `/api/singleMovieData/${movieId}` : null,
    fetcher
  );

  if (secondError) {
    return (
      <>
        <div className="w-100 h-100 bg-black"></div>
      </>
    );
  }

  if (!singleMov) {
    return (
      <>
        <div className="w-100 h-100 bg-black"></div>
      </>
    );
  }

  const poster = singleMov.Poster != "N/A" ? singleMov.Poster : "/vercel.svg";
  return (
    <div className="rounded-xl overflow-hidden">
      {/* {singleMov.Poster} */}
      <Link href={`/movie/${singleMov.imdbID}`}>
        <Image
          className="rounded-xl overflow-hidden hover:scale-110 duration-500"
          src={poster}
          layout="fill"
          objectFit="cover"
          alt={singleMov.Title}
        />
      </Link>
    </div>
  );
}

function ListLoadingState() {
  return (
    <>
      <section className="m-0">
        <div className="w-full sm:p-3 md:px-8 m-0 bg-gradient-to-b md:bg-gradient-to-l from-black/90 from-55% to-black/40 backdrop-blur-[1px]">
          <AnimatedHeading
            className="md:leading-[45px] md:text-2xl text-1xl font-extrabold mb-5"
            // content={`${flashMovie.originalTitleText.text}`}
            content={"Loading Movies"}
          />
          <div className="min-h-[60vh]">
            <>
              <Swiper
                slidesPerView={3}
                spaceBetween={5}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
              </Swiper>
            </>
          </div>
        </div>
      </section>
    </>
  );
}
