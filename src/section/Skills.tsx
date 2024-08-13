import React from "react";
import {
  SiAstro,
  SiJavascript,
  FaReact,
  SiTypescript,
  SiFramer,
  TbBrandRedux,
  FaDocker,
  FaGitSquare,
  FaHtml5,
  IoLogoCss3,
  RiNextjsFill,
  RiTailwindCssFill,
} from "../components/react-icons";
import { Skill} from "../components";
import { TitleH3 } from "../components";
function SkillSection() {
  return (
    <section className="" id="skills" >
      <TitleH3 title="Habilidades Tecnicas"/>
      <div className="flex items-center justify-center flex-wrap max-w-[800px] gap-12">
      <Skill Icon={FaHtml5} label="HTML" iconsStyles="text-[#f4460a]" />
      <Skill Icon={IoLogoCss3} label="CSS" iconsStyles="text-[#129CD8]" />
      <Skill Icon={SiJavascript} label="Javascript" iconsStyles="text-[#EFD81D]" />
      <Skill Icon={SiTypescript} label="Typescript" iconsStyles="text-[#2F74C0]" />
      <Skill Icon={FaReact} label="ReactJS" iconsStyles="text-[#00D1F7]" />
      <Skill Icon={RiNextjsFill} label="NextJS" iconsStyles="text-[#000]" />
      <Skill Icon={SiAstro} label="Astro" iconsStyles="text-[#fff]" />
      <Skill Icon={RiTailwindCssFill} label="Tailwind" iconsStyles="text-[#36B7F0]" />
      <Skill Icon={SiFramer} label="Framer Motion" iconsStyles="text-[#000] " />
      <Skill Icon={TbBrandRedux} label="Redux" iconsStyles="text-[#7248B6]" />
      <Skill Icon={FaDocker} label="Docker" iconsStyles="text-[#2391E7]" />
      <Skill Icon={FaGitSquare} label="Git" iconsStyles="text-[#E94E31]" />
      </div>
    </section>
  );
}

export default SkillSection;
