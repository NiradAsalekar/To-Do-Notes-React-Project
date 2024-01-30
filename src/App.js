import  './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Form from "./Components/Form";
import Home from './Components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Update from './Components/Update';
import Delete from './Components/Delete';


function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/update/:taskID/" element={<Update/>}/>
          <Route path="/delete/:taskID/" element={<Delete/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
