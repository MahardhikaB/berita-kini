'use client';
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
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="w-1 h-[34px] bg-[#0090FF] ml-[72px] mr-[20px]"></div>
                <h1 className="text-2xl font-bold mb-[32px]">
                    Berita Terpopuler
                </h1>
            </div>

            {/* Card */}
            <div className="flex flex-row mx-[72px] justify-between">
                {listNews.map((news) => (
                    <div className="flex flex-row w-[400px] h-[128px] px-[26px]">
                        <img 
                            src={news.thumbnail}
                            className="w-[147px] h-[128px] rounded-md object-cover"
                        />
                        <div className="flex flex-col pl-4 justify-between">
                            <h1 className="font-bold text-base">
                                {news.title}
                            </h1>
                            <h1 className="font-medium text-base">
                                {formatDate(news.pubDate)}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BeritaPopuler