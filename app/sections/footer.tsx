import React from 'react'
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"
import Link from 'next/link'

const footerLinks = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/alokkiran/'
    },
    {
        name: 'Github',
        href: 'https://github.com/alok-kiran'
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/alok_.kushwaha/'
    },
    {
        name: 'Youtube',
        href: 'https://www.youtube.com/@world_explorer-y1e'
    },
]

function Footer() {
  return (
    <footer className=' relative overflow-x-clip'>
        <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'>

        </div>
      <div className=' container'>
              <div className=' border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between'>
                  <div className=' text-white/40'>
                      &copy; 2025 All rights reserved. Designed by <a href="https://www.linkedin.com/in/alokkiran/">Alok Kiran</a>
                  </div>
                  <nav className=' flex flex-row items-center gap-8 '>
                      {
                          footerLinks.map((item) => {
                              return (
                                  <Link href={item.href} key={item.name} className=' inline-flex items-center gap-1.5' target='_blank'>
                                      <span className=' font-semibold'>{item.name}</span>
                                      <ArrowUpRight className="size-4" />
                                  </Link>
                              )
                          })
                      }
                  </nav>
              </div>

      </div>
    </footer>
  )
}

export default Footer;
