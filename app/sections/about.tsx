"use client";
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import BookImage from '@/assets/images/book-cover.png'
import Image from 'next/image'
import JsIcon from '@/assets/icons/square-js.svg'
import HtmlIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import GithubIcon from '@/assets/icons/github.svg'
import ReactIcon from '@/assets/icons/react.svg'
import MapImage from '@/assets/images/map.png'
import AlokImage from '@/assets/images/alok.png'
import CardHeader from '../components/CardHeader'
import ToolBoxItems from '../components/ToolBoxItems'


const toolBox1 = [
    {
        title: "JavaScript",
        description: "The programming language that powers the web",
        iconType: JsIcon,
    },
    {
        title: "HTML5",
        description: "The markup language that structures the web",
        iconType: HtmlIcon,
    },
    {
        title: "CSS3",
        description: "The styling language that beautifies the web",
        iconType: CssIcon,
    },
    {
        title: "TypeScript",
        description: "The superset of JavaScript that adds type safety",
        iconType: JsIcon,
    },
    {
        title: "React",
        description: "The JavaScript library for building user interfaces",
        iconType: ReactIcon,
    },

]

const toolBox2 = [
    {
        title: "Next.js",
        description: "The React framework for building production-ready applications",
        iconType: JsIcon,
    },
    {
        title: "Tailwind CSS",
        description: "The utility-first CSS framework for rapidly building custom designs",
        iconType: JsIcon,
    },
    {
        title: "Node.js",
        description: "The JavaScript runtime for building server-side applications",
        iconType: JsIcon,
    },
    {
        title: "Github",
        description: "The platform for hosting and collaborating on code",
        iconType: GithubIcon,
    }
]

const hobbies = [
    {
        title: "Reading",
        emoji: "📚",
        left: "5%",
        top: "5%",
    },
    {
        title: "Traveling",
        emoji: "🌍",
        left: "50%",
        top: "5%",
    },
    {
        title: "Photography",
        emoji: "📸",
        left: "10%",
        top: "35%",
    },
    {
        title: "Hiking",
        emoji: "🥾",
        left: "35%",
        top: "40%",
    },
    {
        title: "Cooking",
        emoji: "🍳",
        left: "70%",
        top: "45%",
    },
    {
        title: "Gaming",
        emoji: "🎮",
        left: "5%",
        top: "65%",
    },
    {
        title: "Meditation",
        emoji: "🧘",
        left: "45%",
        top: "70%",
    },
]


function About() {
    const constraintsRef = React.useRef(null);
    return (
        <div className='py-20 lg:py-28' id="about">
            <div className=' container'>
                <SectionHeader title="About me" subtitle='A Glimpse Into my World' description='Learn more about who I am, What I do, and what inspires me.' />
                <div className=' mt-20 flex flex-col gap-8'>
                    <div className=' grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-8 lg:grid-cols-3'>
                    <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
                        <CardHeader 
                            title='My Reads' 
                            description='Explore the books shaping my perspective.'
                        />
                        <div className=' w-40 mx-auto mt-2 md:mt-0'>
                        <Image src={BookImage} alt='Book cover' />
                        </div>
                    </Card>
                    <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
                        <CardHeader 
                            title='My Toolbox' 
                            description='Explore the technologies and tools I use to craft exceptional digital experiences.'
                            className=''
                        />
                            <ToolBoxItems items={toolBox1} className='' itemsWrapperClassName='animate-move-left [animation-duration:15s] hover:[animation-play-state:paused]'/>
                            <ToolBoxItems 
                                items={toolBox2} 
                                className=' mt-6'
                                itemsWrapperClassName='animate-move-right [animation-duration:15s] hover:[animation-play-state:paused]'
                                />
                    </Card>
                    </div>
                    <div className=' grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3'>
                    <Card className=' h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
                        <CardHeader 
                            title='Beyond the Code' 
                            description='Explore my interest and hobbies beyond the digital realm'
                            className='px-6 py-6'
                        />
                        <div className=' relative flex-1' ref={constraintsRef}> 
                            {hobbies.map((hobby) => (
                                <motion.div drag dragConstraints={constraintsRef} key={hobby.title} className='items-center inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute' style={{
                                    left: hobby.left,
                                    top: hobby.top,
                                }}>
                                    <span className=' font-medium text-gray-950'>{hobby.title}</span>
                                    <span>{hobby.emoji}</span>
                                </motion.div>
                            ))}
                        </div>
                    </Card>
                    <Card className=' h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
                        <Image src={MapImage} alt='Map' className=' h-full w-full object-cover object-left-top' />
                        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                        <div className=' absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'>

                        </div>
                        <div className=' absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'>

                        </div>
                        <Image src={AlokImage} alt='Map' className=' size-20' />
                        </div>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
