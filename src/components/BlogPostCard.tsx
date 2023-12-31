import { Link } from "react-router-dom";

interface BlogPostCardProps {
  text: string;
  title: string;
  link: string;
}

const BlogPostCard = ({ text, title, link }: BlogPostCardProps) => (
  <Link
    to={link}
    className="my-4 border border-gray-400 rounded-md p-4 hover:border-indigo-500 transition"
  >
    <h2>{title}</h2>
    <p className="mt-2">{text}</p>
  </Link>
);

export default BlogPostCard;
