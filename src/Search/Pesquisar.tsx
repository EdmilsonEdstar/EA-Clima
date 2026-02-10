import { SearchIcon } from "lucide-react"

export function Pesquisar() {

  return (
        <>
            <label htmlFor="search" className="text-2xl pb-2"></label>
          
             <div className="w-full flex justify-center items-center gap-1 px-8  bg-gray-100/70 rounded-2xl ">
                <span><SearchIcon className="text-gray-500" /></span>
                <input type="text" id="search" placeholder="Degite a cidade" className="h-[4rem] w-[10rem] text-base focus:outline-none" />
                <button className="bg-blue-400 text-white p-2 rounded-4xl">Pesquisar</button>
             </div>
        </>
  )
}