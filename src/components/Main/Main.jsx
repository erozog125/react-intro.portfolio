import React from 'react'
import './main.css'
import { Section } from '../Section/Section'
import { Description } from '../Description/Description'
import { Profile } from '../Profile/Profile'

const imgProfile = '../../../public/profile.jpeg'

export const Main = () => {
  return (
    <main>
      <Section>
        <Description />       
      </Section>
      <Section>
        <Profile img = { imgProfile } alt = 'Imagen de perfil'  />
      </Section>
    </main>
  )
}
