import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MailIcon,
  PhoneIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
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
  ArrowUpIcon,
  MapPinIcon,
  ClockIcon,
} from "lucide-react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socials = [
    {
      link: "mailto:hinsuranceindia@gmail.com",
      name: "Email",
      icon: <MailIcon strokeWidth={1.5} size={18} />,
    },
    {
      link: "tel:+9790146623",
      name: "Phone",
      icon: <PhoneIcon strokeWidth={1.5} size={18} />,
    },
    {
      link: "https://www.facebook.com/share/1EQBeL2dkT/",
      name: "Facebook",
      icon: <FacebookIcon strokeWidth={1.5} size={18} />,
    },
    {
      link: "https://www.linkedin.com/in/sivanesh-k-s-6a9991218/",
      name: "LinkedIn",
      icon: <LinkedinIcon strokeWidth={1.5} size={18} />,
    },
    {
      link: "https://www.instagram.com/hinsuranceindia?igsh=MTRzeXZ0ejV5bWdndg==",
      name: "Instagram",
      icon: <InstagramIcon strokeWidth={1.5} size={18} />,
    },
    {
      link: "https://youtube.com/@hinsurance1?si=fI0ED490Ehkk4iOr",
      name: "Youtube",
      icon: <YoutubeIcon strokeWidth={1.5} size={18} />,
    },
  ];

  const links = [
    {
      path: "/",
      name: "Home",
      icon: <HouseIcon strokeWidth={1.5} size={18} />,
    },
    {
      path: "/services",
      name: "Services",
      icon: <HeartHandshakeIcon strokeWidth={1.5} size={18} />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <BoxIcon strokeWidth={1.5} size={18} />,
    },
    {
      path: "/achievements",
      name: "Help",
      icon: <AwardIcon strokeWidth={1.5} size={18} />,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Subtle Wave Separator */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 md:h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-900"
          ></path>
        </svg>
      </div>

      {/* Main Footer */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black text-white py-12 font-raleway">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div className="flex flex-col items-center md:items-start space-y-6">
              {/* Updated logo container with white background */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="/logo11.png" className="w-48 object-contain" alt="Navisights" />
              </div>
              <p className="text-blue-300 italic text-sm max-w-xs text-center md:text-left">
                Protecting what matters most. Your trusted partner in health insurance solutions.
              </p>
              <div className="flex flex-col space-y-4 mt-2">
                <div className="flex items-center space-x-3">
                  <MapPinIcon size={18} className="text-blue-400" />
                  <p className="text-gray-300">Chennai, Tamil Nadu, India</p>
                </div>
                <div className="flex items-center space-x-3">
                  <ClockIcon size={18} className="text-blue-400" />
                  <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-xl pb-4 text-blue-300 relative">
                Quick Links
                <span className="absolute bottom-0 left-1/2 md:left-0 w-8 h-0.5 bg-blue-500 transform -translate-x-1/2 md:translate-x-0"></span>
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-3">
                {links.map((link, index) => (
                  <Link
                    className="group hover:text-blue-300 transition-all duration-300 flex items-center gap-3"
                    key={index}
                    to={link.path}
                    onClick={scrollToTop}
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-900 to-indigo-900 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300 shadow-md">
                      {link.icon}
                    </span>
                    <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-xl pb-4 text-blue-300 relative">
                Connect With Us
                <span className="absolute bottom-0 left-1/2 md:left-0 w-8 h-0.5 bg-blue-500 transform -translate-x-1/2 md:translate-x-0"></span>
              </h3>
              
              {/* Social Icons Grid */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center transition-all duration-300 group-hover:from-blue-600 group-hover:to-indigo-800 group-hover:scale-110 shadow-lg">
                      <span className="text-gray-300 group-hover:text-white">
                        {social.icon}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-blue-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-8 w-full">
                <h4 className="text-sm font-semibold mb-3 text-blue-300">Stay Updated</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-gray-800 text-white placeholder-gray-500 px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-4 py-2 rounded-r-md transition-colors shadow-md">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Health Insurance India. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-blue-300 transition-colors">Privacy Policy</Link>
              <span className="text-gray-700">•</span>
              <Link to="/terms" className="hover:text-blue-300 transition-colors">Terms of Service</Link>
              <span className="text-gray-700">•</span>
              <Link to="/sitemap" className="hover:text-blue-300 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-800 text-white flex items-center justify-center shadow-lg hover:from-blue-700 hover:to-indigo-900 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUpIcon size={20} />
      </button>
    </>
  );
};

export default Footer;
