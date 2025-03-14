import Comment from "./Comment";
import Image from "./Image";

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-grey-500 font-semibold">Community Responses</h1>
      <div className="flex items-center justify-between gap-2 w-full">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover shrink-0"
          width={40}
          height={40}
        />
        <textarea 
          placeholder="Join the conversation..." 
          className="flex-1 p-4 rounded-xl outline-none focus:ring-0 min-w-0"
        />
        <button className="bg-gray-800 px-4 py-3 text-white font-medium rounded-xl shrink-0">
          Send
        </button>
      </div>
      <div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Comments;
