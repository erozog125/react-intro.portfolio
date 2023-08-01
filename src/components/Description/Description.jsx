import React from 'react'
import './description.css'

const textDescription = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique natus perspiciatis, eaque vero rerum dicta cumque voluptates assumenda suscipit? Fugit enim quas animi iusto, vero modi fuga quaerat dolore.`

export const Description = ({ user = 'Edwin Rozo', description = textDescription  }) => {
  return (
    <>
      <h2>{ user }</h2>
      <p>{ description }</p>
    </>
  )
}
