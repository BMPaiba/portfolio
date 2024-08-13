import { TitleH3, Card } from "../components";

function Project() {
  const dataProjects = [
    {
      title: "Full Contact TV",
      description:
        'Participé en el desarrollo del frontend de la landing page para el programa "Full Contact TV", utilizando Next.js, y Tailwind para crear una interfaz de usuario atractiva y funcional. Implementé un diseño responsivo para asegurar una experiencia óptima en dispositivos móviles y de escritorio. Además, optimicé las peticiones de YouTube integrando una base de datos MongoDB para almacenar y gestionar los datos de los videos, mejorando significativamente los tiempos de carga y la eficiencia del sitio web.',
      image: "/assets/full-contact-tv.png",
      link: "https://fullcontacttv.com.ar",
      technologies: ["Next.js", "Tailwind"],
    },
    {
      title: "Full Contact TV",
      description:
        'Participé en el desarrollo del frontend de la landing page para el programa "Full Contact TV", utilizando Next.js, y Tailwind para crear una interfaz de usuario atractiva y funcional. Implementé un diseño responsivo para asegurar una experiencia óptima en dispositivos móviles y de escritorio. Además, optimicé las peticiones de YouTube integrando una base de datos MongoDB para almacenar y gestionar los datos de los videos, mejorando significativamente los tiempos de carga y la eficiencia del sitio web.',
      image: "/assets/full-contact-tv.png",
      link: "https://fullcontacttv.com.ar",
      technologies: ["Next.js", "Tailwind"],
    },
  ];
  return (
    <section className="py-40">
      <TitleH3 title="Ultimos Proyectos" />
      <div className="flex flex-col gap-12">
        {dataProjects.map((element, index) => (
          <Card
            description={element.description}
            image={element.image}
            link={element.link}
            title={element.title}
            key={index}
          />
        ))}       
      </div>
    </section>
  );
}

export default Project;
