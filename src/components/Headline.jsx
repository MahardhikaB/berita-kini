'use client';
import { useEffect, useState } from "react";

const Headline = () => {
    const [listNews, setListNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1;
    const totalPages = 5; // Assuming there are 5 pages for the example

    async function getAllNews(page = 1) {
        const res = await fetch(`https://api-berita-indonesia.vercel.app/cnn/terbaru/`, {
            method: "GET",
        });
        const data = (await res.json()).data['posts'];
        const startIndex = (page - 1) * itemsPerPage;
        setListNews(data.slice(startIndex, startIndex + itemsPerPage));
    }

    useEffect(() => {
        getAllNews(currentPage);
    }, [currentPage]);

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="flex flex-col text-black px-[72px] pt-[72px]">
            {listNews.map((news, index) => (
                <div key={index} className="flex flex-row justify-between mb-8">
                    <div className="flex flex-col w-[505px] h-[403px] justify-between">
                        <h1 className="text-base font-semibold">
                            Headline
                        </h1>
                        <h1 className="font-bold text-4xl">
                            {news.title}
                        </h1>
                        <h1 className="font-normal text-base">
                            {news.description}
                        </h1>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center mb-4">
                                <img 
                                    src="/assets/calender.png"
                                    className="w-4 mr-2"
                                />
                                <h1 className="font-medium text-sm">
                                    {formatDate(news.pubDate)}
                                </h1>
                            </div>
                            <h1 className="font-medium text-base mt-4">
                                Baca selengkapnya
                            </h1>
                        </div>
                    </div>
                    <div>
                        <img 
                            src={news.thumbnail}
                            className="w-[637px] h-[417px] rounded-3xl object-cover"
                        />
                    </div>
                </div>
            ))}
            <div className="flex justify-center items-center pt-[44px]">
                <button
                    onClick={handlePreviousPage}
                    className={`px-4 py-2 mx-2 ${currentPage === 1 ? 'text-gray-500' : 'text-blue-500'}`}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
                <span className="text-sm">
                    {currentPage} dari {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    className={`px-4 py-2 mx-2 ${currentPage === totalPages ? 'text-gray-500' : 'text-blue-500'}`}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </div>
    )
}

export default Headline;
