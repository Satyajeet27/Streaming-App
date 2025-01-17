import { Link } from "react-router-dom";
import SearchInput from "../search/SearchInput";
import { useState } from "react";

const Footer = () => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Brand Logo and Description */}
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold">Streamify</h1>
                    <p className="text-sm text-gray-400 mt-2">
                        Your ultimate destination for movies, shows, and entertainment.
                    </p>
                </div>
                <div className="md:hidden">
                    <SearchInput isFocused={isFocused} setIsFocused={setIsFocused} />
                </div>
                {/* Navigation Links */}
                <div className="flex gap-6">
                    <ul className="text-sm flex items-center flex-col md:flex-row gap-4">
                        <li>
                            <Link to="/about" className="hover:text-gray-300">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-300">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy" className="hover:text-gray-300">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" className="hover:text-gray-300">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="flex gap-4">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>

            {/* Divider and Copyright */}
            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Streamify. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
