import Link from "next/link";

const fetchData = async () => {
    const blogPosts = await fetch(
        "https://nextjswp.turgaykurt.com/wp-content/uploads/json/all-posts.json"
    );
    return blogPosts.json();
};

const Page = async () => {
    const posts = await fetchData();

    return (
        <div className="blog">
            <div className="kapsayici">
                <h1>Blog JSON Veri Çekme</h1>
                <ul className="sutun">
                    {posts.map((post) => (
                        <li className="kart" key={post.id}>
                            <Link href={`/blog-wp/${post.id}`}>
                                <div>{post.id}</div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: post.title,
                                    }}
                                />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: post.content,
                                    }}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Page;
