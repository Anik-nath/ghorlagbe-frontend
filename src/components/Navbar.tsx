import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  House,
  Menu,
  X,
  User,
  PlusCircle,
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
import logo from "../../public/assets/logo-main.png"; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const navigation = [
    { name: "অনুসন্ধান", href: "/search" },
    { name: "সব বিজ্ঞাপন", href: "/ads" },
    { name: "আমাদের সম্পর্কে", href: "/about" },
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
  ];

  const accountMenuItems = [
    { name: "অ্যাকাউন্ট", href: "/profile", icon: User },
    { name: "আমার বিজ্ঞাপন", href: "/myads", icon: PlusCircle },
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

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-auto py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="ঘর লাগবে লোগো"
              className="w-full h-24 object-contain "
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={item.onClick}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-700 hover:text-green-600"
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
                    className="bg-yellow-400 hover:bg-yellow-300 text-black"
                  >
                    ফ্রি বিজ্ঞাপন
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center hover:bg-transparent"
                    >
                      <span className="text-sm font-medium">
                        Hi! {user?.name}
                      </span>
                      <div className="flex items-center flex-1 flex-row">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-green-600" />
                        </div>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </Button>
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
                    variant="ghost"
                    size="sm"
                    className="text-gray-700 hover:text-green-600"
                  >
                    <PlusCircle className="h-4 w-4 mr-2" />
                    পোস্ট বিজ্ঞাপন
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    রেজিস্ট্রেশন
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300"
                  >
                    <User className="h-4 w-4 mr-2" />
                    লগইন
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (item.onClick) item.onClick(e);
                  }}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
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
                        className="flex items-center px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50"
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
                      className="flex items-center w-full px-3 py-2 text-base font-medium rounded-md text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      লগ আউট
                    </button>
                  </div>
                </>
              )}

              <div className="pt-4 border-t border-gray-200 space-y-2">
                {isAuthenticated ? (
                  <Link to="/post-rent" onClick={() => setIsOpen(false)}>
                    <Button
                      size="sm"
                      className="bg-yellow-400 hover:bg-yellow-300 text-black"
                    >
                      ফ্রি বিজ্ঞাপন
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/post-ad" onClick={() => setIsOpen(false)}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-gray-700 hover:text-green-600"
                      >
                        <PlusCircle className="h-4 w-4 mr-2" />
                        পোস্ট বিজ্ঞাপন
                      </Button>
                    </Link>
                    <Link to="/register" onClick={() => setIsOpen(false)}>
                      <Button
                        size="sm"
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                      >
                        রেজিস্ট্রেশন
                      </Button>
                    </Link>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full">
                        <User className="h-4 w-4 mr-2" />
                        লগইন
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
