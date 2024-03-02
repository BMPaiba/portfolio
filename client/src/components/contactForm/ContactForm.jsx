import React, { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';


export default function ContactForm() {
  const form = useRef()
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const sendEmail = (e)=> {
    e.preventDefault();
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current , PUBLIC_KEY)
    .then((response) => {
      console.log('Correo electrónico enviado con éxito:', response);
      setFormData({ user_name: '', user_email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error al enviar el correo electrónico:', error);
    });
    
  }
  return (
    <>
      <form ref={form} className={styles.form} onSubmit={sendEmail}>
        <h2>Contacto</h2>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} id="" />
        <label htmlFor="email">Email</label>
        <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} id="" />
        <label htmlFor="message">Mensaje</label>
        <textarea type="text" name="message" value={formData.message} onChange={handleChange} />
        <button onClick={sendEmail}>Enviar</button>
      </form>

    </>
  );
}
