import React from "react";
import { Link, NavLink } from "react-router-dom";

interface BlogPostCardProps {
  text: string;
  title: string;
  link: string;
}

const BlogPostCard = ({ text, title, link }: BlogPostCardProps) => (
  <Link to={link} className="glass-container">
    <h2>{title}</h2>
    <p className="mt-2">{text}</p>
  </Link>
);

export default BlogPostCard;
