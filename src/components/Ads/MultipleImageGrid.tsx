import { useState } from "react";

const MultipleImageGrid = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Dummy images array - can have any number of images
  const images = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    },
    {
      id: 3,
      url: "https://ghor.saifmorshed.com/storage/upload/46/pHW64W6RLGcnThifxubJB657uXaqKJKyegLLbZJS.jpg",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg",
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    },
  ];

  const openImageViewer = (index) => {
    setCurrentImageIndex(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {/* Left column: one large image (first image always) */}
        <div
          className="col-span-2 cursor-pointer"
          onClick={() => openImageViewer(0)}
        >
          <img
            src={images[0]?.url}
            alt="Main"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right column: stacked images */}
        <div className="flex flex-col gap-6">
          {/* Second image */}
          {images[1] && (
            <div className="cursor-pointer" onClick={() => openImageViewer(1)}>
              <img
                src={images[1].url}
                alt="Secondary 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}

          {/* Third image or "View More" if more than 3 images */}
          {images[2] ? (
            images.length > 3 ? (
              <div
                className="relative cursor-pointer"
                onClick={() => openImageViewer(2)}
              >
                <img
                  src={images[2].url}
                  alt="Secondary 2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg hover:bg-opacity-50 transition">
                  <span className="text-white font-bold text-lg">
                    +{images.length - 3} more
                  </span>
                </div>
              </div>
            ) : (
              <div
                className="cursor-pointer"
                onClick={() => openImageViewer(2)}
              >
                <img
                  src={images[2].url}
                  alt="Secondary 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )
          ) : null}
        </div>
      </div>

      {/* Image Viewer Modal */}
      {isViewerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeImageViewer}
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
          >
            &times;
          </button>

          <div className="relative w-full max-w-4xl">
            <img
              src={images[currentImageIndex].url}
              alt={`Image ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                >
                  &lt;
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                >
                  &gt;
                </button>
              </>
            )}

            <div className="text-white text-center mt-4">
              Image {currentImageIndex + 1} of {images.length}
            </div>

            {/* Thumbnail navigation */}
            {images.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((img, index) => (
                  <img
                    key={img.id}
                    src={img.url}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-12 h-12 object-cover rounded cursor-pointer ${
                      currentImageIndex === index
                        ? "ring-2 ring-white"
                        : "opacity-60"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MultipleImageGrid;
