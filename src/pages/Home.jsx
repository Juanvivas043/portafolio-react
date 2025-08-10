import { StarBackground } from "@/components/StarBackground"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutMe } from "@/components/AboutMe"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>

        <StarBackground/>

        <Navbar/>

        <main>
          <HeroSection/>
          <AboutMe/>
        </main>
    </div>
  )
}