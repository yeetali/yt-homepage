import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import { useState } from "react";

const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
        <div className={`items-center gap-4 ${showFullWidthSearch ? "md:flex hidden" : "flex"}`}>
            <Button variant="ghost" size="icon">
                <Menu />
            </Button>
            <a href="/">
            <img src={logo} alt="Alitube Logo" className="h-6" /></a>
        </div>
        <form className={`gap-4 grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
          <Button size="icon" variant="ghost" className={`shrink-0 ${showFullWidthSearch ? "md:hidden" : "hidden"}`} type="button" onClick={() => setShowFullWidthSearch(false)}>
            <ArrowLeft />
          </Button>
          <div className="flex grow max-w-150">
            <input 
              type="search" 
              placeholder="Search" 
              className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none" />
            <Button className="py-2 px-5 rounded-r-full border-secondary-border border border-l-0 shrink-0">
              <Search />
            </Button>
          </div>
          <Button size="icon" className="shrink-0" type="button">
            <Mic />
          </Button>
        </form>
        <div className={`shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden md:flex" : "flex"}`}>
          <Button onClick={() => setShowFullWidthSearch(true)} size="icon" variant="ghost" className="md:hidden">
            <Search />
          </Button>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Mic />
          </Button>
          <Button size="icon" variant="ghost">
            <Upload />
          </Button>
          <Button size="icon" variant="ghost">
            <Bell />
          </Button>
          <Button size="icon" variant="ghost">
            <User />
          </Button>
        </div>
    </div>
  )
}

export default PageHeader