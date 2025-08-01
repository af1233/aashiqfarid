"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Ant Design", level: 85 }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Azure AD", level: 75 },
      { name: "GraphQL", level: 70 }
    ]
  },
  {
    title: "Shopify & E-commerce",
    skills: [
      { name: "Shopify Apps", level: 90 },
      { name: "Shopify API", level: 85 },
      { name: "Liquid Templates", level: 80 },
      { name: "Store Setup", level: 90 },
      { name: "Payment Integration", level: 85 }
    ]
  }
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
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

      // Cards animation with stagger
      gsap.fromTo(cardsRef.current?.children || [],
        { opacity: 0, y: 50, rotationY: 15 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
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

      // Progress bars animation
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          gsap.fromTo(`.progress-${categoryIndex}-${skillIndex}`,
            { width: "0%" },
            {
              width: `${skill.level}%`,
              duration: 1.5,
              ease: "power2.out",
              delay: 0.3 + (skillIndex * 0.1),
              scrollTrigger: {
                trigger: `.skill-card-${categoryIndex}`,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
              }
            }
          )
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className={`skill-card-${categoryIndex} hover:shadow-lg transition-shadow duration-300`}>
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div 
                        className={`progress-${categoryIndex}-${skillIndex} h-full bg-primary rounded-full transition-all duration-300`}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}