import { Droplet, Sun, Thermometer, WindIcon } from "lucide-react";

export function ShoWheather() {

  return (
        <>
             <div className="w-full flex flex-col justify-center items-center gap-3 py-8  bg-gray-100/30 rounded-2xl ">
                <div className="flex flex-col justify-center items-center gap-2">
                    <span className="text-gray-500">Luanda</span>
                    <div className="flex justify-center items-center gap-2 text-4xl">
                      <Sun  size={40} fill="yellow" stroke="orange" /><span className="text-gray-500">30ºC</span> 
                    </div>
                    <span className="text-gray-500">Céu Limpo</span>
                </div>
                <div className="flex justify-center flex-wrap items-center gap-6">
                    <span className="text-gray-500">Sen. Térmica: <Thermometer/> 34ºc</span>
                    <span className="text-gray-500">Umidade: <Droplet/> 10%</span>
                    <span className="text-gray-500">Vento: <WindIcon/> 18 km/h</span>
                </div>  
             </div>
        </>
  )
}