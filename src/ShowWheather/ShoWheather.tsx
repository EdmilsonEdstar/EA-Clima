import { Droplet, LucideThermometer, Sun,  WindIcon } from "lucide-react";

export function ShoWheather() {

  return (
        <>
             <div className="w-full xl:w-[50%] flex flex-col justify-center items-center gap-3 py-8 px-2  bg-[var(--bg-color)] text-[var(--text-color)] rounded-2xl ">
                <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-[var(--text-color)]">Luanda</span>
                    <div className="flex justify-center items-center gap-2 text-4xl">
                      <Sun  size={40} fill="orange" stroke="orange" /><span className="text-[var(--text-color)]">30ºC</span> 
                    </div>
                    <span className="text-[var(--text-color)]">Céu Limpo</span>
                </div>
                <div className="flex  justify-between items-center py-4 gap-6">
                    <span className="text-[var(--text-color)]"><LucideThermometer/> 34ºc</span>
                    <span className="text-[var(--text-color)]"> <Droplet/> 10%</span>
                    <span className="text-[var(--text-color)]"> <WindIcon/> 18km/h</span>
                </div>  
             </div>
        </>
  )
}