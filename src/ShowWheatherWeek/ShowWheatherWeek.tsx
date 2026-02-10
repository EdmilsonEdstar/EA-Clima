import { Moon, Sun } from "lucide-react";

export function ShowWheatherWeek() {

  return (
        <>
             <div className="w-full xl:w-[50%] flex justify-between items-center overflow-y-auto text-center gap-16 py-8 px-8 bg-[var(--bg-color)] text-[var(--text-color)] rounded-2xl ">
                <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-[var(--text-color)] font-bold text-xl">Seg</span>
                    <div className="flex justify-center items-center gap-2 text-xl">
                      <Sun  size={20} fill="orange" stroke="orange" /><span className="text-[var(--text-color)]">30ºC</span> 
                    </div>
                    <span className="text-[var(--text-color)]">Céu Limpo</span>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-[var(--text-color)] font-bold text-xl">Ter</span>
                    <div className="flex justify-center items-center gap-2 text-xl">
                      <Moon  size={20} fill="#f1ecec" stroke="#dedee7" /><span className="text-[var(--text-color)]">30ºC</span> 
                    </div>
                    <span className="text-[var(--text-color)]">Céu Limpo</span>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-[var(--text-color)] font-bold text-xl">Qua</span>
                    <div className="flex justify-center items-center gap-2 text-xl">
                      <Sun  size={20} fill="orange" stroke="orange" /><span className="text-[var(--text-color)]">30ºC</span> 
                    </div>
                    <span className="text-[var(--text-color)]">Céu Limpo</span>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-[var(--text-color)] font-bold text-xl">Qui</span>
                    <div className="flex justify-center items-center gap-2 text-xl">
                      <Sun  size={20} fill="orange" stroke="orange" /><span className="text-[var(--text-color)]">30ºC</span> 
                    </div>
                    <span className="text-[var(--text-color)]">Céu Limpo</span>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-[var(--text-color)] font-bold text-xl">Sex</span>
                    <div className="flex justify-center items-center gap-2 text-xl">
                      <Sun  size={20} fill="orange" stroke="orange" /><span className="text-[var(--text-color)]">30ºC</span> 
                    </div>
                    <span className="text-[var(--text-color)]">Céu Limpo</span>
                </div>
             </div>
        </>
  )
}