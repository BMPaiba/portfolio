import React from 'react'
import {ButtonComponent } from '../components'
import {FaGithub,FaLinkedin,MdAlternateEmail} from '../components/react-icons'

function Hero() {
  return (
    <section className="w-full lg:py-32 flex justify-around items-center" id='home'>
    <div
      className="flex flex-wrap md:flex-nowrap w-full items-center justify-center md:gap-12"
    >
      <img
        src="/assets/img-animada-computer.png"
        alt="frontend developer"
        className="size-40 md:size-52 max-md:my-6"
      />
      <div className="flex flex-col items-start m-auto gap-2 p-4 md:p-2 lg:p-0">
        <a
          href="https://linkedin.com/in/brian-m-paiba"
          target="_blank"
          rel="noopener"
          className="flex items-center transition md:justify-center md:hover:scale-105"
        >
          <p className='bg-green-100 text-green-800 text-xs font-bold me-2 px-2.5 py-1 rounded-xl dark:bg-green-900 dark:text-green-300 hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out'>Disponible para trabajar</p>
        </a>
        <h1
          className="text-white text-4xl md:text-6xl font-bold flex justify-center flex-row"
        >
          Hey, soy Brian <div className="flex justify-center items-center"></div>
        </h1>
        <h2 className="text-Green text-2xl md:text-3xl font-bold">
          {"< "}Front-End Developer{" />"}
        </h2>
        <p className="md:max-w-lg text-lg py-2">
          Desarrollador frontend apasionado por crear experiencias de usuario
          intuitivas y atractivas. De Buenos Aires, Argentina.
        </p>
        <div className="flex flex-wrap gap-4">
         <ButtonComponent Icon={FaGithub} label="GitHub" iconsStyles='text-[#fff]'/>
         <ButtonComponent Icon={FaLinkedin} label="LinkedIn" iconsStyles='text-[#fff]'/>
         <ButtonComponent Icon={MdAlternateEmail} label="Contáctame" iconsStyles='text-[#fff]'/>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Hero