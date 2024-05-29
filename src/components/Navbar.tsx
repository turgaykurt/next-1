"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="nav">
            <div className="kapsayici">
                <div className="sutun">
                    <Link href="/">
                        <Image
                            src="next.svg"
                            alt="Next.js Logo"
                            width={180}
                            height={37}
                            priority
                        />
                    </Link>
                    <ul className="menu">
                        <li>
                            <Link
                                href="/"
                                className={pathname === "/" ? "active" : ""}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className={
                                    pathname === "/about" ? "active" : ""
                                }
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={
                                    pathname === "/contact" ? "active" : ""
                                }
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className={pathname === "/blog" ? "active" : ""}
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
