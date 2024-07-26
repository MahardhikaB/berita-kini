'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiSearch } from 'react-icons/fi';

const Rekomendasi = () => {
    const [listNews, setListNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPage] = useState(1);
    const newsPerPage = 8;

    async function getAllNews() {
        const res = await fetch(`https://api-berita-indonesia.vercel.app/cnn/nasional/`, {
            method: "GET",
        });
        const data = (await res.json()).data['posts'];
        setListNews(data.slice(0, 96));
        setTotalPage(Math.ceil(data.length / newsPerPage));
    }

    useEffect(() => {
        getAllNews();
    }, []);

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = listNews.slice(indexOfFirstNews, indexOfLastNews);

    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber < totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="flex flex-col mx-[72px] text-black">
            <div className="flex flex-row justify-between items-center mb-[32px]">
                <div className="w-1 h-[34px] bg-[rgb(0,144,255)] mr-[20px]"></div>
                <h1 className="text-2xl font-bold">
                    Rekomendasi Untuk Anda
                </h1>
                <div className="flex items-center border border-gray-300 rounded-md p-3 w-[400px] ml-auto mr-[24px]">
                    <input
                        type="text"
                        placeholder="Cari disini..."
                        className="flex-grow outline-none text-sm w-[492px]"
                    />
                    <FiSearch className="text-gray-400" size={20} />
                </div>
            </div>

            {/* Card */}
            <div className="grid grid-cols-4 justify-items-center gap-6">
                {currentNews.map((news, index) => (
                    <Link key={index} href={`/news?data=${encodeURIComponent(JSON.stringify(news))}`}>
                        <div className="flex flex-col w-[276px] h-[358px]">
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
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-[32px] px-6">
                <span className="text-sm text-gray-600">
                    Showing {indexOfFirstNews + 1} to {indexOfLastNews} of {listNews.length} results
                </span>
                <div className="flex space-x-2">
                    <button 
                        onClick={() => paginate(currentPage - 1)} 
                        disabled={currentPage === 1}
                        className="px-3 py-1 text-sm"
                    >
                        &lt; Previous
                    </button>
                    <button 
                        onClick={() => paginate(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 text-sm"
                    >
                        Next &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rekomendasi;
