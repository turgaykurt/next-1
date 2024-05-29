import "../app/styles/globals.css";
import Navbar from "../components/Navbar";
import { ReactNode } from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
