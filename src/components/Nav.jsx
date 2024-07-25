"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Beranda",
        path: "/",
    },
    {
        name: "Terbaru",
        path: "",
    },
    {
        name: "Hiburan",
        path: "",
    },
    {
        name: "Gaya Hidup",
        path: "",
    },
    {
        name: "Olahraga",
        path: "",
    },
    {
        name: "Nasional",
        path: "",
    },
    {
        name: "Internasional",
        path: "",
    },


];

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className=" flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        className={`${ link.path === pathname && "text-[#0090FF]"
                        } 
                        capitalize font-medium text-[#828282] transition-all`
                        }>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav;