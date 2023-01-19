import Link from "next/link";
import slugify from "slugify";
import { RouterOutputs } from "../../../../api";

const PostCard: React.FC<{
  post: RouterOutputs["post"]["all"][number];
}> = ({ post }) => {
  return (
    <Link href={`project/${slugify(post.title, { lower: true })}`}>
      <div className="max-w-2xl rounded-lg border-2 border-gray-500 p-4 transition-all hover:scale-[105%] hover:cursor-pointer">
        <h2 className="font-body text-2xl font-bold text-[hsl(280,100%,70%)]">
          {post.title}
        </h2>
        <p className="font-body font-bold">{post.content}</p>
      </div>
    </Link>
  );
};

export default PostCard;
