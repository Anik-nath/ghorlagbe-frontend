import { Button } from "@/components/ui/button";
import { useState } from "react";

const PropertiesDetailsFrom = ({
  setLift,
  setGenerator,
  setParking,
  setWifi,
  setGas,
  setSecurity,
  lift,
  generator,
  parking,
  wifi,
  gas,
  security,
  isSearchbox,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [washrooms, setWashrooms] = useState("");
  const [rentType, setRentType] = useState([]);

  const handleRentTypeChange = (value) => {
    setRentType((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // Collect all form data
    const searchData = {
      query: searchQuery,
      city: selectedCity,
      area: selectedArea,
      propertyType,
      bedrooms,
      washrooms,
      rentType,
      lift,
      generator,
      parking,
      wifi,
      gas,
      security,
    };

    console.log("Search Data:", searchData);
    alert("Search functionality triggered! Check console for search data.");
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg md:p-10 p-4 border">
      <form onSubmit={handleSearch}>
        <div className="space-y-5">
          {isSearchbox && (
            <div className="row mb-3 flex items-start gap-4">
              <label className="form-label col-4 w-4/12 text-left">
                অনুসন্ধান:
              </label>
              <div className="input-group w-full">
                <span
                  className="font-20 px-2 pt-2"
                  style={{
                    position: "absolute",
                    top: "5px",
                    left: "0",
                    zIndex: "9",
                    background: "transparent",
                  }}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  className="form-control w-full border"
                  name="title"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="খুঁজুন ফ্ল্যাট, সিট, রুম"
                  aria-label=""
                  style={{
                    height: "50px",
                    paddingLeft: "36px",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
          )}

          {/* অবস্থান */}
          <div className="flex items-start gap-4">
            <label className="w-4/12 text-left md:text-lg text-md text-nowrap">
              অবস্থান:
            </label>
            <div className="w-full grid grid-cols-2 gap-2">
              <select
                className="px-4 py-2 border border-gray-300 rounded-md"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">শহর</option>
                <option value="1">ঢাকা</option>
                <option value="2">চট্টগ্রাম</option>
                <option value="3">সিলেট</option>
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-md"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                <option value="">এলাকা</option>
                <option value="1">ধানমন্ডি</option>
                <option value="2">গুলশান</option>
                <option value="3">বনানী</option>
              </select>
            </div>
          </div>

          {/* Expandable Section */}
          {isExpanded && (
            <>
              {/* প্রপার্টির ধরন */}
              <div className="flex items-start gap-4">
                <label className="w-4/12 text-left md:text-lg text-md text-nowrap">
                  প্রপার্টির ধরন:
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">-------</option>
                  <option value="0">ফ্লাট ভাড়া</option>
                  <option value="1">সিট ভাড়া</option>
                  <option value="2">সাবলেট</option>
                </select>
              </div>

              {/* ভাড়ার ধরন */}
              <div className="flex items-start gap-4">
                <label className="w-4/12 text-left md:text-lg text-md text-nowrap">
                  ভাড়ার ধরন:
                </label>
                <div className="w-full flex flex-wrap gap-x-6 gap-y-2">
                  {[
                    { label: "ব্যাচেলর", value: "bachelor" },
                    { label: "ফ্যামিলি", value: "family" },
                    { label: "ছাত্র", value: "male-student" },
                    { label: "ছাত্রী", value: "female-student" },
                    { label: "পুরুষ", value: "male" },
                    { label: "মহিলা", value: "female" },
                    { label: "পুরুষ চাকরীজীবী", value: "male-jobholder" },
                    { label: "মহিলা চাকরীজীবী", value: "female-jobholder" },
                    { label: "ছোট ফ্যামিলি", value: "small-family" },
                  ].map((item) => (
                    <label
                      key={item.value}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        name="rentfor[]"
                        value={item.value}
                        checked={rentType.includes(item.value)}
                        onChange={() => handleRentTypeChange(item.value)}
                        className="h-4 w-4 text-[#198754] !rounded border border-[#198754] focus:ring-[#198754] accent-[#198754]"
                      />
                      <span className="text-lg text-gray-900">
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* বেড রুম */}
              <div className="flex items-start gap-4">
                <label className="w-4/12 text-left md:text-lg text-md text-nowrap">
                  বেড রুম:
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                >
                  <option value="">-------</option>
                  <option value="1">১</option>
                  <option value="2">২</option>
                  <option value="3">৩</option>
                  <option value="4">৪</option>
                  <option value="5">৫</option>
                  <option value="6">৬+</option>
                </select>
              </div>

              {/* ওয়াস রুম */}
              <div className="flex items-start gap-4">
                <label className="w-4/12 text-left md:text-lg text-md text-nowrap">
                  ওয়াস রুম:
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  value={washrooms}
                  onChange={(e) => setWashrooms(e.target.value)}
                >
                  <option value="">-------</option>
                  <option value="1">১</option>
                  <option value="2">২</option>
                  <option value="3">৩</option>
                  <option value="4">৪</option>
                  <option value="5">৫</option>
                  <option value="6">৬+</option>
                </select>
              </div>

              {/* লিফট সুবিধা */}
              <div className="flex items-start gap-4 mb-4">
                <label className="w-4/12 text-left md:text-lg text-md text-nowrap">
                  লিফট সুবিধা:
                </label>
                <div className="w-full flex">
                  <div className="flex items-center rounded-full overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setLift("yes")}
                      className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                        lift === "yes"
                          ? "bg-[#157347] text-white"
                          : "text-[#157347]"
                      }`}
                    >
                      {lift === "yes" && (
                        <span className="mr-2 text-white">✔</span>
                      )}
                      আছে
                    </button>
                    <button
                      type="button"
                      onClick={() => setLift("no")}
                      className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                        lift === "no"
                          ? "bg-gray-900 text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {lift === "no" && (
                        <span className="mr-2 text-white">✔</span>
                      )}
                      নেই
                    </button>
                  </div>
                </div>
                <input type="hidden" name="lift" value={lift} />
              </div>

              {/* জেনেরেটর সুবিধা */}
              <div className="flex items-start gap-4">
                <label className="w-4/12 text-left md:text-lg text-md text-nowrap">
                  জেনেরেটর সুবিধা:
                </label>
                <div className="w-full flex">
                  <div className="flex items-center rounded-full overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setGenerator("yes")}
                      className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                        generator === "yes"
                          ? "bg-[#157347] text-white"
                          : "text-[#157347]"
                      }`}
                    >
                      {generator === "yes" && (
                        <span className="mr-2 text-white">✔</span>
                      )}
                      আছে
                    </button>
                    <button
                      type="button"
                      onClick={() => setGenerator("no")}
                      className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                        generator === "no"
                          ? "bg-gray-900 text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {generator === "no" && (
                        <span className="mr-2 text-white">✔</span>
                      )}
                      নেই
                    </button>
                  </div>
                </div>
                <input type="hidden" name="generator" value={generator} />
              </div>

              {/* সিকিউরিটি গার্ড */}
              <div className="flex items-start gap-4">
                <label className="w-4/12 text-left md:text-lg text-md text-nowrap">
                  সিকিউরিটি গার্ড:
                </label>
                <div className="w-full flex">
                  <div className="flex items-center rounded-full overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setSecurity("yes")}
                      className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                        security === "yes"
                          ? "bg-[#157347] text-white"
                          : "text-[#157347]"
                      }`}
                    >
                      {security === "yes" && (
                        <span className="mr-2 text-white">✔</span>
                      )}
                      আছে
                    </button>
                    <button
                      type="button"
                      onClick={() => setSecurity("no")}
                      className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                        security === "no"
                          ? "bg-gray-900 text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {security === "no" && (
                        <span className="mr-2 text-white">✔</span>
                      )}
                      নেই
                    </button>
                  </div>
                </div>
                <input type="hidden" name="security" value={security} />
              </div>

              {/* পার্কিং সুবিধা */}
              <div className="flex items-start gap-4">
                <label className="w-4/12 text-left md:text-lg text-md text-nowrap">
                  পার্কিং সুবিধা:
                </label>
                <div className="w-full flex">
                  <div className="flex items-center rounded-full overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setParking("yes")}
                      className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                        parking === "yes"
                          ? "bg-[#157347] text-white"
                          : "text-[#157347]"
                      }`}
                    >
                      {parking === "yes" && (
                        <span className="mr-2 text-white">✔</span>
                      )}
                      আছে
                    </button>
                    <button
                      type="button"
                      onClick={() => setParking("no")}
                      className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                        parking === "no"
                          ? "bg-gray-900 text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {parking === "no" && (
                        <span className="mr-2 text-white">✔</span>
                      )}
                      নেই
                    </button>
                  </div>
                </div>
                <input type="hidden" name="parking" value={parking} />
              </div>

              {/* গ্যাস সুবিধা */}
              <div className="flex items-start gap-4">
                <label className="w-4/12 text-left md:text-lg text-md text-nowrap">
                  গ্যাস সুবিধা:
                </label>
                <div className="w-full flex">
                  <div className="flex items-center rounded-full overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setGas("line")}
                      className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                        gas === "line"
                          ? "bg-[#157347] text-white"
                          : "text-[#157347]"
                      }`}
                    >
                      {gas === "line" && (
                        <span className="mr-2 text-white">✔</span>
                      )}
                      লাইন
                    </button>
                    <button
                      type="button"
                      onClick={() => setGas("silendar")}
                      className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] transition-colors ${
                        gas === "silendar"
                          ? "bg-[#157347] text-white"
                          : "text-[#157347]"
                      }`}
                    >
                      {gas === "silendar" && (
                        <span className="mr-2 text-white">✔</span>
                      )}
                      সিলিন্ডার
                    </button>
                    <button
                      type="button"
                      onClick={() => setGas("no")}
                      className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                        gas === "no"
                          ? "bg-gray-900 text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {gas === "no" && (
                        <span className="mr-2 text-white">✔</span>
                      )}
                      নেই
                    </button>
                  </div>
                </div>
                <input type="hidden" name="gas" value={gas} />
              </div>

              {/* WIFI সুবিধা */}
              <div className="flex items-start gap-4">
                <label className="w-4/12 text-left md:text-lg text-md text-nowrap">
                  WIFI সুবিধা:
                </label>
                <div className="w-full flex">
                  <div className="flex items-center rounded-full overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setWifi("yes")}
                      className={`flex items-center px-4 py-1 border border-r-0 border-[#157347] rounded-l-full transition-colors ${
                        wifi === "yes"
                          ? "bg-[#157347] text-white"
                          : "text-[#157347]"
                      }`}
                    >
                      {wifi === "yes" && (
                        <span className="mr-1 text-white">✔</span>
                      )}
                      আছে
                    </button>
                    <button
                      type="button"
                      onClick={() => setWifi("no")}
                      className={`flex items-center px-4 py-1 border border-gray-700 rounded-r-full transition-colors ${
                        wifi === "no"
                          ? "bg-gray-900 text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {wifi === "no" && (
                        <span className="mr-2 text-white">✔</span>
                      )}
                      নেই
                    </button>
                  </div>
                </div>
                <input type="hidden" name="wifi" value={wifi} />
              </div>
            </>
          )}

          {/* Submit */}
          <div className="pt-4 flex justify-end gap-2">
            <Button
              type="button"
              onClick={toggleExpanded}
              className="w-auto text-sm bg-[#157347] hover:bg-green-700"
            >
              {isExpanded ? "সংক্ষিপ্ত" : "আরও বিস্তারিত"}
            </Button>
            <Button
              type="submit"
              className="w-auto text-sm bg-[#157347] hover:bg-green-700"
            >
              খুঁজুন
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertiesDetailsFrom;
