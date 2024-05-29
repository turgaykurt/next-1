import BlogList from "../../components/BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Blog - Get in touch with us through this page.",
};

export default function Blog() {
    return (
        <div>
            <BlogList />
        </div>
    );
}
