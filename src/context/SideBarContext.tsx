import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type SideBarProviderProps = {
    children: ReactNode;
}
type SideBarContextType = {
    isLargeOpen: boolean;
    isSmallOpen: boolean;
    toggle: () => void;
    close: () => void;
}

const SideBarContext = createContext<SideBarContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useSideBarContext() {
    const value = useContext(SideBarContext);
    if(value === null) {
        throw new Error("useSideBarContext must be used within a SideBarProvider");
    }
    return value;
}

const SideBarProvider = ({ children }: SideBarProviderProps) => {

    const [isLargeOpen, setIsLargeOpen] = useState(true);
    const [isSmallOpen, setIsSmallOpen] = useState(false);
    
    function isScreenSmall() {
        return window.innerWidth < 1024;
    }

    useEffect(() => {
        const handler = () => {
            if(!isScreenSmall()) setIsSmallOpen(false);
        }
        window.addEventListener("resize", handler);
        return () => {
            window.removeEventListener("resize", handler);
        }
    }, [])


    function toggle() {
        if(isScreenSmall()) {
            setIsSmallOpen(prev => !prev);
        } else {
            setIsLargeOpen(prev => !prev);
        }
    }

    function close() {
        if(isScreenSmall()) {
            setIsSmallOpen(false);
        } else {
            setIsLargeOpen(false);
        }
    }

  return (
    <SideBarContext.Provider value={{ 
        isLargeOpen, 
        isSmallOpen, 
        toggle, 
        close
    }}>
        {children}
    </SideBarContext.Provider>
  )
}

export default SideBarProvider