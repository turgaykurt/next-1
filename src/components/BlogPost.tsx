import { FC } from "react";
import Image from "next/image";

interface BlogPostProps {
    post: {
        id: number;
        title: string;
        content: string;
        date: string; // Tarih bilgisinin string formatında olduğunu varsayıyoruz
        image: string; // Görsel URL'sinin olduğunu varsayıyoruz
    };
}

// Tarih formatlama fonksiyonu
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
    }).format(date);
};

const BlogPost: FC<BlogPostProps> = ({ post }) => {
    return (
        <section className="blogpost">
            <div className="kapsayici">
                <h1>{post.title}</h1>
                <Image
                    src={post.image}
                    alt="Blog Görseli"
                    width={1000}
                    height={1000}
                />
                <p>{post.content}</p>
                <p>{formatDate(post.date)}</p>{" "}
                {/* Tarih formatlama fonksiyonunu burada kullanıyoruz */}
            </div>
        </section>
    );
};

export default BlogPost;
