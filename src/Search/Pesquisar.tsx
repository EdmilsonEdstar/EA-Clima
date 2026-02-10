import { SearchIcon } from "lucide-react"

export function Pesquisar() {

  return (
        <>
            <label htmlFor="search" className="text-2xl pb-2"></label>
          
             <div className="w-full flex justify-between items-center gap-2 px-8  bg-[var(--bg-color)] text-[var(--text-color)] rounded-2xl ">
                <span><SearchIcon className="text-gray-500" /></span>
                <input type="text" id="search" placeholder="Degite a cidade" className="h-[4rem] w-[10rem] text-sm focus:outline-none" />
                <button className="bg-blue-400/80 text-white px-3 py-2  rounded-2xl text-sm">Pesquisar</button>
             </div>
        </>
  )
}