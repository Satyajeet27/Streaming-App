import { Link } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'

const navMenu: string[] = ["Home", "Movies", "Tv Series"]
const MobNav = () => {
    return (
        <Sheet>
            <SheetTrigger><Menu /></SheetTrigger>
            <SheetContent className='w-full border-none bg-custom-blue/80 text-white'>
                <div className="flex flex-col text-lg w-full">
                    {
                        navMenu.map((menu, index) => (
                            <Link to={`/${menu == "Home" ? "" : menu === "Movies" ? "movies" : menu === "Tv Series" ? "tv" : "/"}`} className='hover:bg-slate-800/85 text-center  mt-4 p-4 rounded-lg' key={index}>{menu}</Link>
                        ))
                    }
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobNav