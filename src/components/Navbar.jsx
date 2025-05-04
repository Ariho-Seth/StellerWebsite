
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { useState, useEffect } from "react";

const Navbar = () => {
    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About Me", href: "#aboutMe" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contacts", href: "#contacts" },
    ]
    const [isScrolled, setIsScrolled] = useState(false);
    const[isMenuOPen, setIsMenuOPen]= useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);

        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn("fixwd w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a className="text-xl fold-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Ariho Seth</span> Welcomes You.
                    </span>
                </a>

                {/* Desktop Navbar*/}
                <div className="hidden md:flex space-x-8">
                    {navItems.map(item => (
                        <a href={item.href} key={item.id} className="text-foreround/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Navbar*/}

                <button onClick={()=> setIsMenuOPen((prev)=> !prev)}
                        className="md:hidden p-2 text-foreground z-50"
                    >
                    {isMenuOPen ? <X />: <Menu /> }
                </button>
                <div className={cn("fixed inset-0 bg background/95 backdrop-blur-md z-40 flex  flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOPen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-event-none"
                )} >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map(item => (
                            <a href={item.href} key={item.id} 
                            className="text-foreround/80 hover:text-primary transition-colors duration-300"
                            onClick={()=> setIsMenuOPen(false)}
                            >
                                {item.name}
                            </a>
                        ))};
                    </div>

                </div>



            </div>

        </nav>
    )


}
export default Navbar;