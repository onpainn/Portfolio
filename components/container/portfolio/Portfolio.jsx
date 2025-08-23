import CardPortfolio from "../../element/card/CardPortfolio";
import { PROJECTS } from "./project.data";

export function Portfolio() {
    const notFound = `no projects yet`
    return (
    <div className="flex row-end-3 flex-wrap gap-5 p-2 flex-row justify-center">
        {PROJECTS.length ? (PROJECTS.map(items => (<CardPortfolio key={items.title} {...items} />))) : (<p className="dark:text-white">{notFound}</p>)}
    </div>
    )
}
