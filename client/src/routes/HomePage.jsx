import { Link } from "react-router-dom";
import MainCatagories from "../components/mainCatagories";
import FeaturedPosts from "../components/featuredPosts";
import PostList from "../components/PostList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-2 px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      <div className="md:min-h-screen md:overflow-visible md:flex md:flex-col md:justify-between md:gap-0 gap-4">
        {/* Main Layout */}
        <Navbar />
        {/* BREADCRUMBS */}
        <div className="flex gap-4">
          <Link to="/" className="text-sm">Home</Link>
          <span></span>
          <span className="text-gray-800 text-sm">Blogs and Articles</span>
          <span></span>
          <span className="text-gray-800 text-sm">Case Studies</span>
        </div>
        {/* INTRODUCTION */}
        <div className="flex items-center justify-between">
          {/* TITLES */}
          <div className="">
            <h1 className="text-grey-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Decoding Tech. Defining Trends..
            </h1>
            <p className="mt-6 text-md md:text-xl">
            <strong>Ride the Wave of AI Innovation</strong><br/>
            Explore cutting-edge trends, breakthroughs, and insights—because the future won’t wait.
            </p>
          </div>
          {/* ANIMATED BUTTON */}
          <Link to="Write" className="relative hidden md:block">
            <svg
              viewBox="0 0 200 200"
              width="200"
              height="200"
              // className="text-lg tracking-widest animate-spin animatedButton"
              className="text-lg tracking-widest animate-spin animatedButton"
            >
              <path
                id="circlePath"
                fill="none"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  Write your thoughts.
                </textPath>
                <textPath href="#circlePath" startOffset="50%">
                  Share observations.
                </textPath>
              </text>
            </svg>
            <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
            </svg>
            </button>
          </Link>
        </div>

        {/* FEATURED POSTS */}
        <FeaturedPosts />

        {/* MAIN CATAGORIES */}
        <MainCatagories />
      </div>  


      {/* POSTS LIST */}
      <PostList />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default HomePage;
