import React, { useState } from "react";

const NewSearchPage = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [districts] = useState([
    { id: 1, bn_name: "ঢাকা", name: "Dhaka" },
    { id: 2, bn_name: "চট্টগ্রাম", name: "Chittagong" },
    // Add more districts as needed
  ]);
  const [areas, setAreas] = useState([]);

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    // Here you would typically fetch areas based on districtId from an API
    // For now, we'll mock some data
    if (districtId === "1") {
      setAreas([
        { id: 1, bn_name: "গুলশান", name: "Gulshan" },
        { id: 2, bn_name: "বনানী", name: "Banani" },
      ]);
    } else if (districtId === "2") {
      setAreas([
        { id: 3, bn_name: "আগ্রাবাদ", name: "Agrabad" },
        { id: 4, bn_name: "পাহাড়তলী", name: "Pahartali" },
      ]);
    } else {
      setAreas([]);
    }
  };

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <div>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <h1 className="heading font-bold text-center">
                  রুম বা ফ্ল্যাটমেট খুঁজুন
                </h1>
              </div>
            </div>

            <div className="col-lg-10 offset-lg-1">
              <div>
                <div className="search-advance card p-md-5 p-2">
                  <form name="advanced" method="get">
                    <div className="row mb-3">
                      <label className="form-label col-4">অনুসন্ধান:</label>
                      <div className="col-lg-8">
                        <div className="input-group">
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
                            className="form-control"
                            name="title"
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
                    </div>

                    <div className="mb-3 row">
                      <label className="form-label col-4">অবস্থান:</label>
                      <div className="col-8">
                        <div className="d-flex gap-2">
                          <select
                            className="form-select"
                            id="district"
                            name="district_id"
                            onChange={handleDistrictChange}
                          >
                            <option value="">শহর</option>
                            {districts.map((district) => (
                              <option key={district.id} value={district.id}>
                                {district.bn_name}({district.name})
                              </option>
                            ))}
                          </select>
                          <select
                            className="form-select"
                            name="upazila_id"
                            id="area"
                          >
                            <option value="">এলাকা</option>
                            {areas.map((area) => (
                              <option key={area.id} value={area.id}>
                                {area.bn_name}({area.name})
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {showAdvanced && (
                      <div className="more-advanced">
                        <div className="mb-3 row">
                          <label className="form-label col-4">
                            প্রপার্টির ধরন:
                          </label>
                          <div className="col-8">
                            <select className="form-select" name="renttype">
                              <option value="" selected>
                                -------
                              </option>
                              <option value="0">ফ্লাট ভাড়া</option>
                              <option value="1">সিট ভাড়া</option>
                              <option value="2">সাবলেট</option>
                            </select>
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <label className="form-label col-4">
                            ভাড়ার ধরন:
                          </label>
                          <div className="col-8">
                            <div className="form-check form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  name="rentfor[]"
                                  className="form-check-input"
                                  value="bachelor"
                                />
                                ব্যাচেলর
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  name="rentfor[]"
                                  className="form-check-input"
                                  value="family"
                                />
                                ফ্যামিলি
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  name="rentfor[]"
                                  className="form-check-input"
                                  value="male-student"
                                />
                                ছাত্র
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  name="rentfor[]"
                                  className="form-check-input"
                                  value="female-student"
                                />
                                ছাত্রী
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  name="rentfor[]"
                                  className="form-check-input"
                                  value="men"
                                />
                                পুরুষ
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  name="rentfor[]"
                                  className="form-check-input"
                                  value="women"
                                />
                                মহিলা
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  name="rentfor[]"
                                  className="form-check-input"
                                  value="male-jobholder"
                                />
                                পুরুষ চাকরীজীবী
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  name="rentfor[]"
                                  className="form-check-input"
                                  value="female-jobholder"
                                />
                                মহিলা চাকরীজীবী
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  name="rentfor[]"
                                  className="form-check-input"
                                  value="small-family"
                                />
                                ছোট ফ্যামিলি
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <label className="form-label col-4">বেড রুম:</label>
                          <div className="col-8">
                            <select
                              name="bedroom"
                              className="form-select form-select-sm"
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
                        </div>

                        <div className="mb-3 row">
                          <label className="form-label col-4">ওয়াস রুম:</label>
                          <div className="col-8">
                            <select
                              name="washroom"
                              className="form-select form-select-sm"
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
                        </div>

                        <div className="mb-3 row">
                          <label className="form-label col-4">
                            লিফট সুবিধা:
                          </label>
                          <div className="col-8">
                            <div className="btn-group btn-group-sm float-button">
                              <input
                                type="radio"
                                className="btn-check"
                                id="lift-yes"
                                name="lift"
                                value="1"
                              />
                              <label
                                className="btn btn-outline-success btn-sm"
                                htmlFor="lift-yes"
                              >
                                আছে
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                id="lift-no"
                                name="lift"
                                value="0"
                              />
                              <label
                                className="btn btn-outline-dark btn-sm"
                                htmlFor="lift-no"
                              >
                                নাই
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label className="form-label col-4">
                            জেনেরেটর সুবিধা:
                          </label>
                          <div className="col-8">
                            <div className="btn-group btn-group-sm float-button">
                              <input
                                type="radio"
                                className="btn-check"
                                id="generator-yes"
                                name="generator"
                                value="1"
                              />
                              <label
                                className="btn btn-outline-success btn-sm"
                                htmlFor="generator-yes"
                              >
                                আছে
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                id="generator-no"
                                name="generator"
                                value="0"
                              />
                              <label
                                className="btn btn-outline-dark btn-sm"
                                htmlFor="generator-no"
                              >
                                নাই
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label className="form-label col-4">
                            সিকিউরিটি গার্ড:
                          </label>
                          <div className="col-8">
                            <div className="btn-group btn-group-sm float-button">
                              <input
                                type="radio"
                                className="btn-check"
                                id="security-yes"
                                name="securityguard"
                                value="1"
                              />
                              <label
                                className="btn btn-outline-success btn-sm"
                                htmlFor="security-yes"
                              >
                                আছে
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                id="security-no"
                                name="securityguard"
                                value="0"
                              />
                              <label
                                className="btn btn-outline-dark btn-sm"
                                htmlFor="security-no"
                              >
                                নাই
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label className="form-label col-4">
                            পার্কিং সুবিধা:
                          </label>
                          <div className="col-8">
                            <div className="btn-group btn-group-sm float-button">
                              <input
                                type="radio"
                                className="btn-check"
                                id="parking-yes"
                                name="parking"
                                value="1"
                              />
                              <label
                                className="btn btn-outline-success btn-sm"
                                htmlFor="parking-yes"
                              >
                                আছে
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                id="parking-no"
                                name="parking"
                                value="0"
                              />
                              <label
                                className="btn btn-outline-dark btn-sm"
                                htmlFor="parking-no"
                              >
                                নাই
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label className="form-label col-4">
                            গ্যাস সুবিধা:
                          </label>
                          <div className="col-8">
                            <div className="btn-group btn-group-sm float-button">
                              <input
                                type="radio"
                                className="btn-check"
                                id="gas-yes"
                                name="gas"
                                value="line"
                              />
                              <label
                                className="btn btn-outline-success btn-sm"
                                htmlFor="gas-yes"
                              >
                                লাইন
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                id="gas-s"
                                name="gas"
                                value="cylinder"
                              />
                              <label
                                className="btn btn-outline-success btn-sm"
                                htmlFor="gas-s"
                              >
                                সিলিন্ডার
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                id="gas-no"
                                name="gas"
                                value="0"
                              />
                              <label
                                className="btn btn-outline-dark btn-sm"
                                htmlFor="gas-no"
                              >
                                নাই
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label className="form-label col-4">
                            WIFI সুবিধা:
                          </label>
                          <div className="col-8">
                            <div className="btn-group btn-group-sm float-button">
                              <input
                                type="radio"
                                className="btn-check"
                                id="wifi-yes"
                                name="wifi"
                                value="1"
                              />
                              <label
                                className="btn btn-outline-success btn-sm"
                                htmlFor="wifi-yes"
                              >
                                আছে
                              </label>
                              <input
                                type="radio"
                                className="btn-check"
                                id="wifi-no"
                                name="wifi"
                                value="0"
                              />
                              <label
                                className="btn btn-outline-dark btn-sm"
                                htmlFor="wifi-no"
                              >
                                নাই
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="text-end">
                      <button
                        className="btn btn-info border px-4"
                        type="button"
                        onClick={toggleAdvanced}
                      >
                        {showAdvanced ? "কম বিস্তারিত" : "আরও বিস্তারিত"}
                      </button>
                      <button
                        className="btn btn-success border px-4"
                        type="submit"
                      >
                        খুঁজুন
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewSearchPage;
