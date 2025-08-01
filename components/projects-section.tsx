"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "Store Pickup by Genie Apps",
    description: "A comprehensive Shopify app for store pickup management, enabling customers to select pickup locations and manage orders efficiently.",
    image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Shopify API", "Polaris", "Tailwind CSS", "React", "Node.js", "MongoDB"],
    github: "#",
    live: "https://apps.shopify.com/store-pickup-by-genie-apps"
  },
  {
    title: "Agora Amazon Affiliate Tool",
    description: "Advanced Shopify app for Amazon affiliate marketing, helping store owners integrate and manage Amazon products seamlessly.",
    image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Shopify API", "Polaris", "Tailwind CSS", "React", "Node.js", "Express.js", "MongoDB"],
    github: "#",
    live: "https://apps.shopify.com/agora-amazon-affiliate-tool"
  },
  {
    title: "Beast Nutrition Pakistan",
    description: "Complete e-commerce store built from scratch for nutrition supplements, featuring custom design, payment integration, and inventory management.",
    image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
    github: "#",
    live: "https://beastnutritionpk.com/"
  },
  {
    title: "Moxx Digital Agency",
    description: "Modern digital agency website built with Next.js, featuring responsive design, smooth animations, and optimized performance.",
    image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "#",
    live: "https://moxx.co/"
  },
  {
    title: "Trova Health Platform",
    description: "Comprehensive healthcare platform with patient management, appointment scheduling, and secure authentication system.",
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    github: "#",
    live: "https://www.trova.health/"
  },
  {
    title: "HRMS - Seazen Group",
    description: "Enterprise Human Resource Management System with Azure authentication, employee management, and comprehensive reporting.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Azure AD", "Node.js", "MongoDB", "Express.js"],
    github: "#",
    live: "https://essdev.seazengroup.com"
  }
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Project cards animation with stagger
      gsap.fromTo(gridRef.current?.children || [],
        { 
          opacity: 0, 
          y: 60,
          scale: 0.8,
          rotationX: 15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          stagger: {
            amount: 1.2,
            from: "start"
          },
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Hover animations for project cards
      const cards = gridRef.current?.children || []
      Array.from(cards).forEach((card) => {
        const cardElement = card as HTMLElement
        
        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          })
        })
        
        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I've mastered
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button size="sm" asChild className="w-full">
                  <Link href={project.live} target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}