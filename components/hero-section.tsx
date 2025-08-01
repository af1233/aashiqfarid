"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const roles = ["MERN Stack Developer", "Shopify App Developer", "Full Stack Engineer", "React Specialist"]
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRole = roles[currentIndex]
    if (displayedText.length < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("")
        setCurrentIndex((prev) => (prev + 1) % roles.length)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [displayedText, currentIndex])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, buttonsRef.current, socialRef.current], {
        opacity: 0,
        y: 50
      })

      // Create timeline for entrance animations
      const tl = gsap.timeline({ delay: 0.2 })
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .to(socialRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")

      // Floating animation for the entire hero section
      gsap.to(heroRef.current, {
        y: -10,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 ref={titleRef} className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aashiq Farid
              </span>
            </h1>
            <div ref={subtitleRef} className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground h-8">
              <span className="border-r-2 border-primary animate-pulse">
                {displayedText}
              </span>
            </div>
          </div>
          
          <p ref={descriptionRef} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building exceptional web applications and e-commerce solutions with modern technologies. 
            Specialized in React, Node.js, MongoDB, and Shopify app development.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="group">
              <Link href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          <div ref={socialRef} className="flex items-center justify-center space-x-6 pt-8">
            <Link 
              href="https://github.com/af1233" 
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/aashiq-farid/" 
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link 
              href="mailto:aashiqfarid64@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Aashiq,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss..."
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}