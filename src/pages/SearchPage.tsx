import PostAdSection from "@/components/Home/PostAdSection";
import PropertiesDetailsFrom from "@/components/Search/PropertiesDetailsFrom";
import { useState } from "react";

const SearchPage = () => {
  const isSearchbox = true;
  const [form, setForm] = useState({
    lift: "",
    generator: "",
    parking: "",
    wifi: "",
    gas: "",
    security: "",
  });

  const setLift = (lift: string) => setForm((prev) => ({ ...prev, lift }));
  const setGenerator = (generator: string) =>
    setForm((prev) => ({ ...prev, generator }));
  const setParking = (parking: string) =>
    setForm((prev) => ({ ...prev, parking }));
  const setWifi = (wifi: string) => setForm((prev) => ({ ...prev, wifi }));
  const setGas = (gas: string) => setForm((prev) => ({ ...prev, gas }));
  const setSecurity = (security: string) =>
    setForm((prev) => ({ ...prev, security }));

  const { lift, generator, parking, wifi, gas, security } = form;

  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-medium my-6">
              রুম বা ফ্ল্যাটমেট খুঁজুন
            </h1>

            {/* Simplified Search Form - just show the detailed search */}
            <div className="max-w-6xl mx-auto">
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
                isSearchbox={isSearchbox}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <PostAdSection />
    </>
  );
};

export default SearchPage;
