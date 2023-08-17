import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactMe = () => {

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const serviceId = "service_psfw045";
    const templateId = "template_sudeks8";    
    const apikey = "Zjo6mNYvNam9PYTZC"

    emailjs.sendForm(serviceId, templateId,refForm.current,apikey)
    .then( result => console.log(result.text))
    .catch( error => console.error(error) )
  }

  return (
    <div className='w-full flex items-center justify-center p-6'>
      <div className='w-1/2 flex justify-center items-center'>
        <img className='p-6 w-96 h-96 object-cover' src="https://res.cloudinary.com/erpersonalprojects/image/upload/v1692241354/Me_cczvfx.jpg" alt="Profile" />
      </div>
      <form className='w-96 h-full p-4 flex flex-col items-center mt-4 border-double bg-slate-800 rounded-2xl text-black' ref={refForm} action="" onSubmit={handleSubmit}>
        <div className="w-full p-2">
          <h2 className='text-yellow-600 text-4xl font-bold'>Contact Me</h2>          
        </div>
        <fieldset className='w-full p-2'>
          <label className='symbol-required name text-white' htmlFor="">Name</label>
          <input className='w-full rounded-md px-2' name='username' type="text" placeholder='Ej: Edwin Dev' required />
          <label className='symbol-required text-white' name='email'>Email</label>
          <input className='w-full rounded-md px-2' placeholder='Ej: edwindev@gmail.com' type="email" name="email" id="email" required />
        </fieldset>        
        <fieldset >
          <label className='text-white symbol-required'>Email</label>
          <textarea className='w-full p-2 rounded-sm' maxLength="500" placeholder='type yout message' name="message" id="" cols="30" rows="10"></textarea>
        </fieldset>
        <button className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>Send</button>
      </form>
    </div>
  )
}
