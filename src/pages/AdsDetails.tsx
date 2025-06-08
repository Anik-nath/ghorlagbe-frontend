import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@/components/Ads/Breadcrumbs";

const AdsDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="max-w-7xl mx-auto md:px-8 px-4 py-8 min-h-screen">
      <Breadcrumbs />
      <div className="grid grid-cols-3 gap-6">
        {/* Left column: one large image */}
        <div className="col-span-2">
          <img
            src="https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg"
            alt="Main"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Right column: two stacked images */}
        <div className="flex flex-col gap-6">
          <img
            src="https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg"
            alt="Secondary 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg"
            alt="Secondary 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AdsDetails;
