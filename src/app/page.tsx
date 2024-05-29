import type { Metadata } from "next";
import HomeContent from "../components/HomeContent";
import HomeOrnekBir from "../components/HomeOrnekBir";
import HomeOrnekIki from "../components/HomeOrnekIki";
import SplideComponent from "../components/SplideComponent";

export const metadata: Metadata = {
    title: "Home",
    description: "Home - Get in touch with us through this page.",
};

export default function Home() {
    return (
        <div>
            <HomeContent />
            <HomeOrnekBir />
            <HomeOrnekIki
                title="Bölüm 2 Prop ve inline CSS"
                content="Bu açıklamayı buraya yazıyorum ve sectionda işaretlediğim yere geliyor."
            />
            <SplideComponent />
        </div>
    );
}
