import type { Metadata } from "next";
import BlogListWp from "../../components/BlogListWp";

export const metadata: Metadata = {
    title: "Blog",
    description: "Blog - Get in touch with us through this page.",
};

export default function Blog() {
    return (
        <div>
            <BlogListWp />
        </div>
    );
}
