import React from 'react'
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Link from 'next/link';
import Image from 'next/image';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const portfolioProjects = [
    {
        company: "Design Sphere",
        year: "2024",
        title: "Graphic Design SaaS Tool",
        results: [
            { title: "Developed a Canva-like SaaS platform with drag-and-drop design features for shapes, images, and text." },
            { title: "Designed intuitive UI with React.js and Tailwind CSS, integrating Google and GitHub login for user convenience." },
            { title: "Built with Next.js, Node.js, and PostgreSQL for scalable, secure performance and progress tracking." },
            { title: "Solved the need for accessible, user-friendly tools for professional-quality design creation." },
        ],
        link: "https://graphic-master.vercel.app/",
        image: darkSaasLandingPage,
    },
    {
        company: "Sprintly",
        year: "2024",
        title: "Project Management SaaS Tool",
        results: [
            { title: "Created a Trello-like project management platform with boards, lists, and drag-and-drop functionality." },
            { title: "Designed collaborative features, including user invitations and real-time activity audits for transparency." },
            { title: "Built with Next.js, Node.js, Tailwind CSS, and MySQL for scalable and efficient performance." },
            { title: "Solved the need for streamlined project organization and team collaboration in a single platform." },
        ],
        link: "https://trell-master.vercel.app/",
        image: aiStartupLandingPage,
    },
    
    
];

function Projects() {
    return (
        <section className=' pb-16 lg:py-24' id="projects">
            <div className=' container'>
                <SectionHeader
                    title='Real-world Results'
                    subtitle='Featured Projects'
                    description='See how I transformed concepts into engaging digital experiences.'
                />
                <div className=' flex flex-col mt-10 md:mt-20 gap-20'>
                    {portfolioProjects?.map((project, index) => (
                        <Card key={project.title} className='lg:pt-16 lg:px-20 px-8 pt-8 md:pt-12 md:px-10 pb-0 sticky' style={{
                            top: `calc(64px + ${index*60}px)`
                        }}>
                        <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                                <div className=' lg:pb-16'>
                                    <div className=' bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex uppercase font-bold tracking-widest text-sm gap-2 text-transparent bg-clip-text '>
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h3 className=' font-serif text-2xl mt-2 md:text-4xl md:mt-5'>{project.title}</h3>
                                    <hr className=' border-t-2 border-white/5 mt-4 md:mt-5' />
                                    <ul className=' flex flex-col gap-4 mt-4 md:mt-5'>
                                        {project.results.map((result) => (
                                            <li className=' flex gap-2 text-sm md:text-base text-white/50' key={result.title}>✅ {result.title}</li>
                                        ))}
                                    </ul>
                                    <Link href={project.link} target='_blank'>
                                        <button className=' bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6'><span>Visit Live Site </span><ArrowUpRightIcon className="size-4" /></button>
                                    </Link>
                                </div>
                                <div className=' relative'>
                                    <Image src={project.image} alt={project.title} className=' mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none' />
                                </div>
                            </div>
                        </Card>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;
