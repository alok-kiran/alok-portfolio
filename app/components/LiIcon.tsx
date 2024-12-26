import React from 'react'
import { motion, useScroll,  } from 'framer-motion';

function LiIcon({
    liRef
}: {
    liRef: React.RefObject<HTMLDivElement>
})  {
    const { scrollYProgress } = useScroll({
        target: liRef,
        offset: ["center end", "center center"]
    });
  return (
   
    <figure className=' absolute left-0 stroke-emerald-300'>
        <svg
            width="75"
            height="75"
            viewBox='0 0 100 100'
            className=' -rotate-90'
        >
            <circle cx="75" cy="50" r="20" className=' stroke-emerald-300/50 stroke-1 fill-none' />
            <motion.circle cx="75" cy="50" r="20" className='  stroke-[5px] fill-light' style={{
                pathLength: scrollYProgress
            }}/>
            <circle cx="75" cy="50" r="10" className='animate-pulse  stroke-[3px] fill-emerald-300/50'/>
        </svg>
    </figure>
  )
}

export default LiIcon
