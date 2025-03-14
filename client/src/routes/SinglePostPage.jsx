import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8 my-10">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit, amet consect adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-gray-600 font-semibold">John Doe</Link>
            <span>on</span>
            <Link className="text-gray-600 font-semibold">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium text-justify">
            Lorem meomc, moem dwedkw hescns. cseclisn isenln, cisinclinsln ilsncn
            kucsdcb isejdinbn kncskncs. snclisnclis ilsncns socslincsn olsmocjos.
            nlcsnlicn islncjs nincksn ocjslinckjsnc.Lorem meomc, moem dwedkw hescns. cseclisn isenln, cisinclinsln ilsncn
            kucsdcb isejdinbn kncskncs. snclisnclis ilsncns socslincsn olsmocjos.
            nlcsnlicn islncjs nincksn ocjslinckjsnc. Lorem meomc, moem dwedkw hescns. cseclisn isenln, cisinclinsln ilsncn
            kucsdcb isejdinbn kncskncs. snclisnclis ilsncns socslincsn olsmocjos.
            nlcsnlicn islncjs nincksn ocjslinckjsnc. Lorem meomc, moem dwedkw hescns. cseclisn isenln, cisinclinsln ilsncn
            kucsdcb isejdinbn kncskncs. snclisnclis ilsncns socslincsn olsmocjos.
            nlcsnlicn islncjs nincksn ocjslinckjsnc.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl"></Image>
        </div>
      </div>

      {/* contents */}

      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            optio sunt perspiciatis modi harum blanditiis atque minima illum
            facilis, error saepe illo aut non eaque numquam explicabo libero
            laboriosam, et repudiandae unde fugiat! Suscipit ipsum harum,
            repellat aspernatur, earum laborum iure ratione repudiandae maiores
            explicabo aperiam officia nihil ad perferendis reiciendis nemo?
            Aliquam laboriosam facilis cumque a reprehenderit excepturi ipsum?
            Odit illum repudiandae consequatur sunt in ducimus magni natus
            aliquid. Ex praesentium aliquam omnis! Aliquam.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            magnam sint fugiat, temporibus, ea dolorum ratione facere facilis
            ducimus consequatur quo quibusdam asperiores totam illo aspernatur
            aut architecto saepe dignissimos dicta alias quam illum rem.
            Quaerat, reiciendis nulla cumque est laudantium ipsam sapiente eos
            tempora tenetur non possimus vel, explicabo numquam quam vitae
            molestiae? Laborum amet, sapiente neque libero veniam quasi! Nulla
            corporis ut quam minima autem, labore quis aspernatur quaerat ipsum
            commodi, quidem laudantium?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quasi
            non expedita nihil veniam odio dolores laborum dicta eligendi
            necessitatibus nulla molestiae obcaecati officiis, in nisi quod eius
            alias voluptatum ipsum delectus. Voluptatum rem natus molestiae
            quisquam? Pariatur quidem est ad placeat. Quisquam voluptatem,
            deleniti voluptatibus, a tempore iusto voluptate qui quas
            perferendis consequatur eum eveniet quam sit earum doloremque nulla
            error. Veniam, blanditiis natus error deleniti repudiandae nam culpa
            repellendus nostrum hic amet aperiam!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum
            quibusdam officia aspernatur quae accusantium enim debitis non natus
            atque, ducimus odio ab praesentium odit dolore rem optio. Impedit
            veritatis repudiandae nesciunt illum libero nobis repellendus
            molestiae, fuga possimus. Dolorum ex, doloribus non vero aperiam
            placeat iusto dolore reprehenderit nisi magnam enim autem, voluptate
            iste vitae facilis rem nesciunt eveniet, excepturi qui. Ea harum
            ducimus, voluptate, enim animi vero doloribus ullam magnam autem
            placeat voluptatem.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            cumque cum voluptatum. Ipsam, soluta officiis. Autem molestiae
            quibusdam odio sit modi aliquid ea, explicabo mollitia nostrum amet
            dignissimos veniam temporibus hic natus ex architecto voluptas aut,
            incidunt aperiam corrupti at! Architecto voluptas quae non pariatur.
            Harum dolorum adipisci sapiente perspiciatis! Ex magnam veniam
            obcaecati culpa eaque corrupti odit rerum quas temporibus beatae
            eos, unde iusto! A voluptatum quod veniam ipsam! Quidem tempora
            perferendis maxime aliquam.
          </p>
        </div>

        {/* menu */}

        <div className="px-4 h-max sticky top-8">
          <PostMenuActions />
          <h1 className="my-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full">All</Link>
            <Link className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full" to="/">
              Web Design
            </Link>
            <Link className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full" to="/">
              Developement
            </Link>
            <Link className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full" to="/">
              Databases
            </Link>
            <Link className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full" to="/">
              Search Engines
            </Link>
            <Link className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
          <h1 className="mb-4 mt-8 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4 ">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                h="48"
                w="48"
              />
              <Link className="text-gray-600 font-semibold">John Doe</Link>
            </div>
            <p className="text-sm text-grey-500">Lorem ipsum dolor sit amet.</p>
            <div className="flex gap-2 md:gap-4">
              <Link>
                <MdEmail className="text-2xl md:text-3xl"/>
              </Link>
              <Link>
                <FaLinkedinIn className="text-2xl md:text-3xl"/>
              </Link>
              <Link>
                <FaXTwitter className="text-2xl md:text-3xl"/>
              </Link>
              <Link>
                <FaFacebook className="text-2xl md:text-3xl"/>
              </Link>
              <Link>
                <FaInstagram className="text-2xl md:text-3xl"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
