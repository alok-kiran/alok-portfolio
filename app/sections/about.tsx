import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import StarIcon from '@/assets/icons/star.svg'
import BookImage from '@/assets/images/book-cover.png'
import Image from 'next/image'
import JsIcon from '@/assets/icons/square-js.svg'
import HtmlIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import GithubIcon from '@/assets/icons/github.svg'
import ReactIcon from '@/assets/icons/react.svg'
import TechIcon from '../components/TechIcon'


const toolBoxItems = [
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


function About() {
  return (
    <div className=' pb-96'>
      <SectionHeader title="About me" subtitle='A Glimpse Into my World'  description='Learn more about who I am, What I do, and what inspires me.'/>
      <div>
        <Card>
                  <div>
                      <StarIcon className='text-emerald-300 size-12' />
                      <h3>My Reads</h3>
                      <p>Explore the books shaping my perspective</p>
                  </div>
                  <Image src={BookImage} alt='Book cover'/>
        </Card>
        <Card>
                  <div>
                      <StarIcon className='text-emerald-300 size-12' />
                      <h3>My Toolbox</h3>
                      <p>Explore the technologies and tools I use to craft exceptional digital experiences</p>
                  </div>
                 <div>
                        {toolBoxItems.map((item) => (
                            <div key={item.title}>
                                    <TechIcon component={item.iconType} />
                                    <span>{item.description}</span>
                            </div>
                        ))}
                 </div>
        </Card>
      </div>
    </div>
  )
}

export default About
