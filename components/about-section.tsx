"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Expert in MERN stack with 5+ years of experience building scalable applications and award-winning projects"
  },
  {
    icon: Globe,
    title: "Shopify Specialist",
    description: "Published Shopify apps with thousands of active users, custom themes, and complete store setups"
  },
  {
    icon: Database,
    title: "Backend Architecture",
    description: "Enterprise-level backend systems with Azure authentication, MongoDB, and scalable API design"
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Modern UI/UX with Tailwind CSS, Ant Design, and mobile-first responsive design principles"
  }
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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

      // Content animation
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Cards stagger animation
      gsap.fromTo(cardsRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with expertise in modern web technologies and e-commerce solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Hello! I'm Aashiq Farid</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer specializing in the MERN stack and Shopify app development. 
                With over 2 years of experience, I've developed multiple successful Shopify apps, built enterprise-level 
                applications, and helped businesses transform their ideas into powerful digital solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans from creating published Shopify apps used by thousands of merchants to developing 
                healthcare platforms, HRMS systems, and e-commerce solutions. I've worked on projects ranging from 
                startup MVPs to enterprise applications, always focusing on scalable architecture and exceptional user experience.
              </p>
              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm font-medium text-primary mb-1">🏆 Notable Achievement</p>
                <p className="text-sm text-muted-foreground">
                  Recipient of National Cultural Award for Saudi Arabia project - a React.js and Node.js application 
                  built with Tailwind CSS and Ant Design.
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold mb-3">Key Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js", "Node.js", "MongoDB", "Express.js", 
                  "Shopify Apps", "Next.js", "TypeScript", "Tailwind CSS",
                  "Azure AD", "Ant Design", "Shopify API", "GraphQL", "Remix.js", "Prisma", "Vercel"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}