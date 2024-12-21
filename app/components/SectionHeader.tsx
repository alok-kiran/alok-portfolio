import React from 'react'

function SectionHeader({
    title,
    subtitle,
    description
}: {
    title: string,
    subtitle: string,
    description: string
}) {
    return (
        <>
            <div className=' flex justify-center items-center'>
                <p className=' uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center'>{title}</p>
            </div>
            <h2 className=' font-serif text-3xl text-center mt-6 md:text-5xl'>{subtitle}</h2>
            <p className=' text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl'>{description}</p>
        </>
    )
}

export default SectionHeader
