"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "./Button";

interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const Carousel = ({
  children,
  autoPlay = true,
  interval = 5000,
  className = "",
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  }, [children.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, isHovered, nextSlide]);

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full !px-2"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={20} />
        </Button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full !px-2"
          aria-label="Next slide"
        >
          <FaChevronRight size={20} />
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
