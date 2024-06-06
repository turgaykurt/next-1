import Link from "next/link";
import Image from "next/image";

async function getData() {
    const res = await fetch(
        `https://nextjswp.turgaykurt.com/wp-content/uploads/json/posts/`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Page() {
    const data = await getData();

    return (
        <div className="blog">
            <div className="kapsayici">
                <h1>Blog WP JSON Veri Çekme {process.env.baseSite}</h1>
                <ul className="sutun">
                    {data.map((item: any) => {
                        return (
                            <li className="kart" key={item.slug}>
                                <Link href={`/blog-wp/${item.slug}`}>
                                    <Image
                                        src={item.thumbnail_url}
                                        alt="Blog Görseli"
                                        width={500}
                                        height={300}
                                    />
                                    <h3>{item.title}</h3>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.excerpt,
                                        }}
                                    />
                                    <small>{item.published_date}</small>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
