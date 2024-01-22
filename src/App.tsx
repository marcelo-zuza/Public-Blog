import { Route, BrowserRouter, Routes } from "react-router-dom"
//Routes
import Index from "./routes/Index"
import Post from "./routes/Post"
import Teste from "./routes/Teste"




const App = () => {
  return (
    <div className="bg-sky-600 font-sans pb-0">
      <h1 className="text-5xl py-4 md:py-8 text-white text-center">Blog da Amizade</h1>
      <h1 className="text-xl md:text-2xl py-1 md:py-4 text-white text-center">Leia sobre as novidades do mundo corporativo e fique por dentro de tudo</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/post/" element={<Post />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App