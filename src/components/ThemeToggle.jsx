import { Moon, Sun } from "lucide-react";
import { useEffect, useReducer, useRef, useState } from "react";
import { cn } from "../lib/utils";

const ThemeToggle=()=>{
    const[isDarkMode, setIsDarkMode]= useState(false);
    useEffect(()=>{
            const storedMode= localStorage.getItem("theme");
            if(storedMode=== "dark"){
                setIsDarkMode(true);
                document.documentElement.classList.add("dark");
            }else{
                setIsDarkMode(false);
                document.documentElement.classList.remove("dark")
            }
        
    },[])
   

    const toggleTheme=()=>{

        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
        }else{
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
            localStorage.setItem("theme", "dark");
        }
    }


   
    return(           
        <div  >

            <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                                                        "focuse:outlin-hidden" )}> 
                {isDarkMode ? 
                <Sun className="h-6 w-6 text-yellow-600"/> : 
                <Moon className="h-6 w-6 text-blue-600"/> }</button>

        </div>
        
        
    )

}
export default ThemeToggle;