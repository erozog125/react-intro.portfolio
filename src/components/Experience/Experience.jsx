import React, { useState } from 'react'

export const Experience = () => {

  const styleButtons = 'bg-blue-950 text-white hover:bg-sky-500 m-2 w-12 h-12'
  
  const experiences = [
    {title: 'Cognitus', img: '../../public/Images/Cognitus.jpg'},
    {title: 'Perfiltic', img: '../../public/Images/Perfiltic.jpg'},
    {title: 'Sena', img: '../../public/Images/Sena.jpg'}
  ]

  const [imageCard, setImageCard] = useState(experiences[2].img)
  const [titleCard, setTitleCard] = useState(experiences[2].title)

  const handleXp1 = () => {
    setImageCard(experiences[0].img)
    setTitleCard(experiences[0].title)
  }

  const handleXp2 = () => {
    setImageCard(experiences[1].img)
    setTitleCard(experiences[1].title)
  }

  const handleXp3 = () => {
    setImageCard(experiences[2].img)
    setTitleCard(experiences[2].title)
  }

  return (
    <section className='w-full h-auto flex justify-center items-center bg-white'>
      <div className="w-4/5 h-96 bg-black flex justify-center items-center object-cover">
        <img className="w-4/5 h-96 m-4 rounded-none" id="img-experience" src={imageCard} alt={titleCard} />
      </div>
      <div className="w-full h-1/5 flex justify-center">
        <button className={styleButtons} onClick={handleXp3}>1</button>
        <button className={styleButtons} onClick={handleXp2}>2</button>
        <button className={styleButtons} onClick={handleXp1}>3</button>
      </div>
    </section>
  )
}
