
const ProjectSection=()=>{
    const projects=[
        {id:1,
         title:"Orbit Analytics Dashbord",
         description:"Interactive Analytics Dashboard with data visualization and sorting capabilities.",
         image:"/projects/project1.png",
         tags:["TypeScript", "D3.js", "Next.js"],
         demoUrl:"#",
         githubUrl:"#"
        },
        {   id:2,
            title:"SaaS Landing Page",
            description:"A beautiful landing page App using React and Tailwind",
            image:"/projects/project2.png",
            tags:["React", "Tailwind", "Supabase"],
            demoUrl:"#",
            githubUrl:"#"
           },
           {id:3,
            title:"E-commerce Platform",
            description:"Full featured e-commerce platform with user authentication and payment processing.",
            image:"/projects/project3.png",
            tags:["React", "Node.js", "Stripe"],
            demoUrl:"#",
            githubUrl:"#"
           },
    ]
    return(
        <section className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted 
                    with attention to detail, performation and user experience

                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project =>(
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>

                            </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag =>(
                                    <span key={tag.id} 
                                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )

}
export default ProjectSection;