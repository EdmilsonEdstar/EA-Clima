import { Footer } from "./Footer"
import "./index.css"
import { Pesquisar } from "./Search/Pesquisar"



function App() {


  return (
    <>
        <main className="w-full flex flex-col justify-center items-center mb-8">
          <Pesquisar  />
          <Footer/>
        </main>
      </>    
  )
}

export default App
