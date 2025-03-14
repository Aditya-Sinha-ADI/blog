import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "./Image"; // Ensure this is a valid Image component

const featuredPosts = [
  {
    id: 1,
    img: "featured1.jpeg",
    category: "Web Design",
    date: "2 days ago",
    title: "Lorem Lorem Lorem ipsum sdv",
  },
  {
    id: 2,
    img: "featured2.jpeg",
    category: "Web Development",
    date: "5 days ago",
    title: "Mastering Frontend with React",
  },
  {
    id: 3,
    img: "featured3.jpeg",
    category: "UI/UX",
    date: "1 week ago",
    title: "Top UI/UX Trends in 2024",
  },
  {
    id: 4,
    img: "featured4.jpeg",
    category: "Tech News",
    date: "3 days ago",
    title: "AI is taking over the industry!",
  },
];

const FeaturedPosts = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-2 md:gap-8 justify-center my-4 md:my-0">
      {/* Main Featured Post Carousel */}
      <div className="flex flex-col w-full lg:w-1/2 gap-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full"
        >
          {featuredPosts.map((post, index) => (
            <SwiperSlide key={post.id}>
              <Image
                src={post.img}
                className="rounded-3xl object-cover w-full max-h-[30vh] md:max-h-[400px] aspect"
              />
              {/* Details */}
              <div className="flex items-center gap-4 mt-2">
                <h1 className="font-semibold lg:text-lg">{`0${index + 1}.`}</h1>
                <Link className="text-gray-600 font-semibold lg:text-lg">
                  {post.category}
                </Link>
                <span className="text-gray-500">{post.date}</span>
              </div>
              <Link
                to="/post"
                className="text-xl lg:text-3xl font-semibold lg:font-bold"
              >
                {post.title}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* List of Other Posts */}
      <div className="flex flex-col w-full lg:w-1/2 gap-4">
        {featuredPosts.map((post, index) =>
          index !== activeIndex ? (
            <div key={post.id} className="flex justify-between gap-4 lg:h-1/3">
              <Image
                src={post.img}
                className="rounded-3xl object-cover w-1/3 aspect-video"
              />
              <div className="w-2/3">
                <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                  <h1 className="font-semibold">{`0${index + 1}.`}</h1>
                  <Link to="/post" className="text-gray-600 font-semibold">
                    {post.category}
                  </Link>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <Link
                  to="/post"
                  className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
                >
                  {post.title}
                </Link>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default FeaturedPosts;