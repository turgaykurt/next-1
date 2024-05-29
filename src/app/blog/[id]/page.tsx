"use client";

import { useParams } from "next/navigation";
import BlogPost from "../../../components/BlogPost";
import blogPosts from "../../../data/blogPosts.json";
import { useEffect } from "react";

export default function BlogPostPage() {
    const params = useParams();
    const { id } = params;
    const post = blogPosts.find((post) => post.id === parseInt(id as string));

    useEffect(() => {
        if (post) {
            document.title = `${post.title} - My Blog`;

            // Dinamik description meta etiketini ayarlama
            const metaDescription = document.querySelector(
                'meta[name="description"]'
            );
            if (metaDescription) {
                metaDescription.setAttribute(
                    "content",
                    `${post.title} - Detailed description of the blog post.`
                );
            } else {
                const description = document.createElement("meta");
                description.name = "description";
                description.content = `${post.title} - Detailed description of the blog post.`;
                document.head.appendChild(description);
            }
        }
    }, [post]);

    if (!post) {
        return <p>Blog post not found</p>;
    }

    return (
        <div>
            <BlogPost post={post} />
        </div>
    );
}
