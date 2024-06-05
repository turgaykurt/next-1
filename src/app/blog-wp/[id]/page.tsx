import React from "react";
import Image from "next/image";

const fetchData = async () => {
    const res = await fetch(
        "https://nextjswp.turgaykurt.com/wp-content/uploads/json/all-posts.json"
    );
    return res.json();
};

const Page = async () => {
    const post = await fetchData();

    return (
        <div className="single-post">
            <div className="kapsayici">
                <div className="blog-giris">
                    <h1 dangerouslySetInnerHTML={{ __html: post[4].title }} />
                    <div className="baslik-aciklama">
                        <p>{post[4].excerpt}</p>
                        <p>{post[4].published_date} • <span >2</span> min read</p>
                    </div>
                    
                    <figure dangerouslySetInnerHTML={{ __html: post[4].thumbnail }} />
                </div>
                    <div className="blog-icerik" dangerouslySetInnerHTML={{ __html: post[4].content }} />
            </div>
        </div>
    );
};

export default Page;
