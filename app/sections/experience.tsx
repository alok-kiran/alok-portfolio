"use client";
import React, { useRef } from 'react'
import SectionHeader from '../components/SectionHeader'
import InvygoLogo from '@/assets/images/invygo_logo.png';
import ComoLogo from '@/assets/images/como_logo.png';
import Link from 'next/link';
import { useScroll, motion } from 'framer-motion';
import LiIcon from '../components/LiIcon';
import StarIcon from '@/assets/icons/star.svg';

const EXPERIENCE = [
    {
        company: "Como (Acquired by Global Payments GPN:NYSE)",
        year: "Dec 2022 - Present",
        title: "Software Engineer - II",
        location: "Dubai, United Arab Emirates",
        companyLink: "https://www.comosense.com/",
        results: [
            { title: "Reduced Next.js application page size by 88% (938 KB to 111 KB) through advanced optimizations, including dynamic imports, image optimization, lazy loading, tree shaking, and removal of unused CSS, significantly enhancing load time and user experience." },
            { title: "Enhanced user acquisition efficiency by implementing an account merge feature with OTP verification, allowing users to consolidate registrations via email or phone, ensuring unique identification and reducing acquisition redundancy by 30%." },
            { title: "Developed a multi-language support dashboard for customer-facing Next.js web apps, enabling businesses to configure and update multilingual text dynamically without redeployment. This highly configurable feature fetched language-specific content based on user preferences, boosting business acquisition by 20%." },
            { title: "Implemented comprehensive accessibility features for the customer portal of the web app, achieving 100% compliance with global accessibility standards. This enhancement ensured inclusivity for all users and prevented potential legal risks, saving an estimated 15% in potential compliance-related costs." },
            { title: "Enhanced the customer portal by creating a standalone, sharable user registration page within the same codebase. This feature streamlined the registration process by bypassing the login flow for new users and allowed integration with other apps via webview or iframe, increasing user acquisition by 20%." },
            { title: "Upgraded the React Native app from version 0.66.1 to 0.71.1, involving updates to over 25 third-party libraries and refactoring critical logic, leading to a 30% improvement in app performance and a 25% reduction in crashes. The upgrade also enhanced maintainability, reducing future development time by 20%." },
        ],
        companyLogo: ComoLogo,
        techStack: ['HTML5 & CSS3','JavaScript', 'TypeScript','React JS',  'React Native', 'Next JS', 'Redux', 'React Query', 'Tailwind CSS', 'Material UI', 'Shadcn UI' ,'Node.js', 'Next Auth', 'Express.js' , 'Dot Net', 'MongoDB',  'PostgreSQL', 'MySQL', 'Github', 'Jira', 'Jenkins', 'Docker', 'Kubernetes', 'Kibana', 'CodeMagic', 'Sentry', 'Google Analytics', 'Firebase', 'Firebase Cloud Messaging', 'Postman', 'Jest', 'Cypress'],
    },
    {
        company: "Invygo Tech LLC",
        year: "June 2019 - Nov 2022",
        title: "Software Engineer - I",
        location: "Dubai, United Arab Emirates",
        companyLink: "https://www.invygo.com/",
        results: [
            { title: "Engineered centralized UI component library using Storybook for React Native, streamlining development workflows and achieving 75% reduction in build time." },
            { title: "Optimized customer service efficiency through strategic Freshdesk implementation, resulting in 80% decreased contact volume and improved support team productivity." },
            { title: "Spearheaded development of live driver location tracking feature with automated customer communications, improving delivery visibility and cutting support volume by 88%." },
            { title: "Optimized mobile payment flow through Apple Pay integration, reducing friction in checkout process and boosting customer engagement by 10%." },
        ],
        companyLogo: InvygoLogo,
        techStack: ['HTML5 & CSS3', 'JavaScript', 'TypeScript', 'React JS', 'Next JS', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Rabbit MQ', 'Apple Pay','Github', 'Bitrise', 'Jira'],
    },
]

const Details = ({ title, company, year, location, results, companyLink, techStack }: {
    title: string;
    company: string;
    year: string;
    location: string;
    results: { title: string }[];
    companyLink: string;
    techStack: string[];
}) => {
    const first = useRef(null);
    return (
        <li ref={first} className=' my-16 first:mt-0 last:mb-0 w-[80%] mx-auto'>
            <LiIcon liRef={first}  />
            <motion.div className=' '
            initial={{ y:50 }}
            whileInView={{ y:0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            >
                <h3 className=' capitalize font-bold md:text-xl font-serif'>{title}&nbsp; <Link href={companyLink} target='_blank' className=' text-emerald-300'>@{company}</Link></h3>
                <span className=' caption-top font-medium text-white/30'>{year} | {location}</span>
                <h2 className=' font-medium text-xl text-emerald-300 mt-4'>TechStack:</h2>
                <ul className=' font-medium w-full flex flex-row flex-wrap items-center justify-start gap-x-2'>
                {techStack.map((item: string, index: number) => (
                        <li key={index} className=' text-sm my-1 flex flex-row justify-start items-top text-white font-serif'><span>{'✨'}</span>{item}</li>
                    ))}
                </ul>
                <h2 className=' font-medium text-xl text-emerald-300 mt-4'>Achievements:</h2>
                <ul className=' font-medium w-full'>
                    {results.map((result) => (
                        <li key={result.title} className=' text-xl/2 my-2 flex flex-row justify-start items-top text-white/30'><span><StarIcon className="size-6 text-emerald-300 mr-2" /></span>{result.title}</li>
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
