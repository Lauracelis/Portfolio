import React from 'react'
import { motion } from 'framer-motion';
import kuepa from "../assets/img/kuepa.jpg";

type Props = {}

export default function ExperienceCard ({}: Props)  {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opcitty duration-200 overflow-hidden'>
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
            <p className='uppercase py-5 text-gray-300'>Mar, 2022 - Oct, 2022</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Seguimiento y monitoreo cualitativo y cuantitativo de las evidencias de aprendizaje de las estudiantes del programa técnico en Desarrollo Web Front-End.</li>
                <li>Gestión responsable y proactiva de información académica (asistencia, calificación) de los estudiantes del programa técnico.</li>
                <li>Retroalimentación del proceso de enseñanza /aprendizaje a los estudiantes del programa técnico en Desarrollo Web Front-End.</li>
                <li>Establecimiento, generación y ejecución de sesiones de monitoria (extracurricular) para el seguimiento y
acompañamiento de los proyectos adelantados por los estudiantes</li>
                
            </ul>
        </div>
        </article>
  )
}