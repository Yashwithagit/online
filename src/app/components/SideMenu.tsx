
import { IoIosSearch } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineLanguage } from "react-icons/md";

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Search: "/search",
  Account: "/account",
  Cart: "/cart",
}

const SideMenu = () => {
  

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-12 mx-auto border-b duration-200  border-ui-border-base">
        <nav className="content-container px-4 flex items-center justify-between w-full h-full">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full flex items-center m-1.5">
             <h1>IntrTrainee</h1>
            </div>
          </div>

          <div className="flex items-center h-full">
            <ul className='flex gap-14'>
           <li>iPhone</li>
           <li>Parts</li>
           <li>Auctions</li>
           <li>Events</li>
           <li>About us</li>
           </ul>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
           
            <ul className='flex gap-5'>
           <li><IoIosSearch /></li>
           <li><BsBag /></li>
           <li><FaRegUser /></li>
           <li><MdOutlineLanguage /></li>
           </ul>
             </div>
          
        </nav>
      </header>
    </div>
  )
}

export default SideMenu
