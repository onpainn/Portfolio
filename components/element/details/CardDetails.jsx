import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../../container/portfolio/project.data";

export function CardDetails() {
  const { id } = useParams();
  const details = useMemo(() => {
    return PROJECTS.find((item) => item.title === id);
  }, [id]);
  return (
    <div className="bg-white dark:bg-neutral-600 text-black h-screen dark:text-white">
      <div className="dark:text-white flex flex-wrap justify-center animate-fadeIn">
        <img
          src={details.banner}
          className="p-2 w-150 object-cover rounded-2xl"
        />
        <div className="p-2">
          <h1>{details.title}</h1>
          <span className="text-black/50 dark:text-white/50">
            {details.skills.join(" ")}
          </span>
          <p className=" py-5 max-w-xl">{details.descriptions}</p>
          <div className="w-full">
          <a
            className=" bg-neutral-100 rounded-lg p-4 dark:bg-neutral-700 cursor-pointer"
            target="_blank"
            href={details.links}
          >
            Link on project
          </a>
        </div>
        </div>
        
      </div>
    </div>
  );
}
