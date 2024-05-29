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
        <section className="homecontent">
            <div className="kapsayici">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        </section>
    );
};

export default BlogPost;
