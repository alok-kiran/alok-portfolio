"use client";
import React, { useRef } from 'react'
import SectionHeader from '../components/SectionHeader'
import InvygoLogo from '@/assets/images/invygo_logo.png';
import ComoLogo from '@/assets/images/como_logo.png';
import Link from 'next/link';
import { useScroll, motion } from 'framer-motion';
import LiIcon from '../components/LiIcon';

const EXPERIENCE = [
    {
        company: "Como (Acquired by Global Payments GPN:NYSE)",
        year: "Dec 2022 - Present",
        title: "Software Engineer - II",
        location: "Dubai, United Arab Emirates",
        companyLink: "https://www.comosense.com/",
        results: [
            { title: "Developed a Canva-like SaaS platform with drag-and-drop design features for shapes, images, and text." },
            { title: "Designed intuitive UI with React.js and Tailwind CSS, integrating Google and GitHub login for user convenience." },
            { title: "Built with Next.js, Node.js, and PostgreSQL for scalable, secure performance and progress tracking." },
            { title: "Solved the need for accessible, user-friendly tools for professional-quality design creation." },
        ],
        companyLogo: ComoLogo,
    },
    {
        company: "Invygo Tech LLC",
        year: "June 2019 - Nov 2022",
        title: "Software Engineer - I",
        location: "Dubai, United Arab Emirates",
        companyLink: "https://www.invygo.com/",
        results: [
            { title: "Created a Trello-like project management platform with boards, lists, and drag-and-drop functionality." },
            { title: "Designed collaborative features, including user invitations and real-time activity audits for transparency." },
            { title: "Built with Next.js, Node.js, Tailwind CSS, and MySQL for scalable and efficient performance." },
            { title: "Solved the need for streamlined project organization and team collaboration in a single platform." },
        ],
        companyLogo: InvygoLogo,
    },
]

const Details = ({ title, company, year, location, results, companyLink }: {
    title: string;
    company: string;
    year: string;
    location: string;
    results: { title: string }[];
    companyLink: string;
}) => {
    const first = useRef(null);
    return (
        <li ref={first} className=' my-24 first:mt-0 last:mb-0 w-[80%] mx-auto'>
            <LiIcon liRef={first}  />
            <motion.div className=' '
            initial={{ y:50 }}
            whileInView={{ y:0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            >
                <h3 className=' capitalize font-bold text-2xl'>{title}&nbsp; <Link href={companyLink} target='_blank' className=' text-emerald-300'>@{company}</Link></h3>
                <span className=' caption-top font-medium text-white/30'>{year} | {location}</span>
                <ul className=' font-medium w-full'>
                    {results.map((result) => (
                        <li key={result.title}>{result.title}</li>
                    ))}
                </ul>
            </motion.div>
        </li>
    )
}

function Experience() {
    const targetRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "center start"]
    });
  return (
    <div className=' py-16 lg:py-24' id="experience">
     <div className=' container'>
     <SectionHeader
                    title='Professional Experience'
                    subtitle='A Glimpse of My Journey So Far'
                    description=' I have been working as a Software Engineer for over 5 years, gaining extensive experience and expertise along the way. Here’s a timeline of my professional journey.'
                />
     </div>
     <div className='container relative mt-12 lg:mt-20' ref={targetRef}>
        <motion.div style={{
            scaleY: scrollYProgress
        }} className=' absolute left-9 top-0 w-[4px] h-full bg-emerald-300 origin-top'/>
        <ul className=' w-full flex flex-col items-start justify-between ml-4'>
                {
                    EXPERIENCE.map((exp, index) => (
                        <Details key={index} {...exp} />
                    ))
                }
        </ul>
     </div>
    </div>
  )
}

export default Experience
