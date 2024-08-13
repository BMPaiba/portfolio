import type { ProjectInterface } from "../interfaces";
import { SiAstro, FaReact,RiNextjsFill,RiTailwindCssFill, TbBrandRedux  } from "../components/react-icons";
import {dataProjects} from "../data"

function Card({ image, title, description, icons , link}: ProjectInterface) {

  const techs = dataProjects.filter(project => project.title === title)[0].technologies 

  const redirect = (link: string) => {
    window.open(link, "_blank");
  }

  return (
    <section className="max-w-[1000px] mx-auto">
      <div className="flex justify-between gap-6 w-full">
        <div className="flex gap-6  w-full">
          <img src={image} alt="" className="size-20 rounded-md" />
          <div className="flex flex-col gap-2   w-full">
            <h4 className="text-xl text-Green font-bold  ">
              {title}
            </h4>
            <div className="flex items-center justify-start gap-2  w-full "> 

              {techs.map(({ Icon, label, iconsStyles } , index) => (
                <div className="flex items-center justify-around border rounded-xl border-gray-500 gap-2  px-2 py-1  " key={index}>
                  <Icon className={`${iconsStyles} text-sm  first-letter:`} />
                  <p className="  text-sm">{label}</p>
                </div>
              ))}
              </div>
          </div>
        </div>
        <div>
          <button className="text-white hover:text-black border border-gray-500 hover:bg-Green px-4 py-2 rounded-xl transform transition " onClick={() => redirect(link)}>
            Preview
          </button>
        </div>
      </div>
      <p>{description}</p>
    </section>
  );
}

export default Card;
