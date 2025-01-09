// import { ChevronDown } from "lucide-react"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"

// type Props = {
//     navItemName: string;
//     navItemArray: string[]
// }
// const DropDownNav = ({ navItemArray, navItemName }: Props) => {
//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger>
//                 <div className="flex gap-1 items-center text-nowrap">
//                     {navItemName} <span><ChevronDown /></span>
//                 </div>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="bg-transparent/75 border-none text-white">
//                 {
//                     navItemArray.map((movie, index) => (
//                         <DropdownMenuItem key={index}><span className=' me-8 py-1'>{movie}</span></DropdownMenuItem>
//                     ))
//                 }
//             </DropdownMenuContent>

//         </DropdownMenu>
//     )
// }

// export default DropDownNav

import { ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type Props = {
    navItemName: string;
    navItemArray: string[];
};

const DropDownNav = ({ navItemArray, navItemName }: Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-1 cursor-pointer  font-light text-white hover:text-cyan-400 transition-colors duration-300">
                    {navItemName} <ChevronDown size={18} className="text-cyan-400" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="bg-gray-800/90 shadow-lg rounded-lg border border-gray-700 text-white overflow-hidden mt-2"
            >
                {navItemArray.map((item, index) => (
                    <DropdownMenuItem
                        key={index}
                        className="px-4 py-2 hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer transition-colors duration-300"
                    >
                        {item}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropDownNav;
