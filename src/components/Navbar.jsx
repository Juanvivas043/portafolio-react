import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"


const navItems = [
    {
        name: 'Home',
        href: '#hero'
    },
    {
        name: 'Sobre Mi',
        href: '#about'
    },
    {
        name: 'Habilidades',
        href: '#skills'
    },
    {
        name: 'Proyectos',
        href: '#projects'
    },
    {
        name: 'Contacto',
        href: '#contact'
    }
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setMobileIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll= () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
      <nav className={cn("fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-sm shadow-xs" : "py-5"
      )}>
        <div className="container flex items-center justify-between">

            {/* Logo */}
            <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                <span className="relative z-10 ">
                    <span className="text-glow text-foreground"> Juan Vivas </span> Portafolio
                </span>
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile Menu */}

            <button 
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMobileMenuOpen ? "Close Menu": "Open Menu"}
            onClick={() => setMobileIsMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center", 
                "transition-all divide-neutral-300 md:hidden", 
                isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <ul className="flex flex-col space-y-8 text-xl">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a href={item.href}
                       onClick={() => setMobileIsMenuOpen(!isMobileMenuOpen)}
                       className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
            </div>

        </div>
      </nav>
    )
}
