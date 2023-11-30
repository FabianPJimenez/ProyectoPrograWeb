import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import  Login from './components/login/login';
import Notes from './components/notes/notes';
import Registrar from './components/registrar/registrar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registrar" element={<Registrar/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/notes" element={<Notes/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
