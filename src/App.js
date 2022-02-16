import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import initfireApp from './Firebase/firebase.init';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';


initfireApp()
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
