import { Footer } from "./Footer"
import "./index.css"
import { Pesquisar } from "./Search/Pesquisar"
import { ShoWheather } from "./ShowWheather/ShoWheather"
import { ShowWheatherWeek } from "./ShowWheatherWeek/ShowWheatherWeek"


function App() {

  return (
    <>
        <main className="w-full flex flex-col justify-center items-center mb-8">
          <Pesquisar/>
        </main>
        <main className="w-full flex flex-col justify-center items-center mb-8">
          <ShoWheather/>
        </main>
        <main className="w-full flex flex-col justify-center items-center mb-8">
          <ShowWheatherWeek/>
        </main>
        <Footer/>
      </>    
  )
}

export default App
