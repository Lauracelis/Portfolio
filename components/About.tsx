import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}} 

    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className=' xs:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img
        initial={{
            x:-200,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGYYI-knPFF3g/profile-displayphoto-shrink_800_800/0/1642468334554?e=2147483647&v=beta&t=HXJzh13Fq3MagF125WdgcTvYPLiSaTKwyL27Iuvtz_Q"
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a {""}
                <span className='underline decoration-[#f7ab0a]/50'>Little </span>{""}
                background
                </h4>
                <p className='text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione iure illo dolores non amet nemo, architecto suscipit natus voluptates labore, similique rerum minus sit, asperiores vero cupiditate ducimus. Corporis, saepe.
                Nobis, nulla alias eveniet voluptas placeat rem quis, reprehenderit sunt error quam nisi cupiditate optio! Sapiente, repellendus. Architecto blanditiis, deserunt minima corrupti voluptates quos ut perspiciatis sunt suscipit obcaecati nulla!
                Accusantium, facilis soluta? Quasi, ab tempore distinctio repellendus libero adipisci porro illum! Nihil inventore eaque odit officia quo esse! Qui officia nihil consequuntur voluptas, beatae odit veniam iure eaque reprehenderit.
                </p>
        </div>
        </motion.div>
  )
}