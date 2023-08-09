import React from 'react'
import { Card } from '../Card/Card'
import { projects } from '../../assets/projects'
import { Section } from '../Section/Section'

export const AboutMe = () => {
  console.log(projects);
  return (
    <Section styles='bg-gray-900 w-full'>
      <h2 className='text-yellow-600 my-2 font-bold text-6xl'>Mis Proyectos</h2>
      <p className='text-stone-300 text-2xl shadow-cyan-500/50'>Teniendo en cuenta que ha sido un proceso meramente educativos, estos son algunas de las prácticas y proyectos realizados.</p>
      <div className='w-full flex justify-center flex-wrap bg-gray-900'>
        {
          projects.map( project => (
            <Card
              key={project.id}
              img={project.img}
              alt={project.title}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))
        }
      </div>
    </Section>
  )
}
