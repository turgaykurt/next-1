import type { Metadata } from "next";
import ContactContent from "../../components/ContactContent";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact - Get in touch with us through this page.",
};

export default function Contact() {
    return (
        <div>
            <ContactContent />
        </div>
    );
}
