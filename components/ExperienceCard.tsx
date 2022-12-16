import React from 'react'
import { motion } from 'framer-motion';
import kuepa from "../assets/img/kuepa.jpg";

type Props = {}

export default function ExperienceCard ({}: Props)  {
  return (
    <article>
        <motion.img
         initial={{
            y:-100,
            opacity:0,
         }}
         transition={{duration:1.2}}
         whileInView={{opacity: 1, y:0}}
         viewport={{once:true}}
        className="w-32 h-32 rounded-full xlw-[200px] xl:h[200px] object-cover object-center" src={kuepa.src} alt="" 
        />
        
        <div className='px-o md:px-10'>
            <h4 className='text-4xl font-light'>Monitora TechPower</h4>
            <p className='font-bold text-2xl mt-1'>Kuepa Edutech S.A.</p>
            <div className='flex space-x-2 my-2'>
                <img className="h-10 w-10 rounded-full" src="" alt="" />
            </div>
            <p>Mar, 2022 - Oct, 2022</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>asdf</li>
                <li>sdsegs</li>
                <li>adegsbd</li>
                <li>shbfd</li>
                <li>sfhb</li>
            </ul>
        </div>
        </article>
  )
}