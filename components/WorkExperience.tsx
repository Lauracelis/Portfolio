import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {}
const listOne = ["Seguimiento y monitoreo cualitativo y cuantitativo de las evidencias de aprendizaje de las estudiantes del programa técnico en Desarrollo Web Front-End.", "Gestión responsable y proactiva de información académica (asistencia, calificación) de los estudiantes del programa técnico.", "Retroalimentación del proceso de enseñanza /aprendizaje a los estudiantes del programa técnico en Desarrollo Web Front-End.", "Establecimiento, generación y ejecución de sesiones de monitoria (extracurricular) para el seguimiento y acompañamiento de los proyectos adelantados por los estudiantes."]
const listTwo = ["Creación de evaluación heurística y Task flow.", "Wireframe y prototipado.", "Investigación de usuarios.", "Entrevistas etnográficas.", "Testeo de prototipos.", "Administración de permisos y accesos en Notion."]

export default function WorkExperience({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='ml-4 mt-10 top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='w-full flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory'>
        <ExperienceCard title={ 'Monitora TechPower' } place={"Kuepa Edutech S.A.S"} lists={listOne}/>
        <ExperienceCard title={ 'UX Researcher Trainee'} place={"Umoob"} lists={listTwo}/>
      </div>
    </motion.div>
  )
}