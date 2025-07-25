import { type PostProps } from '@/interfaces';

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
      <p className="text-sm text-gray-500 mt-1">Posted by User {userId}</p>
    </div>
  );
};

export default PostCard;
