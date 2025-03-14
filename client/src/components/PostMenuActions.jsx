import { MdDelete } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const PostMenuActions = () => {
  return (
    <div className="">
      <h1 className="my-4 text-sm font-medium">Actions</h1>
      <div className="flex items-center gap-2 py-1 text-sm cursor-pointer">
        <FaHeart className="text-lg"/>
        <span> Like this post</span>
      </div>
      <div className="flex items-center gap-2 py-1 text-sm cursor-pointer">
        <FaBookmark className="text-lg"/>
        <span> Save this post</span>
      </div>
      <div className="flex items-center gap-2 py-1 text-sm cursor-pointer">
        <MdDelete className="text-lg"/>
        <span> Delete this post</span>
      </div>
    </div>
  );
};

export default PostMenuActions;
