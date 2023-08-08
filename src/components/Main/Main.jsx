import React from 'react'
import './main.css'
import { Section } from '../Section/Section'
import { Description } from '../Description/Description'
import { Profile } from '../Profile/Profile'

const imgProfile = '../../../public/profile.jpeg'

export const Main = () => {
  return (
    <main className='w-full h-4/5 flex justify-center'>
      <Section>
        <Profile img = { imgProfile } alt = 'Imagen de perfil'  />
      </Section>
      <Section>
        <Description />       
      </Section>
    </main>
  )
}
