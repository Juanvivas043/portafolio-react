import { ArrowUpIcon } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="bg-card py-12 px-4 relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center"> 
            <p className="text-sm font-semibold text-muted-foreground">
                &copy; {new Date().getFullYear()} Juan Vivas. Todos los derechos reservados.
            </p>

            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUpIcon size={20}/>
            </a>
        </footer>
    )
}