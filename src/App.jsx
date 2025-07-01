import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Homepage from "./pages/Homepage"


function App() {

  return (
    <>
    <NavBar />
    <div className="pt-[120px] max-w-7xl mx-auto">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      
    </div>
    
    </>
  )
}

export default App
