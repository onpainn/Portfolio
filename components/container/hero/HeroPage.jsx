import { memo } from "react"

function HeroPage() {
    return (
    <main className="p-2 flex flex-col justify-center items-center">
        <img className="w-40 border-black/50 dark:border-white/50 rounded-full border-1 p-2" src="public\avatar.jpg" title="Roman Zhurov"/>
        <div className="py-4 text-center  dark:text-white">
           <h2 className="">Roman Zhurov</h2>
           <p className="dark:text-white/50">Frontend Developer</p>
           <div>
            <h3>About me</h3>
            <div className="bg-neutral-100 dark:bg-neutral-700 p-2 rounded-lg max-w-90">
                <p>Hi, I'm Roma, I position myself as a frontend developer, I love something creative and interesting. I do the design for my sites myself.</p>
            </div>
           </div>
        </div>
        
    </main>
    )
}
export default memo(HeroPage)
