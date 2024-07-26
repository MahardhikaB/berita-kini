'use client';
import { useState, useEffect } from "react";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/assets/banner1.png",
        "/assets/banner2.jpg",
        "/assets/banner3.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-center">
                <img 
                    src={slides[currentSlide]} 
                    className="w-[1296px] h-[407px] object-cover rounded-2xl"
                />
            </div>
            <div className="flex space-x-2 mt-6 mb-[72px]">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;
