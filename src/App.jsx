import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails"
import Home from "./components/Home";

const App = () => {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/story/:id" element={<CardDetails/>} />
      </Routes>
    </Router>
   </>
  )
}



export default App