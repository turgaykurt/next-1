import Image from "next/image";
import Link from "next/link";
import blogPosts from "../data/blogPosts1.json";

const BlogHome = () => {
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
                <h2>Blog JSON Veri Çekme</h2>
                <ul className="sutun">
                    {blogPosts.slice(0, 6).map((post) => (
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

export default BlogHome;
