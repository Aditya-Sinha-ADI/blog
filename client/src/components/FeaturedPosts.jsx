import Image from "./Image";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="flex flex-col w-full lg:w-1/2 gap-4">
        <Image src="featured1.jpeg" className="rounded-3xl object-cover" w="895" />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-grey-500">2 days ago</span>
        </div>
        <Link
          to="/post"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem Lorem Lorem ipsum sdv fsv fv
        </Link>
      </div>
      {/* Others*/}
      <div className="flex flex-col w-full lg:w-1/2 gap-4">
        {/* Second */}
        <div className="flex justify-between gap-4 lg:h-1/3">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/post" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-grey-500 text-sm">2 days ago</span>
            </div>
            <Link
              to="/post"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ispum cap halo hgds.
            </Link>
          </div>
        </div>
        {/* Third */}
        <div className="flex justify-between gap-4 lg:h-1/3">
          <Image
            src="featured3.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/post" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-grey-500 text-sm">2 days ago</span>
            </div>
            <Link
              to="/post"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ispum cap halo hgds.
            </Link>
          </div>
        </div>
        {/* Forth */}
        <div className="flex justify-between gap-4 lg:h-1/3">
          <Image
            src="featured4.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/post" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-grey-500 text-sm">2 days ago</span>
            </div>
            <Link
              to="/post"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ispum cap halo hgds.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedPosts;
