import { Sun } from "lucide-react";

export function ShowWheatherWeek() {

  return (
        <>
             <div className="w-full flex justify-center items-center overflow-y-auto text-center gap-[4rem] py-8 px-4  bg-gray-100/30 rounded-2xl ">
                <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-gray-500">Seg</span>
                    <div className="flex justify-center items-center gap-2 text-xl">
                      <Sun  size={20} fill="yellow" stroke="orange" /><span className="text-gray-500">30ºC</span> 
                    </div>
                    <span className="text-gray-500">Céu Limpo</span>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-gray-500">Ter</span>
                    <div className="flex justify-center items-center gap-2 text-xl">
                      <Sun  size={20} fill="yellow" stroke="orange" /><span className="text-gray-500">30ºC</span> 
                    </div>
                    <span className="text-gray-500">Céu Limpo</span>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-gray-500">Qua</span>
                    <div className="flex justify-center items-center gap-2 text-xl">
                      <Sun  size={20} fill="yellow" stroke="orange" /><span className="text-gray-500">30ºC</span> 
                    </div>
                    <span className="text-gray-500">Céu Limpo</span>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-gray-500">Qui</span>
                    <div className="flex justify-center items-center gap-2 text-xl">
                      <Sun  size={20} fill="yellow" stroke="orange" /><span className="text-gray-500">30ºC</span> 
                    </div>
                    <span className="text-gray-500">Céu Limpo</span>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-gray-500">Sex</span>
                    <div className="flex justify-center items-center gap-2 text-xl">
                      <Sun  size={20} fill="yellow" stroke="orange" /><span className="text-gray-500">30ºC</span> 
                    </div>
                    <span className="text-gray-500">Céu Limpo</span>
                </div>
             </div>
        </>
  )
}