import Link from "next/link";

async function getData() {
    const res = await fetch(
        `${process.env.baseSite}/wp-content/uploads/json/posts/`
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
                                    <div>{item.id}</div>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: item.title,
                                        }}
                                    />
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: item.content,
                                        }}
                                    />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
