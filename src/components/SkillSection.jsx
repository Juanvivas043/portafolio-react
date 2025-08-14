import { useState } from 'react'

const skills = [
  {
    name: 'HTML/CSS',
    level: 60,
    category: 'frontend',
  },
  {
    name: 'JavaScript',
    level: 60,
    category: 'frontend',
  },
  {
    name: 'React',
    level: 50,
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    level: 50,
    category: 'frontend',
  },
  {
    name: 'Django',
    level: 20,
    category: 'backend',
  },
  {
    name: 'PHP',
    level: 70,
    category: 'backend',
  },
  {
    name: 'PostgreSQL',
    level: 80,
    category: 'backend',
  },
  {
    name: 'Prisma',
    level: 10,
    category: 'backend',
  },
  {
    name: 'GitHub',
    level: 50,
    category: 'herramientas',
  },
  {
    name: 'Postman',
    level: 40,
    category: 'herramientas',
  },
]

const categories = [
    {
        name: 'all',
        label: 'Todas',
    },
    {
        name: 'frontend',
        label: 'Frontend',
    },
    {
        name: 'backend',
        label: 'Backend',
    },
    {
        name: 'herramientas',
        label: 'Herramientas',
    },
]

export const SkillSection = () => {
    const [activeCategory, setActiveCategory] = useState('all')
    const filteredSkills = activeCategory === 'all' ? skills : skills.filter((skill) => skill.category === activeCategory)

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
                    Mis <span className="text-primary">Habilidades</span>
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        onClick={() => setActiveCategory(category.name)}
                        className={`px-5 py-2 rounded-full capitalize transition-colors duration-300
                            ${activeCategory === category.name
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-secondary/70 text-foreground hover:bg-secondary'
                            }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill) => (
                    <div key={skill.name} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>

                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounder-full origin-left animation-[grow_1.5s_ease-out]"
                            style={{
                                width: `${skill.level}%`,
                            }}/>
                        </div>

                        <div className="text-right">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}