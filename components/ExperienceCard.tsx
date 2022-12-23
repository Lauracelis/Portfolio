import React from 'react';
import { motion } from 'framer-motion';
import kuepa from '../assets/img/kuepa.jpg'
import List from './List';


type Props = { title: String , place: string, lists:Array<string>}

export default function ExperienceCard({ title, place, lists }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[400px] md:w-[450px] xl:w-[300px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-28 h-28 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
                src={kuepa.src}
                alt=""
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light'>{ title }</h4>
                <p className='font-bold text-xl mt-1'>{place}</p>
                <div className='flex space-x-2 my-2'>
                    <img
                    className='h-6 w-6 rounded-full' 
                    src={kuepa.src}
                    alt="logo-kuepa" />
                </div>
                <p className='uppercase py-2 text-gray-300'></p>
                <ul className='list-disc space-y-2 ml-5 text-xs'>
                {lists.map((list) => (
                    <li key={(list)}>
                        {list}
                    </li>
                ))}
            </ul>
          
            </div>
        </article>
    )
}