import {Instagram, Linkedin, Mail, MapPin, Phone, Twitch, Twitter, Youtube, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const {toast} = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setIsSubmitting(true)

        setTimeout(() => {
            toast({
                title: "Mensaje Enviado",
                description: "Tu mensaje ha sido enviado, te responderé a la brevedad.",
            })
            setIsSubmitting(false)
        }, 1500)
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                   Mi <span className="text-primary">Contacto</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    ¿Si tienes algun proyecto en mente o quieres saludar? No dudes en ponerte en contacto conmigo.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Información Contacto</h3>

                        <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:juanvivas043@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">juanvivas043@gmail.com</a>
                            </div>
                        </div>
                        </div>

                        <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Teléfono</h4>
                                <a href="tel:+584142895294" className="text-muted-foreground hover:text-primary transition-colors">+58 (414) 289-5294</a>
                            </div>
                        </div>
                        </div>

                        <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Ubicación</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">Caracas, Venezuela</a>
                            </div>
                        </div>
                        </div>

                        <div className="pt-8">
                        <h4 className="font-medium mb-4">Redes Sociales</h4>
                        <div className="flex flex-column space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/juan-vivas-229606231/">
                                <Linkedin/>
                            </a>
                            <a href="https://www.twitch.tv/juandovx">
                                <Twitch/>
                            </a>
                            <a href="https://x.com/Juan24529158">
                                <Twitter/>
                            </a>
                            <a href="https://www.instagram.com/">
                                <Instagram/>
                            </a>
                            <a href="https://www.youtube.com/@juanvivas4775">
                                <Youtube/>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Enviame un Mensaje</h3>

                        <form action="" className="space-y-6">
                            <div>
                                <label 
                                htmlFor="name" 
                                className="block text-sm font-medium mb-2">
                                    Tu Nombre
                                </label>
                                    <input type="text" id="name" name="name" required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Juan Vivas"/>
                            </div>
                            <div>
                                <label 
                                htmlFor="email" 
                                className="block text-sm font-medium mb-2">
                                    Tu Email
                                </label>
                                <input type="email" id="email" name="email" required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="juanvivas043@gmail.com"/>
                            </div>
                            <div>
                                <label 
                                htmlFor="message" 
                                className="block text-sm font-medium mb-2">
                                    Tu Mensaje
                                </label>
                                <textarea id="message" name="message" required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Escribe tu mensaje aquí...">
                                </textarea>
                            </div>

                            <button 
                            type="submit" 
                            disabled={isSubmitting}  
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                            )}>
                               {isSubmitting ? "Enviando..." : "Enviar Mensaje"} <Send size={15}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}