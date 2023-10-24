import './App.css'
import { Routes,Route } from "react-router-dom";
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Blog from './Components/Blog';
import Blogpost from './Components/Blogpost';
import Write from './Components/Write';

function App() {

  return (
    <Routes>
        <Route path="/register" element={<Register/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/" element={<Home/>} >
          <Route path=':id' element={<Blogpost/>}/>
          <Route path='write' element={<Write/>}/>
          <Route index element={<Blog/>}/>
        </Route> 
      </Routes>
  )
}

export default App
