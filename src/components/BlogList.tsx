import Link from "next/link";
import Image from "next/image";
import blogPosts from "../data/blogPosts.json";

const BlogList = () => {
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

    return (
        <div className="blog">
            <div className="kapsayici">
                <h1>Blog JSON Veri Çekme</h1>
                <ul className="sutun">
                    {blogPosts.map((post) => (
                        <li className="kart" key={post.id}>
                            <Link href={`/blog/${post.id}`}>
                                <Image
                                    src={post.image}
                                    alt="Blog Görseli"
                                    width={500}
                                    height={300}
                                />
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                                <small>{formatDate(post.date)}</small>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogList;
