import type { ProjectInterface } from "../interfaces";
import { SiAstro } from "../components/react-icons";

function Card({ image, title, description, icons }: ProjectInterface) {
  const tech = [
    {
      Icon: SiAstro,
      label: "Astro",
      iconsStyles: "text-[#00D1F7]",
    },
  ];
  return (
    <section className="max-w-[1000px] mx-auto">
      <div className="flex justify-between gap-6">
        <div className="flex gap-6">
          <img src={image} alt="" className="size-20 rounded-md" />
          <div className="flex flex-col gap-2">
            <h4 className="text-xl text-Green font-bold hover:scale-105 hover:cursor-pointer transform transition">
              {title}
            </h4>
              {tech.map(({ Icon, label, iconsStyles } , index) => (
                <div className="flex items-center justify-around border rounded-xl border-gray-500 w-24 px-2 py-1" key={index}>
                  <Icon className={`${iconsStyles} text-sm  first-letter:`} />
                  <p className="  text-sm">{label}</p>
                </div>
              ))}
          </div>
        </div>
        <div>
          <button className="text-white hover:text-black border border-gray-500 hover:bg-Green px-4 py-2 rounded-xl transform transition ">
            Preview
          </button>
        </div>
      </div>
      <p>{description}</p>
    </section>
  );
}

export default Card;
