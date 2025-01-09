import { FC, useState } from 'react';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';

import DropDownNav from './DropDownNav';
import MobNav from './MobNav';
import { Link } from 'react-router-dom';



const movies = ["Featured", "Top Rated", "Popular", "Upcoming"]
const tvSeries = ["Popular", "Airing Today", "Ongoing", "Top Rated"]


const Navbar: FC = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className=" z-20 text-white shadow-xl bg-black/80 w-full ">
            <nav className="p-4 container mx-auto flex justify-between items-center ">

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                    <Link to="/">STREAMIFY</Link>
                </h1>

                <div className="md:flex items-center hidden md:gap-6   ">
                    <p className="">Home</p>
                    <DropDownNav navItemArray={movies} navItemName='Movies' />
                    <DropDownNav navItemArray={tvSeries} navItemName='Tv Series' />


                </div>

                <div className=" md:w-72  place-items-end">
                    <div
                        className={`hidden md:flex items-center border-2 border-gray-300 rounded-full md:px-2 md:py-1 transition-all duration-300 h-10 ${isFocused ? 'shadow-lg border-blue-500 w-64' : 'border-gray-300 w-52'
                            }`}
                    >
                        <Input
                            placeholder="Search..."
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className={`text-white bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 border-none outline-none  transition-all duration-300 ease-in-out w-full`}
                            style={{ fontSize: "0.8rem" }}
                        />
                        <Search size={"1.5rem"} className=" text-gray-500" />
                    </div>

                </div>
                <div className="md:hidden">
                    <MobNav />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

