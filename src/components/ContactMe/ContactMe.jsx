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
    <div className='w-full h-96 flex flex-col items-center'>
      <form ref={refForm} action="" onSubmit={handleSubmit}>
        <div className="header-contact">
          <h2 className='text-yellow-600 text-4xl font-bold'>Contact Me</h2>          
        </div>
        <fieldset className='field-name'>
          <label className='symbol-required name' htmlFor="">Name</label>
          <input name='username' type="text" placeholder='Ej: Edwin Dev' required />
        </fieldset>
        <fieldset className='field-email'>
          <label className='symbol-required' name='email'>Email</label>
          <input placeholder='Ej: edwindev@gmail.com' type="email" name="email" id="email" required />
        </fieldset>
        <fieldset className='field-message'>
          <label className='symbol-required'>Email</label>
          <textarea maxLength="500" placeholder='type yout message' name="message" id="" cols="30" rows="10"></textarea>
        </fieldset>
        <button className='btn-send'>Send</button>
      </form>
    </div>
  )
}
