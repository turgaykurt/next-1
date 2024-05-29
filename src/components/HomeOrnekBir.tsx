import Image from "next/image";

const HomeOrnekBir = () => {
    return (
        <section className="ornek-1">
            <div className="kapsayici">
                <h2>Bölüm 1</h2>
                <p>
                    Maecenas nec lacinia turpis, in rhoncus dui. Quisque ac
                    molestie metus, eget gravida quam. Nullam elementum lacus
                    vitae ante vulputate molestie. Phasellus ut massa eget urna
                    tempus semper. Aliquam in metus a eros porta porttitor.
                </p>
                <Image
                    src="/ornek-1.jpg"
                    alt="Next.js Logo"
                    width={500}
                    height={300}
                    priority
                />
                <Image
                    src="/ornek-2.jpg"
                    alt="Next.js Logo"
                    width={600}
                    height={400}
                    priority
                />
            </div>
        </section>
    );
};

export default HomeOrnekBir;
