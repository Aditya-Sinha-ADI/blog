import { Link } from "react-router-dom";
import Search from "./Search";

const MainCatagories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8 my-6">
      {/* links */}
      <div className="flex-1 flex justify-between flex-wrap items-center">
        <Link
          to="/posts"
          className="bg-gray-800 text-white rounded-full px-4 py-2"
        >
            All posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
            Web Design
        </Link>
        <Link
          to="/posts?cat=developement"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
            Developement
        </Link>
        <Link
          to="/posts?cat=database"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
            Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
            Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-gray-50 rounded-full px-4 py-2"
        >
            Marketing
        </Link>
        <span className="text-xl font-medium">|</span>
        {/* search */}
        <Search />
      </div>
    </div>
  );
};

export default MainCatagories;
