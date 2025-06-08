import { MapPin, BedDouble, Landmark, CheckCircle2 } from "lucide-react";
import { FaLocationDot, FaMap, FaShieldHeart } from "react-icons/fa6";

type Props = {
  title: string;
  location: string;
  beds: number;
  baths: number;
  price: number;
  isVerified: boolean;
  image: string;
};

export default function AdListingCard({
  title,
  location,
  beds,
  baths,
  price,
  isVerified,
  image,
}: Props) {
  return (
    <div className="bg-green-300/70 p-4 rounded-md flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2 relative">
          <img
            src={image}
            alt="property"
            className="w-full h-40 rounded-md rounded-bl-none object-cover"
          />
          <button
            className="absolute bottom-0 left-0 bg-yellow-400 text-gray-800 px-3 py-1 text-md font-semibold"
            type="button"
            disabled
          >
            ভাড়া সম্পন্ন হয়েছে
          </button>
        </div>
        <div className="flex flex-col justify-between flex-1 relative">
          {/* details */}
          <div>
            <h2 className="text-2xl font-normal">{title}</h2>
            <p className="text-lg text-gray-900 flex items-center gap-1">
              <FaLocationDot className="w-4 h-4 text-yellow-400" />
              {location}
            </p>
            <div className="flex gap-4 mt-3 text-md bg-white w-fit px-2 py-1">
              <p className="flex items-center gap-1">বেড: {beds}</p>
              <p className="flex items-center gap-1">বাথরুম: {baths}</p>
            </div>
            <div className="flex gap-2 mt-3 text-sm font-semibold items-center">
              {!isVerified && (
                <span className="bg-green-600 text-white flex items-center gap-1 px-2 py-1 text-md  rounded-md">
                  <FaShieldHeart className="w-3 h-3" />
                  Verified User
                </span>
              )}
              <span className="bg-gray-500 text-white px-2 py-1 text-md  rounded-md">
                Member
              </span>
            </div>
          </div>
          {/* price */}
          <div className="text-right font-normal text-lg text-gray-800 absolute top-10 right-0">
            ৳ {price} /30
          </div>
        </div>
      </div>
    </div>
  );
}
