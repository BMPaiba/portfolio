import React, { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <>
      <div className={styles.form}>
        <h2>Contacto</h2>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="" id="" />
        <label htmlFor="email">Email</label>
        <input type="text" name="" id="" />
        <label htmlFor="mensaje">Mensaje</label>
        <textarea type="text" name="mensaje" />
        <button>Enviar</button>
      </div>
    </>
  );
}
