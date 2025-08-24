import { Briefcase, Code, User } from 'lucide-react'


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary">mí</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                           Desarrollador web Aprendiz 
                        </h3>

                        <p className="text-muted-foreground ">
                            Mi experiencia dentro del desarrollo web comienza en el departamento de tecnología de la Universidad Nueva Esparta. 
                            Mi trabajo se centró en el desarrollo, mantenimiento y soporte con PHP, PostgreSQL y Zend Framework, además de utilizar jQuery para interfaces dinámicas. 
                        </p>

                        <p className="text-muted-foreground ">
                           Actualmente, estoy ampliando mis habilidades con un enfoque en las tecnologías de vanguardia para el desarrollo web. 
                            Dominando herramientas como React, Next.js, Prisma y Tailwind CSS.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Contáctame
                            </a>
                            <a href="../assets/CV Juan.pdf.pdf" target="_blank" 
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">

                                Descargar CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left '>
                                    <h4 className='font-semibold text-lg'>
                                        Desarrollo Web
                                    </h4>
                                    <p className='text-muted-foreground'>
                                        Creo sitios web responsives y aplicaciones web con frameworks modernos
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left '>
                                    <h4 className='font-semibold text-lg'>
                                        Diseño UI/UX
                                    </h4>
                                    <p className='text-muted-foreground'>
                                        Diseño interfaces de usuario intuitivas y atractivas
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left '>
                                    <h4 className='font-semibold text-lg'>
                                        Manejo de Proyectos
                                    </h4>
                                    <p className='text-muted-foreground'>
                                        Planifico y ejecuto proyectos de desarrollo usando metodologías ágiles

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}