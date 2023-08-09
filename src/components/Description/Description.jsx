import React from 'react'

const textDescription = `Soy un aprendiz apasionado, desarrollador frontend con conocimientos en ReactJss, profesional que se esmera por inspirar a los demás y aprender algo de todos.
Mi objetivo principal es siempre proponer desde la construcción de nuevos retos, utilizando tecnologías web.
Como instructor SENA de la regional Quindío, he tenido el privilegio de compartir mi conocimiento y aprender al lado de grandes compañeros y aprendices.`

export const Description = ({ user = '¿Quién soy?', description = textDescription  }) => {
  return (
    <>
      <h2 className='text-5xl'>{ user }</h2>
      <p className='font-semibold text-slate-600 mt-4'>{ description }</p>
    </>
  )
}
