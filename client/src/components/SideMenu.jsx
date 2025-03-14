import Search from "./Search";
import { Link } from "react-router-dom";
const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 courser-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-gray-800 cursor-pointer rounded-sm bg-white checked:bg-gray-800"
          />
          Newest
        </label>
        <label htmlFor="" className="flex items-center gap-2 courser-pointer">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-gray-800 cursor-pointer rounded-sm bg-white checked:bg-gray-800"
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 courser-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-gray-800 cursor-pointer rounded-sm bg-white checked:bg-gray-800"
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 courser-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-gray-800 cursor-pointer rounded-sm bg-white checked:bg-gray-800"
          />
          Oldest
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full" to="/posts">
          All
        </Link>
        <Link className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full" to="/posts?cat=web-design">
          Web Design
        </Link>
        <Link className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full" to="/posts?cat=developement">
          Developement
        </Link>
        <Link className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full" to="/posts?cat=databases">
          Database
        </Link>
        <Link className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full" to="/posts?cat=seo">
          Search Engine
        </Link>
        <Link className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full" to="/posts?cat=marketing">
          Marketing
        </Link>
      </div>
    </div>
  );
};
export default SideMenu;
