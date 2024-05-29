import "../app/styles/globals.css";
import Navbar from "../components/Navbar";
import { ReactNode } from "react";

// RootLayout bileşeni için prop türünü tanımlıyoruz
interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
