import { useState } from "react";
import { cn } from "../lib/utils";

const skills= [
    // Front-End.
    {name:"HTML & CSS", level: 74, category:"Front-End"},
    {name:"React JS", level: 52, category:"Front-End"},
    {name:"Vanilla Javascript", level: 74, category:"Front-End"},

    // Back-End
    {name:"Java SE", level: 85, category:"Back-End"},
    {name:"Spring MVC", level: 70, category:"Back-End"},
    {name:"Hibernate", level: 89, category:"Back-End"},
    {name:"Servlets and JSPs", level: 84, category:"Back-End"},
    {name:"SQL", level: 75, category:"Back-End"},
    
    // Tools
    {name:"Git-hub", level: 85, category:"Tools"},
    {name:"Eclipse", level: 94, category:"Tools"},
    {name:"Intellij IDEA", level: 83, category:"Tools"},
];

const categories =["All", "Front-End", "Back-End", "Tools"];

const SkillSection=()=>{
    const[activeCategory, setActiveCategory]= useState("All");
    const filteredSkills= skills.filter(skill =>(
        activeCategory==="All"|| skill.category=== activeCategory
    ))
    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx:auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key)=>(
                        <button key={key} 
                            onClick={()=> setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" :
                                "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}>
                            {category}</button>
                       
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSkills.map(skill =>(
                        <div className="bg-card p-6 rounded-lg shadow-xs card-hover " key={skill.id}>
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                                style={{width: skill.level +"%"}}/>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>

                        </div>
                  ))}
                </div>
            </div>

        </section>
    )

}
export default SkillSection;