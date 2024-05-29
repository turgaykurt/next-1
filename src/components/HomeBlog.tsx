import React from 'react';
import Image from "next/image";
import data from '/public/data.json';

const BlogList = () => {

// Tarih biçimlendirme fonksiyonu
const formatTarih = (tarihStr: string | number | Date) => {
const tarih = new Date(tarihStr);
    return tarih.toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
    });
};

return (
<div className="blog">
    <div className="kapsayici">
        <h2>Blog JSON Veri Çekme</h2>
        <div className="sutun">
            {data.slice(0, 6).map((item) => (
            <div className="kart" key={item.id}>
                <Image src={item.image} alt="Blog Görseli" width={500} height={300} />
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <small>{formatTarih(item.date)}</small>
            </div>
            ))}
        </div>
    </div>
</div>
);
};

export default BlogList;