import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { BiSolidBadge } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

const AdsCard = ({ property }) => {
  const { isAuthenticated } = useAuth();
  // Sample images array
  const images = [
    "https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg",
    "https://ghor.saifmorshed.com/storage/upload/48/aDPj4OTGzRmqj1AYs8tSHDxb0GE0Ycz0vr96ZkbS.jpg",
    "https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Auto-play effect
  useEffect(() => {
    let interval;
    if (isAutoPlaying && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change image every 3 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(true);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(true);
  };

  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative z-0">
        {/* Image Slider */}
        <div
          className="relative h-56 overflow-hidden rounded-t-md"
          onMouseEnter={stopAutoPlay}
        >
          <div
            className="flex transition-transform duration-700 ease-in h-full"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${property.title} - ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1 text-white rounded-full transition-all duration-1000 hover:bg-white hover:bg-opacity-80 hover:text-gray-900"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white rounded-full transition-all duration-1000 hover:bg-white hover:bg-opacity-80 hover:text-gray-900"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {/* {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-white"
                      : "bg-white bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          )} */}
        </div>

        {/* Verified Badge */}
        <div className="absolute bottom-0 -left-3 z-10">
          <div className="relative flex items-center bg-[#198754] text-white text-sm px-2 py-1 rounded-t-md rounded-br-md">
            <BiSolidBadge className="h-4 w-4 mr-1" />
            Verified
            {/* Triangle tail */}
            <div className="absolute -bottom-[10px] left-0 w-0 h-0 border-l-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#198754]"></div>
          </div>
        </div>

        {/* Heart Icon */}
        <Link to={!isAuthenticated ? "/login" : "/favorites"}>
          <button className="absolute top-2 right-2 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors z-10">
            <Heart className="h-4 w-4 text-gray-900" />
          </button>
        </Link>
      </div>

      <CardContent className="p-4">
        <h3 className="font-medium text-[1.2rem] mb-2 text-gray-900">
          {property.title}
        </h3>
        <p className="text-green-600 font-medium text-md mb-2">
          {property.price}/{" "}
          <span className="text-gray-800">{property.day}</span>
        </p>
        <p className="text-gray-800 text-md my-2 pt-2">
          <MapPin className="inline mr-1 w-5 h-5" />
          {property.location}
        </p>
        <hr className="my-4 border-t border-gray-300" />
        <div className="flex justify-between text-md text-gray-800">
          <span>{property.beds} Beds</span>
          <span>{property.bathrooms} Bathrooms</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdsCard;
