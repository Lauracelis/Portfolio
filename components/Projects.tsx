import React from 'react'
import { motion } from 'framer-motion';
import Captura from '../assets/img/Captura.png'
type Props = {}

export default function Projects({ }: Props) {
    const projects = [1, 2, 3, 4];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {projects.map((project, i) => (
                    <div key={project}>
                        <div className='w-screen flex-shronk-0 snap-center flex flex-col space-y-2 items-center justify-center p-5 md:p-5 h-{800px}'>
                            <motion.img
                                initial={{
                                    y: -300,
                                    opacity: 0,
                                }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2 }}
                                src={Captura.src} alt=""
                            className='h-[200px] '/>

                        </div>

                        <div className='space-y-10 px-o md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[pink]/80'>Case Study {i + 1} of {projects.length}: </span>{" "}CODERHUNTS</h4>
                            <p className='text-md text-center md:text-center'>A fun game inspired by the famous duckhunts game</p>

                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[purple]/20 left-0 h-[350px] -skew-y-12' ></div>
        </motion.div>
    )
}
