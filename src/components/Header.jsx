import Link from "next/link";

import Nav from "./Nav";

const Header = () => {
    return (
        <header className="py-8 text-white bg-white">
            <div className="container mx-auto flex justify-between items-center px-16">
                <div className="flex flex-row">
                    {/* Logo */}
                    <img src="/assets/logo.png" className="w-11 mr-3"/>
                    <Link href="/">
                        <h1 className="text-xl font-semibold my-2 text-black">
                            Berita Kini<span>.</span>
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center gap-8">
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header;