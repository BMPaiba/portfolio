import { SiAstro, FaReact,RiNextjsFill,RiTailwindCssFill,SiFramer, TbBrandRedux  } from "../components/react-icons";

export const dataProjects = [
  {
    title: "Full Contact TV",
    description:
      'Participé en el desarrollo del frontend de la landing page para el programa "Full Contact TV", utilizando Next.js, y Tailwind para crear una interfaz de usuario atractiva y funcional. Implementé un diseño responsivo para asegurar una experiencia óptima en dispositivos móviles y de escritorio. Además, optimicé las peticiones de YouTube integrando una base de datos MongoDB para almacenar y gestionar los datos de los videos, mejorando significativamente los tiempos de carga y la eficiencia del sitio web.',
    image: "/assets/full-contact-tv.png",
    link: "https://fullcontacttv.com.ar/",
    technologies: [
      {
        Icon: RiNextjsFill,
        label: "NextJS",
        iconsStyles: "text-[#fff]",
      },
      {
        Icon: RiTailwindCssFill,
        label: "Tailwind",
        iconsStyles: "text-[#36B7F0]",
      },
      {
        Icon: SiFramer,
        label: "Framer Motion",
        iconsStyles: "text-[#fff]",
      },
    ],
  },
  {
    title: "Matrix App Mobile",
    description:
      "Mejoré considerablemente la experiencia de usuario del frontend de una aplicación móvil ya existente, utilizando React Native. Optimicé el rendimiento y la fluidez de la interfaz. Implementé un diseño más intuitivo y moderno, mejorando la navegación y la interacción del usuario. Añadí animaciones y transiciones suaves para una experiencia más atractiva.",
    image: "/assets/matrix.png",
    link: "https://play.google.com/store/apps/details?id=com.p4troy.Matrix&hl=es_AR",
    technologies: [
      {
        Icon: FaReact,
        label: "React Native",
        iconsStyles: "text-[#00D1F7] ",
      },
    ],
  },
  {
    title: "Charlie Web App ",
    description:
      'Este proyecto implica la creación de una plataforma web móvil que permite a discotecas ofrecer ventas online. La solución incluye integración de sistemas de pago, autenticación segura, gestión de inventario y visualización de productos mediante una interfaz amigable y responsive. Se enfoca en proporcionar una experiencia de compra segura y conveniente para los usuarios, adaptada específicamente para las necesidades del sector de entretenimiento nocturno.',
    image: "/assets/charlie.png",
    link: "https://www.youtube.com/watch?v=LbkMOQ-xVGk&feature=youtu.be",
    technologies: [
      {
        Icon: FaReact,
        label: "ReactJS",
        iconsStyles: "text-[#00D1F7]",
      },
      {
        Icon: TbBrandRedux,
        label: "Redux",
        iconsStyles: "text-[#7248B6]",
      },
    ],
  },
];
