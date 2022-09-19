import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import {BrowserRouter, Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
           <Routes>
               <Route path ="/" element={<HomePage/>}/>
               <Route path = "/employeePage" element={<MainPage/>}/>
               
           </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
