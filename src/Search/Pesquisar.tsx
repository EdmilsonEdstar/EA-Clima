import {SearchIcon } from "lucide-react"

export function Pesquisar() {

  return (
        <>
            <label htmlFor="search" className=" flex text-2xl pb-2 text-[var(--text-color)] font-bold">EA-Wheather</label>
          
             <div className="w-full xl:w-[50%] flex justify-between items-center gap-2 px-8  bg-[var(--bg-color)] text-[var(--text-color)] rounded-2xl ">
                <span><SearchIcon className="text-[var(--text-color)]" /></span>
                <input type="text" id="search" placeholder="Degite a cidade" className="h-[4rem] w-[10rem] text-sm focus:outline-none" />
                <button className="bg-[var(--bt-color)] text-white px-3 py-2  rounded-2xl text-sm xl:text-center">Pesquisar</button>
             </div>
        </>
  )
}