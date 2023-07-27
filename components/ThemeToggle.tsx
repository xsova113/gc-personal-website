import { useTheme } from "next-themes";
import Image from "next/image";
import { Link } from "react-scroll";

const ThemeToggle = () => {
  const mode = useTheme();
  return (
    <Link
      to="home"
      className="relative w-16 h-16 hover:scale-125 transition cursor-pointer"
      smooth
    >
      {mode.theme === "dark" ? (
        <Image
          src={"/images/logo-gold.png"}
          alt={"logo"}
          fill
          priority
          className="object-contain"
        />
      ) : mode.theme === "system" ? (
        <Image
          src={"/images/logo-gold.png"}
          alt={"logo"}
          fill
          priority
          className="object-contain"
        />
      ) : (
        <Image
          src={"/images/logo-black.png"}
          alt={"logo"}
          fill
          priority
          className="object-contain"
        />
      )}
    </Link>
  );
};

export default ThemeToggle;
