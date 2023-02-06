import { WorkItem } from "./WorkItem";
import workData from "../workData";
import useStore from "../store";
import { useRef, useEffect } from "react";

export function Work() {
  const setWorkRef = useStore((state) => state.setWorkRef);
  const ref = useRef(null);

  useEffect(() => {
    setWorkRef(ref);
  }, []);

  return (
    <div className="work" ref={ref}>
      <div className="work__title">Work and experience</div>
      <div className="work__list">
        {workData.map((workItem) => (
          <WorkItem
            key={workItem.id}
            title={workItem.title}
            image={workItem.image}
            github={workItem.github}
            live={workItem.live}
            techStack={workItem.techStack}
            description={workItem.description}
          />
        ))}
      </div>
    </div>
  );
}
