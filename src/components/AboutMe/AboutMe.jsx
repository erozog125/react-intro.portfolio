import React from 'react'
import { Card } from '../Card/Card'
import { projects } from '../../assets/projects'

export const AboutMe = () => {
  console.log(projects);
  return (
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
  )
}
