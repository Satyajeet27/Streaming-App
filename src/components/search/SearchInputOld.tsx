// import React, { ChangeEvent, useEffect, useState } from 'react'
// import { Input } from '../ui/input'
// import { Search } from 'lucide-react'
// import { useGetMoviesandTvShowsBySearchQuery } from '@/redux/api/api';
// import { useNavigate } from 'react-router-dom';

// type Props = {
//     isFocused: boolean;
//     setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
// }
// const SearchInput = ({ isFocused, setIsFocused }: Props) => {
//     const [inputText, setInputText] = useState("")
//     const navigate = useNavigate()
//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setInputText(e.target.value)
//     }
//     useEffect(() => {
//         const timeId = setTimeout(() => {
//             navigate("/search")
//         }, 1500)
//         return () => clearTimeout(timeId)
//     }, [inputText])
//     return (
//         <div className="hidden md:flex items-center">
//             <div
//                 className={`flex items-center border-2 rounded-full px-3 py-2 transition-all duration-300 h-10 ${isFocused
//                     ? "shadow-lg border-blue-500 w-64"
//                     : "border-gray-600 w-52"
//                     }`}
//             >
//                 <Input
//                     placeholder="Search..."
//                     onFocus={() => setIsFocused(true)}
//                     onBlur={() => setIsFocused(false)}
//                     value={inputText}
//                     onChange={handleChange}
//                     className="bg-transparent text-white placeholder-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-none outline-none w-full text-sm"
//                 />
//                 <Search size={20} className="text-gray-400 ml-2" />
//             </div>
//         </div>
//     )
// }

// export default SearchInput

import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';

type Props = {
    isFocused: boolean;
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchInput = ({ isFocused, setIsFocused }: Props) => {
    // const [inputText, setInputText] = useState('');
    const [debouncedText, setDebouncedText] = useState('');
    const navigate = useNavigate();
    const { inputText, setInputText } = useContext(SearchContext)

    // Update the debouncedText state after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedText(inputText);
        }, 1000);

        return () => clearTimeout(timer); // Clear timeout if inputText changes
    }, [inputText]);

    // Navigate to the search page whenever debouncedText changes
    useEffect(() => {
        if (debouncedText.trim()) {
            navigate(`/search?query=${encodeURIComponent(debouncedText)}`);
        }
    }, [debouncedText, navigate]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    return (
        <div className="hidden md:flex items-center">
            <div
                className={`flex items-center border-2 rounded-full px-3 py-2 transition-all duration-300 h-10 ${isFocused ? 'shadow-lg border-blue-500 w-64' : 'border-gray-600 w-52'
                    }`}
            >
                <Input
                    placeholder="Search..."
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={inputText}
                    onChange={handleChange}
                    className="bg-transparent text-white placeholder-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-none outline-none w-full text-sm"
                />
                <Search size={20} className="text-gray-400 ml-2" />
            </div>
        </div>
    );
};

export default SearchInput;
