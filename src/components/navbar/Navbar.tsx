import { FC, useState } from "react";

// import DropDownNav from "./DropDownNav";
import MobNav from "./MobNav";
import { Link } from "react-router-dom";
import SearchInput from "../search/SearchInput";


// const movies = ["Featured", "Top Rated", "Popular", "Upcoming"];
// const tvSeries = ["Popular", "Airing Today", "Ongoing", "Top Rated"];

const Navbar: FC = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <header className="z-20 text-white shadow-md bg-black/80  w-full fixed top-0 left-0">
            <nav className="p-3 container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg hover:scale-105 transition-transform duration-300">
                    <Link to="/">STREAMIFY</Link>
                </h1>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="/"
                        className="font-light hover:scale-110 transition-all ease-in-out duration-300 hover:text-cyan-400"
                    >
                        Home
                    </Link>
                    <Link
                        to="/movies"
                        className="font-light hover:scale-110 transition-all ease-in-out duration-300 hover:text-cyan-400"
                    >
                        Movies
                    </Link>
                    <Link
                        to="/tv"
                        className="font-light hover:scale-110 transition-all ease-in-out duration-300 hover:text-cyan-400"
                    >
                        Tv Shows
                    </Link>
                    {/* <DropDownNav navItemArray={movies} navItemName="Movies" />
                    <DropDownNav navItemArray={tvSeries} navItemName="TV Series" /> */}
                </div>

                {/* Search Bar */}
                {/* <div className="hidden md:flex items-center">
                    <div
                        className={`flex items-center border-2 rounded-full px-3 py-2 transition-all duration-300 h-10 ${isFocused
                            ? "shadow-lg border-blue-500 w-64"
                            : "border-gray-600 w-52"
                            }`}
                    >
                        <Input
                            placeholder="Search..."
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="bg-transparent text-white placeholder-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-none outline-none w-full text-sm"
                        />
                        <Search size={20} className="text-gray-400 ml-2" />
                    </div>
                </div> */}
                <div className="hidden md:block">
                    <SearchInput setIsFocused={setIsFocused} isFocused={isFocused} />
                </div>
                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <MobNav />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
