import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin } from "lucide-react";
import { BiSolidBadge } from "react-icons/bi";

const AdsCard = ({ property }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative z-0">
        <img
          src="https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg"
          alt={property.title}
          className="w-full h-56 object-cover z-0 rounded-t-md"
          loading="lazy"
        />

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
        <button className="absolute top-2 right-2 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors z-10">
          <Heart className="h-4 w-4 text-gray-900" />
        </button>
      </div>

      <CardContent className="p-4">
        <h3 className="font-medium text-[1.2rem] mb-2 text-gray-900">{property.title}</h3>
        <p className="text-green-600 font-medium text-md mb-2">
          {property.price}/ <span className="text-gray-800">{property.day}</span>
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
