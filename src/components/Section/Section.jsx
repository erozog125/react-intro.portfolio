import React from 'react'

export const Section = ({ children, styles='w-full bg-white' }) => {
  return (
    <section className={styles}>
      { children }
    </section>
  )
}
