import { Dot, MoreThree, Play } from "@icon-park/react";
import { AnimatedHeading } from "../TextAnimations";

const Showcase = ({ singleMov }) => {
  return (
    <section>
      <div className="w-full">
        <div
          style={{
            backgroundImage: "url(" + singleMov.Poster + ")",
          }}
          className="heroDisp"
        >
          <div className="w-full min-h-[95vh] bg-gradient-to-t md:bg-gradient-to-r from-black from-55% to-black/10 backdrop-blur-[1px] pt-[10%]">
            <div className="p-2 mt-[40vh] sm:mt-[50vh] sm:p-10 md:mt-8 w-full sm:w-[75%] min-h-[30vh]">
              <AnimatedHeading
                className="md:leading-[72px] md:text-5xl text-3xl font-extrabold"
                // content={`${flashMovie.originalTitleText.text}`}
                content={`${singleMov.Title}`}
              />
              <br />
              <div className="flex gap-5 ">
                <p className="line-clamp-1" title={singleMov.Genre}>{singleMov.Genre}</p>
                <p className="pt-1">
                  <Dot size="15" />
                </p>
                <p className="line-clamp-1">
                  {singleMov.Year ? singleMov.Year : "N/A"}
                </p>
                <p className="pt-1">
                  <Dot size="15" />
                </p>
                <p className="line-clamp-1">{singleMov.Runtime}</p>
              </div>
              <br />
              <p className="md:w-[70%] line-clamp-2" title={singleMov.Plot}>
                {singleMov.Plot
                  ? singleMov.Plot
                  : "Nothing to write home about here..."}
              </p>
              <br />
              <div className="w-full my-2 py-2 flex flex-col sm:flex-row gap-4">
                <button className="px-6 pr-9 py-3 rounded-full flex justify-center justify-items-center align-middle gap-3 border border-white bg-gray-50/10 text-dark">
                  <Play className="text-3xl" />
                  <span className="text-md">Watch now</span>
                </button>
                <button className="px-6 pr-9 py-3 rounded-full flex justify-center justify-items-center align-middle gap-3 border border-white bg-gray-50/10 text-dark">
                  {/* <Download className="text-3xl" /> */}
                  <MoreThree className="text-3xl" />
                  <span className="text-md mt-[0.1rem]">More info</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
