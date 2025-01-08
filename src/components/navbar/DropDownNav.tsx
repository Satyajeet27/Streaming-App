import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"

type Props = {
    navItemName: string;
    navItemArray: string[]
}
const DropDownNav = ({ navItemArray, navItemName }: Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex gap-1 items-center text-nowrap">
                    {navItemName} <span><ChevronDown /></span>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-transparent/75 border-none text-white">
                {
                    navItemArray.map((movie, index) => (
                        <DropdownMenuItem key={index}><span className=' me-8 py-1'>{movie}</span></DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>

        </DropdownMenu>
    )
}

export default DropDownNav