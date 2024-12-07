'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SliderArrowLeftIcon, SliderArrowRightIcon } from "@/utils/Icones";

interface ImageData {
    id: number;
    src: string;
    mobileSrc?: string;
    title: string;
    description?: string;
}

const imageData: ImageData[] = [
    {
        id: 1,
        src: "/staticimage/slide-1.webp",
        mobileSrc: "/staticimage/slide-1.webp",
        title: "EXAMPLE TITLE 1",
        description: "Description 1"
    },
    {
        id: 2,
        src: "/staticimage/slide-2.jpeg",
        mobileSrc: "/staticimage/slide-2.jpeg",
        title: "EXAMPLE TITLE 2",
        description: "Description 2"
    },
    {
        id: 3,
        src: "/staticimage/slide-3.webp",
        mobileSrc: "/staticimage/slide-3.webp",
        title: "EXAMPLE TITLE 3",
        description: "Description 3"
    },
];

export default function SliderBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoSliding, setIsAutoSliding] = useState(true);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const totalBanners = imageData.length;
    const [startX, setStartX] = useState<number | null>(null);

    useEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        updateIsMobile();
        window.addEventListener("resize", updateIsMobile);

        return () => window.removeEventListener("resize", updateIsMobile);
    }, []);

    useEffect(() => {
        if (isAutoSliding) {
            const timer = setInterval(() => {
                handleNext();
            }, 4000);
            return () => clearInterval(timer);
        }
    }, [currentIndex, isAutoSliding]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalBanners);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalBanners) % totalBanners);
    };

    const handlePause = () => setIsAutoSliding(false);
    const handleResume = () => setIsAutoSliding(true);

    const handleDragStart = (clientX: number) => {
        setStartX(clientX);
    };

    const handleDragMove = (clientX: number) => {
        if (startX === null) return;

        const deltaX = clientX - startX;
        if (deltaX > 50) {
            handlePrevious();
            setStartX(null);
        } else if (deltaX < -50) {
            handleNext();
            setStartX(null);
        }
    };

    const handleDragEnd = () => {
        setStartX(null);
    };

    return (
        <section
            className="relative w-100 h-[80vh] max-h-[900px] overflow-hidden"
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
        >
            {imageData.map((image, index) => (
                <div
                    key={image.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 
                        ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                >
                    <Image
                        src={isMobile && image.mobileSrc ? image.mobileSrc : image.src}
                        alt={image.title}
                        width={0}
                        height={0}
                        layout="fill"
                        sizes="100vw"
                        className="filter brightness-[60%] w-full object-cover"
                        draggable='false'
                    />
                    <div className="absolute top-1/4 md:top-1/3 left-5 md:left-10 text-white pr-5 md:pr-0">
                        {image.title && <h2 className="text-3xl md:text-6xl font-black my-4 whitespace-pre-line font-inter">{image.title}</h2>}
                        {image.description && <p className="text-xl max-w-full md:max-w-2xl text-white/60">{image.description}</p>}
                    </div>
                </div>
            ))}

            <div className="absolute bottom-5 flex items-center justify-between w-full px-5">
                <button
                    className="transform bg-white/0 backdrop-blur-[20px] text-white p-3 rounded-full hover:bg-white/10"
                    onClick={handlePrevious}
                >
                    <SliderArrowLeftIcon size={isMobile ? 40 : 60} />
                </button>
                <div className="w-[32vw] flex items-center justify-center space-x-6">
                    <span className="text-white text-xl font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
                    <div className="w-3/4 h-[2px] bg-gray-500 rounded-full relative">
                        <div
                            className="h-[2px] bg-white rounded-full transition-all duration-500"
                            style={{ width: `${((currentIndex + 1) / totalBanners) * 100}%` }}
                        />
                    </div>
                    <span className="text-white text-xl font-bold">{String(totalBanners).padStart(2, '0')}</span>
                </div>

                <button
                    className="transform bg-white/0 backdrop-blur-[20px] text-white p-3 rounded-full hover:bg-white/10"
                    onClick={handleNext}
                >
                    <SliderArrowRightIcon size={isMobile ? 40 : 60} />
                </button>
            </div>
        </section>
    );
}