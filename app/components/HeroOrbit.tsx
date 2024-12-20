import React from 'react'

function HeroOrbit({
    children, size, rotation
}: {
    children: React.ReactNode;
    size: number;
    rotation: number;
}) {
  return (
    <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
    <div className='size-[800px] animate-spin [animation-duration:20s]' style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotate(${rotation}deg)`
    }}>
        <div className='inline-flex animate-spin [animation-duration:30s]' style={{
            transform: `rotate(${rotation * -1}deg)`
        }}>
           {children}
        </div>
    </div>
    </div>
  )
}

export default HeroOrbit
