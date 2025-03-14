import { Link } from "react-router-dom";
import Image from "./Image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const PostListItems = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="800" />
      </div>
      {/* details */}

      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/post" className="text-4xl font-semibold">
          Lorem ispum dolor sir, fdkf fdlvc uebdnci ejdned.
        </Link>
        <div className="flex items-center gap-2 text-grey-400 text-sm">
          <span>Written by</span>
          <Link className="text-gray-800 font-bold">John Doe</Link>
          <span>on</span>
          <Link className="text-gray-800 font-bold">Web Design</Link>
          <span className="text-gray-600"> • 2d</span>
        </div>
        <p className="text-justify">
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
        <Link to="/post" className="text-gray-800 font-bold text-sm flex items-center gap-2">Read More <MdKeyboardDoubleArrowRight /></Link>
      </div>
    </div>
  );
};

export default PostListItems;
