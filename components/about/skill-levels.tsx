import React from "react";
import { Progress } from "../ui/progress";
import { Label } from "../ui/label";

interface SkillLevelsProps {
  label: string;
  value: number;
  icon: React.ReactNode;
}

const SkillLevels = ({ label, value, icon }: SkillLevelsProps) => {
  return (
    <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-2">
      <Label className="text-muted-foreground flex items-center gap-2">
        {icon}
        {label}
      </Label>
      <Progress value={value} className="w-2/3 h-2 max-md:w-full" />
    </div>
  );
};

export default SkillLevels;
