import React, { useState } from "react";
import Mission from "@/components/About/Misson";
import SearchForm from "@/components/Search/SearchForm";
import PropertiesDetailsFrom from "@/components/Search/PropertiesDetailsFrom";

const SearchPage = () => {
  const [form, setForm] = useState({
    searchType: "খুঁজুন",
    lift: "",
    generator: "",
    parking: "",
    wifi: "",
    gas: "",
    security: "",
  });

  const setSearchType = (searchType: string) =>
    setForm((prev) => ({ ...prev, searchType }));
  const setLift = (lift: string) => setForm((prev) => ({ ...prev, lift }));
  const setGenerator = (generator: string) =>
    setForm((prev) => ({ ...prev, generator }));
  const setParking = (parking: string) =>
    setForm((prev) => ({ ...prev, parking }));
  const setWifi = (wifi: string) => setForm((prev) => ({ ...prev, wifi }));
  const setGas = (gas: string) => setForm((prev) => ({ ...prev, gas }));
  const setSecurity = (security: string) =>
    setForm((prev) => ({ ...prev, security }));

  const { searchType, lift, generator, parking, wifi, gas, security } = form;

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-medium my-6">
            রুম বা ফ্ল্যাটমেট খুঁজুন
          </h1>

          {/* Search Type Tabs */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setSearchType("খুঁজুন")}
                className={`px-6 py-2 rounded-md text-sm transition-colors ${
                  searchType === "খুঁজুন"
                    ? "hover:bg-[#157347] bg-[#198754] text-white"
                    : "text-[#198754] hover:text-[#198754]"
                }`}
              >
                খুঁজুন
              </button>
              <button
                onClick={() => setSearchType("বিস্তারিত খুঁজুন")}
                className={`px-6 py-2 rounded-md text-sm transition-colors ${
                  searchType === "বিস্তারিত খুঁজুন"
                    ? "hover:bg-[#157347] bg-[#198754] text-white"
                    : "text-[#198754] hover:text-[#198754]"
                }`}
              >
                বিস্তারিত খুঁজুন
              </button>
            </div>
          </div>

          {/* Search Form */}
          {searchType === "খুঁজুন" ? (
            <div className="max-w-6xl mx-auto">
              <SearchForm setSearchType={setSearchType} />
            </div>
          ) : (
            <PropertiesDetailsFrom
              lift={lift}
              generator={generator}
              parking={parking}
              wifi={wifi}
              gas={gas}
              security={security}
              setLift={setLift}
              setGenerator={setGenerator}
              setParking={setParking}
              setWifi={setWifi}
              setGas={setGas}
              setSecurity={setSecurity}
            />
          )}
        </div>
      </div>
      {/* Instructions */}
      <Mission />
    </div>
  );
};

export default SearchPage;
