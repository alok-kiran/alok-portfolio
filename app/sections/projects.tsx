import React from 'react'
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Link from 'next/link';
import Image from 'next/image';
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const portfolioProjects = [
    {
        company: "Design Sphere",
        year: "2022",
        title: "Graphic Design SaaS Tool",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improved site speed by 50%" },
            { title: "Increased mobile traffic by 35%" },
        ],
        link: "https://graphic-master.vercel.app/",
        image: darkSaasLandingPage,
    },
    {
        company: "Sprintly",
        year: "2021",
        title: "Project Management SaaS Tool",
        results: [
            { title: "Boosted sales by 20%" },
            { title: "Expanded customer reach by 35%" },
            { title: "Increased brand awareness by 15%" },
        ],
        link: "https://trell-master.vercel.app/",
        image: aiStartupLandingPage,
    },
];

function Projects() {
    return (
        <section className=' pb-16 lg:py-24' >
            <div className=' container'>
                <SectionHeader
                    title='Real-world Results'
                    subtitle='Featured Projects'
                    description='See how I transformed concepts into engaging digital experiences.'
                />
                <div className=' flex flex-col mt-10 md:mt-20 gap-20'>
                    {portfolioProjects?.map((project) => (
                        <Card key={project.title} className='lg:pt-16 lg:px-20 px-8 pt-8 md:pt-12 md:px-10 pb-0'>
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
                                            <li className=' flex gap-2 text-sm md:text-base text-white/50' key={result.title}><CheckIcon className="size-5 md:size-6 md:mt-0.3" /><span>{result.title}</span></li>
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
