import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Traductor",
    description: "Proyecto de una copia de google translate usando react",
    image:"/projects/Traductor.png",
    tags: ["React"],
    link: "https://google-translate-clon-six.vercel.app/",
  },
  {
    id: 2,
    title: "Carrito",
    description: "Proyecto de un carrito de compras usando react",
    image:"/projects/Carrito.png",
    tags: ["React"],
    link: "https://carrito-react-iota.vercel.app/",
  },
  {
    id: 3,
    title: "Repositorio Institucional",
    description: "Proyecto de un repositorio institucional usando Zend Framework",
    image:"/projects/Repositorioune.png",
    tags: ["Zend Framework", "PostgreSQL", "Jquery"],
    link: "https://omicron.une.edu.ve/MiUNE2/transactions/repositorioune",
  }
]

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Mis <span className="text-primary">Proyectos</span></h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Aquí puedes ver algunos de los proyectos en los que he trabajado. Cada proyecto tiene su propia descripción y los enlaces para ir a cada uno.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) =>{
                return (
                    <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="bg-secondary text-secondary-foreground border px-2 py-1 rounded-full text-xm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.link} target="_blank" className="text-foreground/80 hover:text-primary transtion-color duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>  
                    </div>
                )
            })}
        </div>

        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/Juanvivas043">
                Mira mi GitHub <ArrowRight size={16}/>
            </a>
        </div>
      </div>
    </section>
  )
}