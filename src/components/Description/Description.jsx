import React from 'react'
import './description.css'

const textDescription = `
Soy un apasionado desarrollador frontend con una amplia experiencia en la creación de experiencias digitales cautivadoras y funcionales. Mi objetivo principal es llevar la visión creativa de los proyectos a la realidad, utilizando tecnologías web de vanguardia y las mejores prácticas de desarrollo.

Como instructor en el SENA de Colombia, he tenido el privilegio de compartir mi conocimiento y experiencia con una nueva generación de talentosos desarrolladores. Mi enfoque educativo se basa en inspirar a mis estudiantes y brindarles las herramientas y habilidades necesarias para convertirse en profesionales exitosos en el campo del desarrollo de software.`

export const Description = ({ user = 'Edwin Rozo', description = textDescription  }) => {
  return (
    <>
      <h2 className='text-5xl text-slate-300'>{ user }</h2>
      <p className='text-sky-300'>{ description }</p>
    </>
  )
}
