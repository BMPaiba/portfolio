// Skill.tsx
import React from 'react';
import type { SkillType } from '../interfaces';


const Skill: React.FC<SkillType> = ({ Icon, label, iconsStyles }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <Icon className={`${iconsStyles} text-7xl `} />
      <p>{label}</p>
    </div>
  );
};

export default Skill;