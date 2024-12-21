import React from 'react'
import { twMerge } from 'tailwind-merge';

function HeroOrbit({
    children, size, rotation,
    spinDuration,
    shouldOrbit = false,
    orbitDuration,
    shouldSpin = false
}: {
    children: React.ReactNode;
    size: number;
    rotation: number;
    spinDuration?: string;
    shouldOrbit?: boolean;
    orbitDuration?: string;
    shouldSpin?: boolean;
}) {
    return (
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-20'>
            <div className={twMerge(shouldOrbit === true && 'animate-spin')} style={{
                animationDuration: orbitDuration
            }}>

                <div className='size-[800px]' style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    transform: `rotate(${rotation}deg)`
                }}>
                    <div className={twMerge(shouldSpin === true && 'animate-spin')} style={{
                        animationDuration: spinDuration
                    }}>
                        <div className='inline-flex' style={{
                            transform: `rotate(${rotation * -1}deg)`
                        }}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroOrbit
