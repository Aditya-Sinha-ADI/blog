import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-grey-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus,
          quibusdam autem voluptates deleniti facilis obcaecati temporibus
          distinctio velit qui voluptas fuga commodi aperiam repellendus
          consequuntur sint porro beatae vero.
        </p>
      </div>
    </div>
  );
};

export default Comment;
