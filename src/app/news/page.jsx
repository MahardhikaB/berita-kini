'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const NewsPage = () => {
    const [linkedNews, setLinkedNews] = useState([]);
    const [popularNews, setPopularNews] = useState([]);

    async function getLinkedNews() {
        const res = await fetch(`https://api-berita-indonesia.vercel.app/cnn/nasional/`, {
            method: "GET",
        });
        const data = (await res.json()).data['posts'];
        setLinkedNews(data.slice(0, 3));
    }
    async function getPopularNews() {
        const res = await fetch(`https://api-berita-indonesia.vercel.app/cnn/terbaru/`, {
            method: "GET",
        });
        const data = (await res.json()).data['posts'];
        setPopularNews(data.slice(0, 3));
    }

    useEffect(() => {
        getLinkedNews();
        getPopularNews();
    }, []);

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };

    const searchParam = useSearchParams();
    const data = searchParam.get('data');

    let myObject = {};
    if (data) {
        myObject = JSON.parse(decodeURIComponent(data));
    }

    return (
        <div className='flex flex-row bg-white text-black px-[72px] pt-[72px] justify-between'>
            <div className='flex flex-col w-[855px]'>
                <h1 className='font-semibold text-4xl'>
                    {myObject.title}
                </h1>
                <h1 className='font-medium text-base mt-6 mb-9 text-gray-500'>
                    {formatDate(myObject.pubDate)}
                </h1>
                <img
                    src={myObject.thumbnail}
                    className='w-[855px] h-[535px] rounded-2xl'
                />
                <h1 className='font-medium text-base mt-3 text-gray-500'>
                    {myObject.description}
                </h1>
                <h1 className='font-medium text-base mt-[72px] mb-[140px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis, provident possimus earum saepe officiis atque iusto cupiditate hic debitis aliquam incidunt sunt nesciunt reprehenderit id odio inventore neque dolor vero accusantium fuga repudiandae? Accusamus nostrum numquam nobis voluptas accusantium.
                </h1>
                {/* Comment */}
                <div className="flex flex-row">
                    <div className="w-1 h-[34px] bg-[#0090FF] mr-[20px]"></div>
                    <h1 className="text-2xl font-bold mb-[32px]">
                        Komentar
                    </h1>
                </div>
                <div className='flex flex-row items-start ml-[26px]'>
                    <img 
                        src="/assets/photo.png"
                        className="w-14 rounded-lg items-start mr-4"
                    />
                    <div className='flex flex-col'>
                        <textarea 
                            placeholder="Tulis komentar..."
                            className='w-[756px] h-[166px] p-2 text-start resize-none rounded-md border border-slate-400 outline-slate-400'
                            rows="4"
                            cols="50"
                        ></textarea>
                        <button className='flex items-center justify-center w-[80px] h-[52px] rounded-lg bg-[#0090FF] text-white font-medium text-base mt-4'>
                            Kirim
                        </button>
                    </div>
                </div>
                {/* Linked News */}
                <div className="flex flex-row justify-between items-center mt-[72px] mb-[24px]">
                    <div className='flex flex-row items-center'>
                        <div className="w-1 h-[34px] bg-[#0090FF] mr-[20px]"></div>
                        <h1 className="text-2xl font-bold">
                            Berita Terkait
                        </h1>
                    </div>
                    <button className='bg-blue-200 w-[135px] h-[52px] rounded-lg text-base font-semibold'>
                        Lihat Semua
                    </button>
                </div>
                <div className="flex flex-row justify-items-center gap-6">
                    {linkedNews.map((news, index) => (
                    <div key={index} className="flex flex-col w-[276px] h-[358px]">
                        <img 
                            src={news.thumbnail}
                            className="w-[276px] h-[197px] rounded-md object-cover mb-[8px]"
                        />
                        <div className="flex flex-col justify-between flex-grow">
                            <h1 className="font-semibold text-lg">
                                {news.title}
                            </h1>
                            <div className="flex justify-start text-xs text-gray-500 mb-12">
                                <span className="text-[#0090FF] font-semibold">Nasional</span>
                                <span className="mx-3">•</span>
                                <span>{formatDate(news.pubDate)}</span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            {/* Popular News */}
            <div className='flex flex-col w-[419px]'>
                <div className="flex flex-row mr-[72px] items-center mt-2">
                    <div className="w-1 h-[34px] bg-[#0090FF] mr-[20px]"></div>
                    <h1 className="text-2xl font-bold">
                        Berita Terpopuler
                    </h1>
                </div>
                <div className="flex flex-col justify-between my-[32px]">
                {popularNews.map((news, index) => (
                    <>
                        <div className="flex flex-row w-[400px] h-[128px] px-[26px] my-[24px]">
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
                        {index !== linkedNews.length - 1 && (
                            <div className="h-[2px] w-[419px] bg-[#E0E0E0]"></div>
                        )}
                    </>
                ))}
                </div>
        </div>    
    </div>
    );
};

export default NewsPage;
