import React from 'react'
import { twMerge } from 'tailwind-merge'

function SectionHeader({
    title,
    subtitle,
    description,
    classDescription
}: {
    title: string,
    subtitle: string,
    description: string,
    classDescription?: string
}) {
    return (
        <>
            <div className=' flex justify-center items-center'>
                <p className=' uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center'>{title}</p>
            </div>
            <h2 className=' font-serif text-3xl text-center mt-6 md:text-5xl'>{subtitle}</h2>
            <p className={twMerge('text-center text-white/60 mt-4 md:text-lg mx-auto lg:text-xl', classDescription)}>{description}</p>
        </>
    )
}

export default SectionHeader
