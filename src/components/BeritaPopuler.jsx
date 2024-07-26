'use client';
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";


const BeritaPopuler = () => {
    const [listNews, setListNews] = useState([]);
    async function getAllNews() {
        const res = await fetch(`https://api-berita-indonesia.vercel.app/cnn/terbaru/`, {
            method: "GET",
        });
        const data = (await res.json()).data['posts'];
        setListNews(data.slice(0, 3));
    }

    useEffect(() => {
        getAllNews();
    }, []);

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };

    return (
        <div className="flex flex-col text-black">
            <div className="flex flex-row">
                <div className="w-1 h-[34px] bg-[#0090FF] ml-[72px] mr-[20px]"></div>
                <h1 className="text-2xl font-bold mb-[32px]">
                    Berita Terpopuler
                </h1>
            </div>

            {/* Card */}
            <div className="flex flex-row mx-[72px] justify-between">
                {listNews.map((news, index) => (
                    <React.Fragment key={index}>
                        <Link href={`/news?data=${encodeURIComponent(JSON.stringify(news))}`}>
                            <div className="flex flex-row w-[400px] h-[128px] px-[26px]">
                                <img 
                                    src={news.thumbnail}
                                    className="w-[147px] h-[128px] rounded-md object-cover"
                                />
                                <div className="flex flex-col pl-4 justify-between">
                                    <h1 className="font-semibold text-base">
                                        {news.title}
                                    </h1>
                                    <h1 className="font-medium text-sm">
                                        {formatDate(news.pubDate)}
                                    </h1>
                                </div>
                            </div>
                        </Link>
                        {index !== listNews.length - 1 && (
                            <div key={`divider-${index}`} className="w-[2px] h-[128px] bg-[#E0E0E0]"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default BeritaPopuler;
