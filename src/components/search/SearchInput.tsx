import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';

import { SearchContext } from '../context/SearchContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

type Props = {
    isFocused: boolean;
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchInput = ({ isFocused, setIsFocused }: Props) => {

    const navigate = useNavigate()
    const { inputText, setInputText } = useContext(SearchContext)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (inputText.trim().length > 1) {
            navigate(`/search?query=${encodeURIComponent(inputText)}`)
        }
    }

    return (
        <div className="hidden md:flex items-center">
            <form onSubmit={handleSearch}
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
                <Button className='bg-transparent hover:bg-transparent'><Search size={20} className="text-gray-400 ml-2" /></Button>
            </form>
        </div>
    );
};

export default SearchInput;
