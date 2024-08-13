import { TitleH3, Card } from "../components";
import { dataProjects } from "../data";

function Project() {
  return (
    <section className="py-40" id="projects">
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
