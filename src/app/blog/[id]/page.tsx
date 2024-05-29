"use client";

import { useParams } from "next/navigation";
import BlogPost from "../../../components/BlogPost";
import blogPosts from "../../../data/blogPosts.json";

export default function BlogPostPage() {
    const params = useParams();
    const { id } = params;
    const post = blogPosts.find((post) => post.id === parseInt(id as string));

    if (!post) {
        return <p>Blog post not found</p>;
    }

    return (
        <div>
            <BlogPost post={post} />
        </div>
    );
}
