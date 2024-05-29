import BlogList from "../../components/BlogList";

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
