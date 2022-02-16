import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import initfireApp from './Firebase/firebase.init';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/Dashboard-home/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import Shop from './Pages/Shop/Shop';

initfireApp()
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route path="/dashboard" element={
                  <Dashboard />
                }>
                  <Route exact path="/dashboard/dashboardhome" element={
                    <DashboardHome>
                      
                  </DashboardHome>}>
                </Route>
              
              <Route path={`/dashboard/makeAdmin`} element={
                  <MakeAdmin/>
                }>
              </Route>
              <Route path={`/dashboard/addproduct`} element={
                  <AddProducts/>
                }>
              </Route>
            </Route>
        </Routes>
      </BrowserRouter>
      <Shop></Shop>
      </div>

    )
  } 
  
  export default App;