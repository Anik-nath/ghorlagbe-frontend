import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  User,
  ChevronDown,
  LogOut,
  Heart,
  Settings,
  HelpCircle,
  Crown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import logo from "/assets/logo-main.png";
import { FaCaretDown, FaPlusCircle, FaUserPlus } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const navigation = [
    { name: "অনুসন্ধান", href: "/search" },
    { name: "সব বিজ্ঞাপন", href: "/ads" },

    {
      name: "অ্যাকাউন্ট",
      href: isAuthenticated ? "/profile" : "/login",
      onClick: (e: React.MouseEvent) => {
        if (!isAuthenticated) {
          e.preventDefault();
          navigate("/login");
        }
      },
    },
    { name: "আমাদের সম্পর্কে", href: "/about" },
  ];

  const accountMenuItems = [
    { name: "অ্যাকাউন্ট", href: "/profile", icon: User },
    { name: "আমার বিজ্ঞাপন", href: "/myads", icon: FaPlusCircle },
    { name: "আমার ফেভারিটস", href: "/favorites", icon: Heart },
    { name: "আমার প্রোফাইল", href: "/profile", icon: Settings },
    { name: "আপগ্রেড করুন", href: "/upgrade", icon: Crown },
    { name: "সাপোর্ট", href: "/contact", icon: HelpCircle },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const handlePostAdClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      navigate("/login");
    }
  };
  return (
    <nav className="bg-white border-b border-gray-200  z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-auto py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="ঘর লাগবে লোগো"
              className="w-full md:h-20 h-16 object-contain "
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={item.onClick}
                className={`px-2 py-2 text-lg font-normal transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-[#198754] border-[#198754]"
                    : "text-gray-700 hover:text-[#198754]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex flex-row-reverse items-center space-x-3">
            {isAuthenticated ? (
              <>
                <Link to="/post-rent">
                  <Button
                    size="sm"
                    className="bg-[#ffc107] text-lg font-normal hover:bg-[#ffcc32] text-black"
                  >
                    ফ্রি বিজ্ঞাপন
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="flex px-2 items-center hover:bg-transparent focus-visible:border-0 focus-visible:outline-none focus-visible:ring-0"
                    >
                      <span className="text-xl mr-2 text-[#157347] font-medium">
                        Hi! {user?.name}
                      </span>
                      <div className="flex items-center flex-1 flex-row">
                        <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-gray-600" />
                        </div>
                        <FaCaretDown className="h-4 w-4 ml-1" />
                      </div>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {accountMenuItems.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link to={item.href} className="flex items-center">
                          <item.icon className="h-4 w-4 mr-2" />
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-red-600"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      লগ আউট
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link to="/post-ad">
                  <Button
                    onClick={handlePostAdClick}
                    variant="ghost"
                    size="sm"
                    className="text-lg text-[#198754] hover:bg-transparent hover:text-[#198754] flex items-center"
                  >
                    <FaPlusCircle className="h-6 w-6 text-[#198754]" />
                    পোস্ট বিজ্ঞাপন
                  </Button>
                </Link>
                <Link to="/register">
                  <button className="bg-[#198754] flex flex-row py-2 gap-2 rounded-md hover:bg-[#157347] text-white text-lg px-4 font-normal">
                    <FaUserPlus className="h-6 w-6" />
                    রেজিস্ট্রেশন
                  </button>
                </Link>
                <Link to="/login">
                  <button className="flex flex-row py-2 gap-2 rounded-md border items-center text-lg font-normal px-2 text-[#198754] border-[#198754] hover:bg-[#198754] hover:text-white">
                    <FaRegUser className="h-5 w-5 mb-1" />
                    লগইন
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2  rounded-md text-gray-700 "
            >
              <Menu className="h-10 w-10" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 animate-fadeIn"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Menu container */}
            <div className="fixed inset-y-0 left-0 w-9/12 max-w-xs bg-white shadow-lg overflow-y-auto animate-slideIn">
              <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b">
                <Link
                  to="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src={logo}
                    alt="ঘর লাগবে লোগো"
                    className="h-16 object-contain"
                    loading="lazy"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={(e) => {
                      setIsOpen(false);
                      if (item.onClick) item.onClick(e);
                    }}
                    className={`block px-3 py-3 text-base font-medium rounded-md transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-green-600 bg-green-50"
                        : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {isAuthenticated && (
                  <>
                    <div className="border-t pt-2 mt-2">
                      {accountMenuItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center px-3 py-3 text-base font-medium rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50"
                        >
                          <item.icon className="h-4 w-4 mr-2" />
                          {item.name}
                        </Link>
                      ))}
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          handleLogout();
                        }}
                        className="flex items-center w-full px-3 py-3 text-base font-medium rounded-md text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        লগ আউট
                      </button>
                    </div>
                  </>
                )}

                <div className="pt-4 border-t border-gray-200 space-y-2 px-2">
                  {isAuthenticated ? (
                    <Link to="/post-rent" onClick={() => setIsOpen(false)}>
                      <Button
                        size="sm"
                        className="bg-[#ffc107] text-lg font-normal hover:bg-[#ffcc32] text-black"
                      >
                        ফ্রি বিজ্ঞাপন
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/post-ad"
                        onClick={(e) => {
                          setIsOpen(false);
                          if (!isAuthenticated) {
                            e.preventDefault();
                            navigate("/login");
                          }
                        }}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-lg text-[#198754] hover:bg-transparent hover:text-[#198754] flex items-center"
                        >
                          <FaPlusCircle className="h-6 w-6 text-[#198754]" />
                          পোস্ট বিজ্ঞাপন
                        </Button>
                      </Link>
                      <Link to="/register" onClick={() => setIsOpen(false)}>
                        <button className="bg-[#198754] flex flex-row py-2 gap-2 rounded-md hover:bg-[#157347] text-white text-lg px-4 font-normal">
                          <FaUserPlus className="h-6 w-6" />
                          রেজিস্ট্রেশন
                        </button>
                      </Link>
                      <Link to="/login" onClick={() => setIsOpen(false)}>
                        <button className="flex flex-row py-2 gap-2 rounded-md border items-center text-lg font-normal px-2 text-[#198754] border-[#198754] hover:bg-[#198754] hover:text-white">
                          <FaRegUser className="h-5 w-5 mb-1" />
                          লগইন
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
