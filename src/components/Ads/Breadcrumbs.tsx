import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <nav className="flex items-center mb-4">
      <Link
        to="/"
        className="flex items-center no-underline"
        style={{ color: "#157347" }}
      >
        <AiFillHome size={20} />
      </Link>
      <span className="mx-2">
        <FaChevronRight size={12} />
      </span>
      <Link to="/ads" className="no-underline" style={{ color: "#157347" }}>
        সব বিজ্ঞাপন
      </Link>
      <span className="mx-2">
        <FaChevronRight size={12} />
      </span>
      <span>বিজ্ঞাপন বিবরণ</span>
    </nav>
  );
};

export default Breadcrumbs;
