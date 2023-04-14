import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { styles } from '../styles';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map ((techtnology) => (
        <div className="w-28 h-28" key={techtnology.name}>
          <BallCanvas icon={techtnology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper (Tech, "technologies");