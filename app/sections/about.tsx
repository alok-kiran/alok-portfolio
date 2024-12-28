"use client";
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import BookImage from '@/assets/images/book-cover.png'
import Image from 'next/image'
import JsIcon from '@/assets/icons/tech/javascript.svg'
import HtmlIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import GithubIcon from '@/assets/icons/github.svg'
import ReactIcon from '@/assets/icons/react.svg'
import MapImage from '@/assets/images/map.png'
import AlokImage from '@/assets/images/alok.png'
import CardHeader from '../components/CardHeader'
import ToolBoxItems from '../components/ToolBoxItems'
import TypeScriptIcon from '@/assets/icons/tech/typescript.svg'
import ApplePayIcon from '@/assets/icons/tech/apple-pay.svg'
import BitriseIcon from '@/assets/icons/tech/bitriseio-icon.svg'
import CypressIcon from '@/assets/icons/tech/cypress.svg'
import DockerIcon from '@/assets/icons/tech/docker.svg'
import DotnetIcon from '@/assets/icons/tech/dotnet.svg'
import FireBaseIcon from '@/assets/icons/tech/firebase.svg'
import GoogleAnalyticsIcon from '@/assets/icons/tech/google-analytics.svg'
import JenkinsIcon from '@/assets/icons/tech/jenkins.svg'
import JestIcon from '@/assets/icons/tech/jest.svg'
import KibanaIcon from '@/assets/icons/tech/kibana.svg'
import JiraIcon from '@/assets/icons/tech/jira.svg'
import KubernetesIcon from '@/assets/icons/tech/kubernets.svg'
import CodemagicIcon from '@/assets/icons/tech/codemagic.svg'
import MaterialUIIcon from '@/assets/icons/tech/material.svg'
import MongoDBIcon from '@/assets/icons/tech/mongodb.svg'
import MySqlIcon from '@/assets/icons/tech/mysql.svg'
import NextJsIcon from '@/assets/icons/tech/next.svg'
import NodeJSIcon from '@/assets/icons/tech/nodejs.svg'
import postgreSQLIcon from '@/assets/icons/tech/postgresql.svg'
import postmanIcon from '@/assets/icons/tech/postman.svg'
import RabbitMQIcon from '@/assets/icons/tech/rabbitmq.svg'
import ReactnativeIcon from '@/assets/icons/tech/react-native.svg'
import ReactQueryIcon from '@/assets/icons/tech/react-query.svg'
import ReduxIcon from '@/assets/icons/tech/redux.svg'
import SentryIcon from '@/assets/icons/tech/sentry.svg'
import shadcnIcon from '@/assets/icons/tech/shadcn-ui.svg'
import tailwindCssIcon from '@/assets/icons/tech/tailwind-css.svg'
import stripeIcon from '@/assets/icons/tech/stripe.svg'
import RedisIcon from '@/assets/icons/tech/redis.svg'

const toolBox1 = [
    { title: "Apple Pay", description: "A digital payment solution by Apple", iconType: ApplePayIcon },
    { title: "Bitrise", description: "A mobile CI/CD platform for app development", iconType: BitriseIcon },
    { title: "CodeMagic", description: "A CI/CD tool for mobile apps", iconType: CodemagicIcon },
    { title: "Cypress", description: "A JavaScript end-to-end testing framework", iconType: CypressIcon },
    { title: "Docker", description: "A platform for containerized applications", iconType: DockerIcon },
    { title: "Dot Net", description: "A framework for building web, desktop, and mobile apps", iconType: DotnetIcon },
    { title: "Express.js", description: "A fast, unopinionated Node.js web application framework", iconType: '' },
    { title: "Firebase", description: "A platform for building mobile and web applications", iconType: FireBaseIcon },
    { title: "Github", description: "A platform for hosting and collaborating on code", iconType: GithubIcon },
    { title: "Google Analytics", description: "A web analytics service for tracking website traffic", iconType: GoogleAnalyticsIcon },
    { title: "JavaScript", description: "A programming language for building interactive websites", iconType: JsIcon },
    { title: "TypeScript", description: "A superset of JavaScript for building scalable applications", iconType: TypeScriptIcon },
    { title: "HTML5", description: "The fundamental technologies for building web pages", iconType: HtmlIcon },
    { title: "CSS3", description: "A style sheet language for designing web pages", iconType: CssIcon },
    { title: "Jenkins", description: "An automation server for CI/CD", iconType: JenkinsIcon },
    { title: "Jest", description: "A JavaScript testing framework", iconType: JestIcon },
    { title: "Jira", description: "A tool for project management and issue tracking", iconType: JiraIcon },
    { title: "Kibana", description: "A data visualization dashboard for Elasticsearch", iconType: KibanaIcon },
    { title: "Kubernetes", description: "A container orchestration platform", iconType: KubernetesIcon },
    {
        title: "Redis", description: "An open-source in-memory data structure store", iconType: RedisIcon
    }
]

const toolBox2 = [
    { title: "Material UI", description: "A React component library following Google's Material Design", iconType: MaterialUIIcon },
    { title: "MongoDB", description: "A NoSQL database for modern applications", iconType: MongoDBIcon },
    { title: "MySQL", description: "A relational database management system", iconType: MySqlIcon },
    { title: "Next JS", description: "A React framework for server-rendered and static web applications", iconType: NextJsIcon },
    { title: "Node.js", description: "A runtime for executing JavaScript on the server", iconType: NodeJSIcon },
    { title: "PostgreSQL", description: "An open-source relational database system", iconType: postgreSQLIcon },
    { title: "Postman", description: "A collaboration platform for API development", iconType: postmanIcon },
    { title: "Rabbit MQ", description: "A message-broker software for distributed systems", iconType: RabbitMQIcon },
    { title: "React JS", description: "A JavaScript library for building user interfaces", iconType: ReactIcon },
    { title: "React Native", description: "A framework for building native apps using React", iconType: ReactnativeIcon },
    { title: "React Query", description: "A library for data fetching and state management", iconType: ReactQueryIcon },
    { title: "Redux", description: "A state management library for JavaScript applications", iconType: ReduxIcon },
    { title: "Sentry", description: "A monitoring platform for identifying and fixing errors", iconType: SentryIcon },
    { title: "Shadcn UI", description: "A collection of reusable components for React", iconType: shadcnIcon },
    { title: "Stripe", description: "A payment processing platform for online transactions, subscriptions, and financial management", iconType: stripeIcon },
    { title: "Tailwind CSS", description: "A utility-first CSS framework for rapid UI development", iconType: tailwindCssIcon }
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
                <SectionHeader classDescription=" w-full " title="About me" subtitle='A Glimpse Into my World' description='I am Alok, passionate and experienced full-stack developer based in Dubai, UAE and with a Computer Science & Engineering degree from Indian Institute of Technology Ropar, Punjab. With over 5 years of experience in building scalable and innovative web and mobile applications, I thrive on transforming ideas into seamless digital experiences. My expertise lies in modern technologies like React.js, React Native, Node.js, and Next.js, Node.js, Express.js enabling me to craft responsive and robust applications tailored to diverse business needs.' />
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
                            <ToolBoxItems items={toolBox1} className='' itemsWrapperClassName='animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]'/>
                            <ToolBoxItems 
                                items={toolBox2} 
                                className=' mt-6'
                                itemsWrapperClassName='animate-move-right [animation-duration:60s] hover:[animation-play-state:paused]'
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
