import {
  BoxIcon,
  HouseIcon,
  InfoIcon,
  HeartHandshakeIcon,
  AwardIcon,
  MenuIcon,
  XIcon,
  UserRoundPlusIcon,
  LogInIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebaseConfig";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        setLinks([
          {
            path: "/",
            name: "Home",
            icon: <HouseIcon strokeWidth={1.5} size={20} />,
          },
          {
            path: "/services",
            name: "Services",
            icon: <HeartHandshakeIcon strokeWidth={1.5} size={20} />,
          },
          {
            path: "/product",
            name: "Product",
            icon: <BoxIcon strokeWidth={1.5} size={20} />,
          },
          {
            path: "/achievements",
            name: "Help",
            icon: <AwardIcon strokeWidth={1.5} size={20} />,
          },
          {
            path: "/profile",
            name: "My Profile",
            icon: <LayoutDashboardIcon strokeWidth={1.5} size={20} />,
          },
        ]);
      } else {
        setLinks([
          {
            path: "/",
            name: "Home",
            icon: <HouseIcon strokeWidth={1.5} size={20} />,
          },
          {
            path: "/services",
            name: "Services",
            icon: <HeartHandshakeIcon strokeWidth={1.5} size={20} />,
          },
          {
            path: "/product",
            name: "Product",
            icon: <BoxIcon strokeWidth={1.5} size={20} />,
          },
          {
            path: "/achievements",
            name: "Help",
            icon: <AwardIcon strokeWidth={1.5} size={20} />,
          },
          {
            path: "/signup",
            name: "Sign Up",
            icon: <UserRoundPlusIcon strokeWidth={1.5} size={20} />,
          },
          {
            path: "/login",
            name: "Log In",
            icon: <LogInIcon strokeWidth={1.5} size={20} />,
          },
        ]);
      }
    });
  }, []);

  return (
    <div className={`sticky top-0 z-30 w-full transition-all duration-300 ${scrolled ? 'shadow-md' : ''} bg-white`}>
      {/* Desktop and Mobile Layout Container */}
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="py-3">
          <img src="/logo1.png" width={180} alt="Health-Insurance" className="object-contain" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-black hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Desktop Navigation - White Background, Black Text */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link, index) => {
            if (
              (link.name === "Sign Up" || link.name === "Log In") &&
              auth.currentUser
            )
              return null;
            if (link.name === "My Profile" && !auth.currentUser) return null;
            return (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `group flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive 
                      ? "bg-gray-50 font-bold" 
                      : "hover:bg-gray-50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-black group-hover:text-blue-600'}`}>
                      {link.icon}
                    </span>
                    <span className={`transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-tr from-blue-800 to-white bg-clip-text text-transparent font-bold' 
                        : 'text-black group-hover:bg-gradient-to-tr group-hover:from-blue-800 group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent'
                    }`}>
                      {link.name}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation Menu - Now transparent with blur effect */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full pt-16 transition-all duration-300 ease-in-out backdrop-blur-md bg-black/70 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-3 space-y-1 max-w-sm mx-auto bg-black/80 rounded-lg">
          {links.map((link, index) => {
            if (
              (link.name === "Sign Up" || link.name === "Log In") &&
              auth.currentUser
            )
              return null;
            if (link.name === "My Profile" && !auth.currentUser) return null;
            return (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-3 px-4 py-3 rounded-md text-base transition-all duration-200 ${
                    isActive
                      ? "bg-gray-900/80"
                      : "hover:bg-gray-900/80"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`transition-colors duration-300 ${isActive ? 'text-blue-400' : 'text-white group-hover:text-blue-400'}`}>
                      {link.icon}
                    </span>
                    <span className={`transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-tr from-blue-400 to-white bg-clip-text text-transparent font-bold' 
                        : 'text-white group-hover:bg-gradient-to-tr group-hover:from-blue-400 group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent'
                    }`}>
                      {link.name}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
