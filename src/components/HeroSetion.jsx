import { ArrowDown } from "lucide-react";

const HeroSection=()=>{
    return(
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi Friends, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Ariho </span>
                    <span className="text-gradient opacity-0 ml-2 animate-fade-in-delay-2">Seth</span>
                    </h1>
                    <p className="text-lg md:xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I create steller web experiences with modern technologies.
                        Specializing in front-end development, I build interfaces that are both beautiful and functional
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">View My Work</a>
                    </div>
                </div>
            </div>
            <div  className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce mb-10">
              <a href="#aboutMe">  
                <span className="text-sm text-muted-foreground ">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
                </a>
            </div>
        </section>
    )

}
export default HeroSection;