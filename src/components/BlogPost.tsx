import { FC } from "react";

interface BlogPostProps {
    post: {
        id: number;
        title: string;
        content: string;
    };
}

const BlogPost: FC<BlogPostProps> = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default BlogPost;
