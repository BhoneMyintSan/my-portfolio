"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { WordRotate } from "@/components/ui/typewriter";
import { Spotlight, GradientMesh, DotPattern } from "@/components/ui/spotlight";
import { FloatingDock } from "@/components/ui/floating-dock";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { TiltCard } from "@/components/ui/tilt-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { 
  FadeIn, 
  FadeInView, 
  SlideInLeft 
} from "@/components/animations";
import { Mail, MapPin, Github, Linkedin, ExternalLink, Download, Briefcase, Sparkles, User, FolderOpen, Code, Home, GraduationCap, Languages, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const { personal, socials, skills, projects, experience, education, languages, softSkills } = portfolioData;

  // Dock navigation items
  const dockItems = [
    { title: "Home", icon: <Home className="h-4 w-4" />, href: "#" },
    { title: "About", icon: <User className="h-4 w-4" />, href: "#about" },
    { title: "Projects", icon: <FolderOpen className="h-4 w-4" />, href: "#projects" },
    { title: "Experience", icon: <Briefcase className="h-4 w-4" />, href: "#experience" },
    { title: "Contact", icon: <Mail className="h-4 w-4" />, href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden cursor-none md:cursor-none">
      {/* Custom Cursor (desktop only) */}
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Background Effects */}
      <GradientMesh />
      <DotPattern className="opacity-50" />

      {/* Floating Dock Navigation */}
      <FloatingDock items={dockItems} />

      <main className="max-w-5xl mx-auto px-6">
        {/* Hero Section with Spotlight */}
        <Spotlight className="min-h-screen flex items-center">
          <section className="py-20 md:py-32 relative w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
              {/* Left side - Text content */}
              <div className="space-y-8 flex-1">
              <FadeIn delay={0.1}>
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                  animate={{ boxShadow: ["0 0 20px rgba(var(--primary), 0.1)", "0 0 40px rgba(var(--primary), 0.2)", "0 0 20px rgba(var(--primary), 0.1)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Available for work</span>
                </motion.div>
              </FadeIn>
              
              <div className="space-y-4">
                <FadeIn delay={0.2}>
                  <p className="text-muted-foreground text-lg">Hello, I&apos;m</p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                      {personal.name}
                    </span>
                  </h1>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className="text-2xl md:text-3xl text-muted-foreground flex flex-wrap items-center gap-2">
                    I build{" "}
                    <span className="text-primary font-semibold">
                      <WordRotate words={personal.roles} />
                    </span>
                  </p>
                </FadeIn>
              </div>
              
              <FadeIn delay={0.5}>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  {personal.bio}
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <MagneticButton>
                    <Button asChild size="lg" className="shadow-lg shadow-primary/25 rounded-full px-8">
                      <a href={`mailto:${personal.email}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Get in Touch
                      </a>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="outline" size="lg" asChild className="rounded-full px-8">
                      <a href={personal.resumeUrl} download="Bhone-Myint-San-CV.pdf">
                        <Download className="mr-2 h-4 w-4" />
                        Download CV
                      </a>
                    </Button>
                  </MagneticButton>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="flex items-center gap-6 pt-4">
                  {socials.github && (
                    <MagneticButton strength={0.5}>
                      <a 
                        href={socials.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                    </MagneticButton>
                  )}
                  {socials.linkedin && (
                    <MagneticButton strength={0.5}>
                      <a 
                        href={socials.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    </MagneticButton>
                  )}

                  <span className="text-muted-foreground text-sm flex items-center gap-2 ml-2">
                    <MapPin className="h-4 w-4" />
                    {personal.location}
                  </span>
                </div>
              </FadeIn>

              </div>

              {/* Right side - Profile Picture */}
              <FadeIn delay={0.8}>
                <div className="flex justify-center md:justify-end">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Animated gradient ring */}
                    <motion.div
                      className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-75 blur-lg"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    {/* Outer ring */}
                    <div className="relative p-[3px] rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                      {/* Inner container */}
                      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
                        <Image
                          src={personal.avatar}
                          alt={personal.name}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-1 -left-1 w-4 h-4 bg-purple-500 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                  </motion.div>
                </div>
              </FadeIn>
            </div>

            {/* Scroll indicator */}
            <FadeIn delay={1}>
              <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
                  <motion.div 
                    className="w-1 h-2 bg-muted-foreground/50 rounded-full"
                    animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </FadeIn>
          </section>
        </Spotlight>

        {/* Skills Section - Infinite Moving Cards */}
        <section id="about" className="py-20">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Technologies I work with to bring ideas to life
              </p>
            </div>
          </FadeInView>
          
          <InfiniteMovingCards 
            items={skills.map(skill => ({ name: skill.name, icon: skill.icon }))} 
            direction="left" 
            speed="slow" 
          />
          <InfiniteMovingCards 
            items={skills.map(skill => ({ name: skill.name, icon: skill.icon })).reverse()} 
            direction="right" 
            speed="slow"
            className="mt-4" 
          />
        </section>

        {/* Education Section */}
        <section className="py-16">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                My academic background
              </p>
            </div>
          </FadeInView>
          
          <div className="max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <FadeInView key={index}>
                <motion.div 
                  className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-6">
                    <motion.div 
                      className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/25"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="h-8 w-8" />
                    </motion.div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-bold text-xl">{edu.institution}</h3>
                      <p className="text-primary font-semibold">{edu.degree}</p>
                      <p className="text-muted-foreground">Major in {edu.major}</p>
                      <div className="flex items-center gap-4 pt-2">
                        <Badge variant="outline" className="rounded-full">{edu.duration}</Badge>
                        <Badge className="bg-primary/10 text-primary border-0 rounded-full">{edu.status}</Badge>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </section>

        {/* Languages & Soft Skills Section */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Languages */}
            <div>
              <FadeInView>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Languages className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold">Languages</h3>
                </div>
              </FadeInView>
              
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <FadeInView key={lang.name}>
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-sm text-muted-foreground">{lang.level}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.proficiency}%` }}
                          transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  </FadeInView>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <FadeInView>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Brain className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold">Soft Skills</h3>
                </div>
              </FadeInView>
              
              <div className="space-y-5">
                {softSkills.map((skill, index) => (
                  <FadeInView key={skill.name}>
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-primary font-semibold">{skill.proficiency}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, 
                              hsl(${280 - (index * 15)}, 80%, 60%) 0%, 
                              hsl(${260 - (index * 15)}, 70%, 50%) 100%)`
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="max-w-md mx-auto" />

        {/* Projects Section - Bento Grid */}
        <section id="projects" className="py-20">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A selection of my recent work and side projects
              </p>
            </div>
          </FadeInView>
          
          <BentoGrid>
            {projects.map((project, index) => (
              <TiltCard key={project.title} className={project.featured ? "md:col-span-2" : ""}>
                <BentoCard
                  title={project.title}
                  description={project.description}
                  icon={<Code className="h-5 w-5" />}
                  className="h-full"
                  href={project.liveUrl || project.githubUrl}
                  cta={project.liveUrl ? "View Live" : "View Code"}
                  media={
                    project.image ? (
                      <div className={`relative w-full ${project.featured ? "h-56" : "h-48"} rounded-xl overflow-hidden border border-border/50`}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 768px) 33vw, 100vw"
                        />
                      </div>
                    ) : null
                  }
                >
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-0 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge 
                        variant="secondary" 
                        className="text-xs px-2 py-0.5 bg-muted text-muted-foreground border-0"
                      >
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild 
                        className="h-8 px-3 rounded-full text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3.5 w-3.5 mr-1.5" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="h-8 px-3 rounded-full text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.pdfUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="h-8 px-3 rounded-full text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
                      >
                        <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                          PDF
                        </a>
                      </Button>
                    )}
                  </div>
                </BentoCard>
              </TiltCard>
            ))}
          </BentoGrid>
        </section>

        <Separator className="max-w-md mx-auto" />

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Experience</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                My professional journey so far
              </p>
            </div>
          </FadeInView>
          
          <div className="max-w-2xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <SlideInLeft key={index} delay={index * 0.15}>
                <motion.div 
                  className="flex gap-6 group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 hover:bg-card transition-all"
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Briefcase className="h-6 w-6" />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{exp.position}</h3>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground/70">{exp.duration}</p>
                    <p className="text-sm text-muted-foreground pt-2 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              </SlideInLeft>
            ))}
          </div>
        </section>

        <Separator className="max-w-md mx-auto" />

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <FadeInView>
            <div className="text-center max-w-2xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <Mail className="h-8 w-8 text-primary" />
              </motion.div>
              
              <h2 className="text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <MagneticButton>
                <Button asChild size="lg" className="shadow-lg shadow-primary/25 rounded-full px-12 py-6 text-lg">
                  <a href={`mailto:${personal.email}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    {personal.email}
                  </a>
                </Button>
              </MagneticButton>

              <div className="flex justify-center gap-6 mt-12">
                {socials.github && (
                  <MagneticButton strength={0.5}>
                    <a 
                      href={socials.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-foreground transition-colors p-3 rounded-full hover:bg-muted"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  </MagneticButton>
                )}
                {socials.linkedin && (
                  <MagneticButton strength={0.5}>
                    <a 
                      href={socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-foreground transition-colors p-3 rounded-full hover:bg-muted"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </MagneticButton>
                )}

              </div>
            </div>
          </FadeInView>
        </section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative py-16 mb-24"
        >
          {/* Top border with gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="max-w-4xl mx-auto">
            {/* Main footer content */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Brand */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  {personal.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {personal.title}
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Quick Links
                </h4>
                <nav className="flex flex-col space-y-2">
                  {[
                    { name: "Home", href: "#" },
                    { name: "About", href: "#about" },
                    { name: "Projects", href: "#projects" },
                    { name: "Experience", href: "#experience" },
                    { name: "Contact", href: "#contact" },
                  ].map((link) => (
                    <a 
                      key={link.name}
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Connect */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Connect
                </h4>
                <div className="flex gap-3">
                  {socials.github && (
                    <a 
                      href={socials.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary flex items-center justify-center text-muted-foreground transition-all"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {socials.linkedin && (
                    <a 
                      href={socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary flex items-center justify-center text-muted-foreground transition-all"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  <a 
                    href={`mailto:${personal.email}`}
                    className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary flex items-center justify-center text-muted-foreground transition-all"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" />
                  {personal.location}
                </p>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-8 border-t border-border/50">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} {personal.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Built with</span>
                  <span className="text-primary">♥</span>
                  <span>using Next.js & Framer Motion</span>
                </div>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  Back to top
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block"
                  >
                    ↑
                  </motion.span>
                </button>
              </div>
            </div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
