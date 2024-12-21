import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import CardDetails from "./components/CardDetails"

const App = () => {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        
        <Route path="/story/:id" element={<CardDetails/>} />
      </Routes>
    </Router>
   </>
  )
}



export default App