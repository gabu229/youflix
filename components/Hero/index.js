import useSWR, { mutate } from "swr";

import axios from "axios";
import Showcase from "./Showcase";

// USING FETCH
// const fetcher = (url) => fetch(url).then((res) => res.json());
// TRANSITION TO AXIOS
const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Hero() {
  const { data: movList, error: firstError } = useSWR(
    "/api/10_random",
    fetcher
  );

  if (firstError)
    return (
      <>
        <div className="w-full h-[100vh] bg-[url('/img/bgs/cover-01.jpg')] mb-10">
          <div className="w-full h-full bg-black/90 backdrop-blur-[4px] pt-10">
            <div className="px-2 md:p-8 md:flex gap-6 justify-center">
              <div className="mt-10 w-[80%] min-h-[250px] md:max-h-[400px] bg-gray-50/10 animate-pulse"></div>
              <div className="min-w-[50%] flex flex-col gap-4">
                <div className="mt-10 h-[120px] bg-gray-50/10 animate-pulse"></div>
                <div className="mt-5 h-[80px] bg-gray-50/10 animate-pulse"></div>
                <div className="mt-5 h-[40px] bg-gray-50/10 animate-pulse"></div>
                <div className="mt-5 h-[80px] bg-gray-50/10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

  //Handle the loading state
  if (!movList)
    return (
      <>
        <div className="w-full h-[100vh] bg-[url('/img/bgs/cover-01.jpg')] mb-10">
          <div className="w-full h-full bg-black/90 backdrop-blur-[4px] pt-10">
            <div className="px-2 md:p-8 md:flex gap-6 justify-center">
              <div className="mt-10 w-[80%] min-h-[250px] md:max-h-[400px] bg-gray-50/10 animate-pulse"></div>
              <div className="min-w-[50%] flex flex-col gap-4">
                <div className="mt-10 h-[120px] bg-gray-50/10 animate-pulse"></div>
                <div className="mt-5 h-[80px] bg-gray-50/10 animate-pulse"></div>
                <div className="mt-5 h-[40px] bg-gray-50/10 animate-pulse"></div>
                <div className="mt-5 h-[80px] bg-gray-50/10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

  const sortedData = movList.results
    .filter((obj) => obj.primaryImage !== null && !obj.titleType.isSeries)
    .sort((a, b) => {
      // Sort based on position
      return a.position - b.position;
    });

  console.log(sortedData);

  const flashMovie = sortedData[Math.floor(Math.random() * sortedData.length)];

  return <FetchMainMovie movie={flashMovie} />;
}

function FetchMainMovie({ movie }) {
  // FETCH FLASHMOVIE DATA
  const { data: singleMov, error: secondError } = useSWR(
    movie ? `/api/singleMovieData/${movie.id}` : null,
    fetcher
  );

  if (secondError)
    return (
      <>
        <div className="w-full h-[100vh] bg-[url('/img/bgs/cover-01.jpg')] mb-10">
          <div className="w-full h-full bg-black/90 backdrop-blur-[4px] pt-10">
            <div className="px-2 md:p-8 md:flex gap-6 justify-center">
              <div className="mt-10 w-[80%] min-h-[250px] md:max-h-[400px] bg-gray-50/10 animate-pulse"></div>
              <div className="min-w-[50%] flex flex-col gap-4">
                <div className="mt-10 h-[120px] bg-gray-50/10 animate-pulse"></div>
                <div className="mt-5 h-[80px] bg-gray-50/10 animate-pulse"></div>
                <div className="mt-5 h-[40px] bg-gray-50/10 animate-pulse"></div>
                <div className="mt-5 h-[80px] bg-gray-50/10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

  //Handle the loading state
  if (!singleMov)
    return (
      <>
        <div className="w-full h-[100vh] bg-[url('/img/bgs/cover-01.jpg')] mb-10">
          <div className="w-full h-full bg-black/90 backdrop-blur-[4px] pt-10">
            <div className="px-2 md:p-8 md:flex gap-6 justify-center">
              <div className="mt-10 w-[80%] min-h-[250px] md:max-h-[400px] bg-gray-50/10 animate-pulse"></div>
              <div className="min-w-[50%] flex flex-col gap-4">
                <div className="mt-10 h-[120px] bg-gray-50/10 animate-pulse"></div>
                <div className="mt-5 h-[80px] bg-gray-50/10 animate-pulse"></div>
                <div className="mt-5 h-[40px] bg-gray-50/10 animate-pulse"></div>
                <div className="mt-5 h-[80px] bg-gray-50/10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

  return <Showcase singleMov={singleMov} />;
}
