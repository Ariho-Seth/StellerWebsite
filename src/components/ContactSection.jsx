import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, X, Youtube } from "lucide-react";
import { cn } from "../lib/utils";

const ContactSection=()=>{
    return(
        <section id="contacts" className="py-24-px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:texl-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind that you want me to visualize?, Feel free to reach out to me
                    Am always ready to discuss new opportunuties.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"> <Mail /> </div>
                                <div>
                                    <h4 className="font-medium "> Email</h4>
                                     <a href="mailto:arihoseth@gmail.com" 
                                     className="text-muted-foreground hover:text-primary transition-colors">arihoseth@gmail.com</a> 
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"> <Phone /> </div>
                                <div>
                                    <h4 className="font-medium "> Phone </h4>
                                     <a href="tel:+11489443763" 
                                     className="text-muted-foreground hover:text-primary transition-colors">+11489443763</a> 
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"> <MapPin /> </div>
                                <div>
                                    <h4 className="font-medium ">Location</h4>
                                     <a  
                                     className="text-muted-foreground hover:text-primary transition-colors">Boumerdes, Algeria</a> 
                                </div>
                            </div>

                            <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect with Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/atwijukire-ariho-seth-4a7a38259/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/ariho_seth/" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="https://www.facebook.com/ArihoSeth18/" target="_blank">
                                    <Facebook />
                                </a>
                                <a href="https://x.com/ariho_seth18" target="_blank">
                                    <Twitter />
                                   
                                </a>
                                <a href="https://www.youtube.com/@ArihoSeth" target="_blank">
                                    <Youtube />
                                </a>
                                <a href="https://github.com/Ariho-Seth" target="_blank">
                                    <Github />
                                </a>
                            </div>
                    </div>  


                        </div>

                        


                    
                    </div>

                    

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name">Your Name</label>
                                <input type="text" 
                                id="name" name="name" 
                                required 
                                className={cn("w-full px-4 py-3 rounded-md border border-input bg-backgroung",
                                            "focus:outlind-hidden foucus:ring-2-color focus:ring-primary")} 
                                placeholder="Ariho Seth..."/>
                            </div>
                        </form>
                    </div>

                   
                </div>
            </div>
        </section>
    )


}
export default ContactSection;