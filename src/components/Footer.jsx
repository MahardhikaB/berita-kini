import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-16 px-[72px] text-white bg-[#2C3C4D] flex flex-row justify-between">
            {/* Logo & Socials */}
            <div className="flex flex-col">

                {/* Logo */}
                <div className="flex flex-row mb-[22px]">
                    <img src="/assets/logoPth.png" className="w-11 mr-3"/>
                    <Link href="/">
                        <h1 className="text-xl font-medium my-2">
                            Berita Kini<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>

                {/* Copyright */}
                <div className="mb-11">
                    <h1 className="text-lg font-normal">
                        © 2023 Berita Kini. All Rights Reserved.
                    </h1>
                </div>

                <div className="mb-[22px]">
                    <h1>
                        Ikuti Kami
                    </h1>
                </div>

                {/* Socials */}
                <div className="flex flex-row gap-6">
                    <img src="/assets/yt.png" className="w-10"/>
                    <img src="/assets/ig.png" className="w-10"/>
                    <img src="/assets/fb.png" className="w-10"/>
                </div>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-xl mb-[22px]">
                    Telusuri
                </h1>
                <h1 className="font-medium text-base">
                    Beranda
                </h1>
                <h1 className="font-medium text-base">
                    Kesehatan
                </h1>
                <h1 className="font-medium text-base">
                    Otomotif
                </h1>
                <h1 className="font-medium text-base">
                    Politik
                </h1>
                <h1 className="font-medium text-base">
                    Olahraga
                </h1>
                <h1 className="font-medium text-base">
                    Nasional
                </h1>
                <h1 className="font-medium text-base">
                    Internasional
                </h1>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-xl mb-[22px]">
                    Bantuan
                </h1>
                <h1 className="font-medium text-base">
                    Kontak Kami
                </h1>
                <h1 className="font-medium text-base">
                    Laporan Pembajakan
                </h1>
                <h1 className="font-medium text-base">
                    Kebijakan
                </h1>
            </div>

            {/* Text Field */}
            <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-xl mb-[22px]">
                    Berlangganan Berita Terbaru
                </h1>
                <div className="flex flex-row pl-3 pr-1 bg-white rounded-md h-14 items-center justify-center">
                    <input type="text" className="w-64 h-9 border border-transparent outline-transparent focus:border-transparent focus:ring-0 text-black" placeholder="Masukkan Email"/>
                    <button className="w-12">
                        <img src="/assets/sendBtn.png"/>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;