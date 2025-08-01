"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Aashiq Farid</h3>
            <p className="text-muted-foreground text-sm">
              MERN Stack & Shopify Developer creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/af1233" target="_blank" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/aashiq-farid/" target="_blank" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:aashiqfarid64@gmail.com?subject=Portfolio%20Contact&body=Hi%20Aashiq,%0A%0A" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Full Stack Development</li>
              <li>Shopify App Development</li>
              <li>E-commerce Solutions</li>
              <li>API Development</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Technologies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>React & Next.js</li>
              <li>Node.js & Express</li>
              <li>MongoDB & PostgreSQL</li>
              <li>Shopify Platform</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="#skills" className="text-muted-foreground hover:text-primary">Skills</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-primary">Projects</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center">
            © 2024 Aashiq Farid. Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  )
}