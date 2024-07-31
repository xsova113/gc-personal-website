import React from "react";
import { Card, CardContent } from "../ui/card";
import SkillLevels from "./skill-levels";
import {
  Apple,
  Database,
  Figma,
  Smartphone,
  SquareDashedBottomCode,
} from "lucide-react";

interface SkillCardProps {
  isLoad: boolean;
  setIsLoad: (value: boolean) => void;
}

const SkillCard = ({ isLoad, setIsLoad }: SkillCardProps) => {
  const [frontendProgress, setFrontendProgress] = React.useState(7);
  const [backendProgress, setBackendProgress] = React.useState(7);
  const [IOSProgress, setIOSProgress] = React.useState(7);
  const [mobileDevProgress, setMobileDevProgress] = React.useState(7);

  React.useEffect(() => {
    if (isLoad) {
      const frontendTimer = setTimeout(() => setFrontendProgress(92), 800);
      const backendTimer = setTimeout(() => setBackendProgress(72), 800);
      const IOSDevTimer = setTimeout(() => setIOSProgress(75), 800);
      const mobileDevTimer = setTimeout(() => setMobileDevProgress(72), 800);
      return () => {
        clearTimeout(frontendTimer);
        clearTimeout(backendTimer);
        clearTimeout(IOSDevTimer);
        clearTimeout(mobileDevTimer);
      };
    } else if (isLoad === false) {
      const frontendTimer = setTimeout(() => setFrontendProgress(7), 800);
      const backendTimer = setTimeout(() => setBackendProgress(7), 800);
      const webDesignTimer = setTimeout(() => setIOSProgress(7), 800);
      const mobileDevTimer = setTimeout(() => setMobileDevProgress(7), 800);
      return () => {
        clearTimeout(frontendTimer);
        clearTimeout(backendTimer);
        clearTimeout(webDesignTimer);
        clearTimeout(mobileDevTimer);
      };
    }
  }, [isLoad, setIsLoad]);

  return (
    <Card className="mt-4 w-1/1 drop-shadow-lg dark:bg-slate-950 bg-slate-50">
      <CardContent className="flex flex-col px-8 gap-6 pt-8 max-sm:pb-10">
        <SkillLevels
          label={"Frontend"}
          value={frontendProgress}
          icon={<SquareDashedBottomCode className="text-yellow-500 w-5" />}
        />
        <SkillLevels
          label={"Backend"}
          value={backendProgress}
          icon={<Database className="text-yellow-500 w-5" />}
        />
        <SkillLevels
          label={"IOS Development"}
          value={IOSProgress}
          icon={<Apple className="text-yellow-500 w-5" />}
        />
        <SkillLevels
          label={"Flutter"}
          value={mobileDevProgress}
          icon={<Smartphone className="text-yellow-500 w-5" />}
        />
      </CardContent>
    </Card>
  );
};

export default SkillCard;
