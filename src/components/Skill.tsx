// Skill.tsx
import React from 'react';

interface SkillProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // Tipo para el ícono
  label: string; // Etiqueta del skill
  iconsStyles?: string; // Estilos opcionales para el ícono
}

const Skill: React.FC<SkillProps> = ({ Icon, label, iconsStyles }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <Icon className={`${iconsStyles} text-7xl `} />
      <p>{label}</p>
    </div>
  );
};

export default Skill;