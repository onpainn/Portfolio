import { memo } from "react"
import { Portfolio } from "../../components/container/portfolio/Portfolio"
import  HeroPage  from '../../components/container/hero/HeroPage' 


function PortfolioMain() {

  return (
    <div className="bg-white dark:bg-neutral-600 h-full sm:h-screen" >
      <div className=" animate-fadeIn">
        <HeroPage />
        <Portfolio />
      </div>
      
      <footer className="py-10 px-2"></footer>
    </div>
  )
}

export default memo(PortfolioMain)
