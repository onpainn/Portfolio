import { ExternalLink } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

function CardPortfolio({banner, title, skills} ) {
    return (
    <div className="relative w-full h-70 sm:w-70 sm:h-57 p-2 bg-neutral-100 dark:bg-neutral-700 rounded-sm duration-300 ease-in-out hover:shadow-2xl">
        <div className="flex justify-between items-start">
            <div className="pb-2">
                <h2 className="dark:text-white h-5 text-black">{title}</h2>
                <p className="text-black/50 dark:text-white/50" >{skills.join(' ')}</p>
            </div>
            <Link to={`/project/${title}`} className="cursor-pointer  dark:text-white"><ExternalLink /></Link>
        </div>
        <img className="w-full h-53 object-cover rounded-sm sm:h-40 sm:w-70" src={banner} />
    </div>
)
}
export default memo(CardPortfolio)
