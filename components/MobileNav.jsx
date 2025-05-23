"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {usePathname} from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from 'next/image';
import { useState } from "react";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>

            <SheetContent className="flex flex-col">

                {/*logo*/}
                <div className="mt-20 mb-16 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-2xl font-semibold">
                            Cristian<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>

                {/*nav*/}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.path}
                        onClick={handleLinkClick}
                        className={`capitalize ${link.path === pathname ? "text-accent" : ""}`}
                    >
                        {link.name}
                    </Link>
                ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav