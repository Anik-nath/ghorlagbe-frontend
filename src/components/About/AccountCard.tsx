import React from "react";

const AccountCard = () => {
  return (
    <div className="rounded-md border p-4 mb-6">
      <h3 className="font-medium mb-3 text-lg">অ্যাকাউন্ট</h3>
      <ul className="space-y-1 text-md pl-10 font-medium">
        <li>
          <a href="/myads" className="text-blue-500 hover:underline">
            আমার বিজ্ঞাপন সমূহ
          </a>
        </li>
        <li>
          <a href="/favorites" className="text-blue-500 hover:underline">
            আমার ফেভারিটস
          </a>
        </li>
        <li>
          <a href="/profile" className="text-blue-500 hover:underline">
            আমার প্রোফাইল
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">
            মেসেজ
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AccountCard;
