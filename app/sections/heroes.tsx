import React from 'react'
import Image from 'next/image'
import { Download, Briefcase } from 'lucide-react';
import memoji from '@/assets/images/memoji-computer.png'
import grainImage from '@/assets/images/grain.jpg'
import HeroOrbit from '../components/HeroOrbit'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className=' py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip' id="home">
            <div className=' absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none'>

            <div className=' absolute inset-0 -z-30 opacity-5' style={{backgroundImage: `url(${grainImage.src})`
            }}></div>
            <div className='size-[620px] hero-ring'></div>
            <div className='size-[820px] hero-ring'></div>
            <div className='size-[1020px] hero-ring'></div>
            <div className='size-[1220px] hero-ring'></div>
             <HeroOrbit size={430} rotation={-14} shouldOrbit={true} orbitDuration='30s'>
                <SparkleIcon className='text-emerald-300/20 size-8' />
             </HeroOrbit> 
             <HeroOrbit size={440} rotation={79} shouldOrbit={true} orbitDuration='32s'>
                <SparkleIcon className='text-emerald-300/20 size-5' />
             </HeroOrbit> 
             <HeroOrbit size={520} rotation={-41} shouldOrbit={true} orbitDuration='34s'>
                <div className='bg-emerald-300/20 size-2 rounded-full' />
             </HeroOrbit> 
             <HeroOrbit size={530} rotation={178} shouldOrbit={true} orbitDuration='36s'>
                <SparkleIcon className='text-emerald-300/20 size-10' />
             </HeroOrbit> 
             <HeroOrbit size={550} rotation={20} shouldOrbit={true} orbitDuration='38s'>
                <StarIcon className='text-emerald-300 size-12' />
             </HeroOrbit> 
             <HeroOrbit size={590} rotation={98} shouldOrbit={true} orbitDuration='40s'>
                <StarIcon className='text-emerald-300 size-8' />
             </HeroOrbit> 
             <HeroOrbit size={650} rotation={-5} shouldOrbit={true} orbitDuration='42s'>
                <div className='bg-emerald-300/20 size-3 rounded-full' />
             </HeroOrbit>  
             <HeroOrbit size={710} rotation={144}  shouldOrbit={true} orbitDuration='44s'>
                <SparkleIcon className='text-emerald-300/20 size-14' />
             </HeroOrbit> 
             <HeroOrbit size={720} rotation={85} shouldOrbit={true} orbitDuration='46s'>
                <div className='bg-emerald-300/20 size-3 rounded-full' />
             </HeroOrbit>
            <HeroOrbit size={800} rotation={-72} shouldOrbit={true} orbitDuration='48s'>
                <StarIcon className='text-emerald-300 size-28' />
             </HeroOrbit>   
             </div>

            <div className=' container'>
               <div className=' flex flex-col items-center'>
               <Image src={memoji} alt='memoji' className=' size-[100px]' />
                <div className=' bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
                    <div className='bg-green-500 w-2.5 h-2.5 rounded-full items-center relative'>
                     <div className='bg-green-500 absolute inset-0 animate-ping-large rounded-full'>

                     </div>
                    </div>
                    <div className=' text-sm font-medium'>
                        Available for new projects
                    </div>
                </div>
               </div>
                <div className=' max-w-lg mx-auto'>
                <h1 className=' font-serif text-3xl md:text-5xl text-center mt-4 tracking-wide'>Hi, I am <span className=' text-emerald-300'>Alok Kiran</span></h1>
                <p className=' mt-4 text-center text-white/60 md:text-lg'>I specialize in transforming designs into functional, high performing mobile and web applications. Lets Discuss your next idea.</p>
                </div>
                <div className=' flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
                    <Link href="https://forms.gle/UDAmkjJrjw1vmyCg6" target='_blank'>
                    <button className=' inline-flex items-center gap-2 border border-white/15  px-6 h-12 rounded-xl'>
                        <span className=' font-semibold text-sm'>Contact Me</span>
                        <Briefcase />
                    </button>
                    </Link>
                    <Link href={"https://drive.google.com/file/d/1WUv2QkDbba3RX2ExS2_IlSzaO5Tmvlo7/view?usp=sharing"} target='_blank'>
                    <button className=' inline-flex items-center gap-2 border border-white text-gray-900 bg-white px-6 h-12 rounded-xl text-sm font-semibold'>
                     Resume<span><Download /></span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
