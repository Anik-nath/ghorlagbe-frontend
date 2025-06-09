import { FaLocationDot, FaShieldHeart } from "react-icons/fa6";

type Props = {
  title: string;
  location: string;
  beds: number;
  baths: number;
  price: number;
  isVerified: boolean;
  image: string;
  isRent: boolean; // <-- added
};

export default function AdListingCard({
  title,
  location,
  beds,
  baths,
  price,
  isVerified,
  image,
  isRent, // <-- added
}: Props) {
  return (
    <div
      className={`p-4 rounded-md flex flex-col gap-4 relative ${
        isRent ? "bg-white" : "bg-[#acffc1]"
      }`}
    >
      <div className="flex flex-row  gap-4">
        <div className="flex flex-col relative max-h-40 rounded-md">
          <img
            src={image}
            alt="property"
            className="md:w-80 w-48 h-full rounded-md rounded-bl-none object-cover"
          />
          <button
            className="absolute bottom-0 left-0 bg-yellow-400 text-gray-800 px-1 md:px-3 py-1 md:text-md text-xs text-nowrap font-medium"
            type="button"
            disabled
          >
            {isRent ? "এডিট করুন" : "ভাড়া সম্পন্ন হয়েছে"}
          </button>
        </div>
        <div className="flex flex-col justify-between w-full border-b">
          {/* details */}
          <div>
            <h2 className="md:text-xl text-md font-medium">{title}</h2>
            <p className="md:text-md text-sm text-gray-900 flex items-center gap-1">
              <FaLocationDot className="w-4 h-4 text-yellow-400" />
              {location}
            </p>
            <div className="flex gap-4 mt-3 md:text-md text-sm bg-gray-50 w-fit px-2 md:py-0.5">
              <p className="flex items-center gap-1">বেড: {beds}</p>
              <p className="flex items-center gap-1">বাথরুম: {baths}</p>
            </div>
            <div className="flex gap-2 mt-3 text-sm font-semibold items-center">
              {!isVerified && (
                <span className="bg-green-600 text-white flex items-center gap-1 px-2 py-0.5 text-xs rounded-md">
                  <FaShieldHeart className="w-3 h-3" />
                  Verified User
                </span>
              )}
              <span className="bg-gray-500 text-white px-2 py-0.5 text-xs rounded-md">
                Member
              </span>
            </div>
            {isRent && (
              <div className="flex md:justify-end mt-4">
                <button className="bg-blue-500 text-white text-sm md:text-md md:px-3 px-2 py-1 font-semibold">
                  ভাড়া হয়েছে
                </button>
                <button className="bg-red-500 text-white text-sm md:text-md md:px-3 px-2 py-1 font-semibold">
                  মুছে ফেলুন
                </button>
              </div>
            )}
          </div>
          {/* price */}
          <div className="md:text-right md:mt-0 mt-4 font-normal text-md text-gray-800 md:absolute md:top-14 md:right-4">
            ৳ {price} {isRent ? "/মাসে" : "/30"}
          </div>
        </div>
      </div>
    </div>
  );
}
