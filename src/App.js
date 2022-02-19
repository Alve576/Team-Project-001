import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/Dashboard-home/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import initfireApp from './Firebase/firebase.init';
import Shop from './Pages/Shop/Shop';
import Foods from './Pages/Foods/Foods';
import Electronics from './Pages/Electronics/Electronics';
import Clothes from './Pages/Clothes/Clothes';
import Recipes from './Pages/Recipes/Recipes';
import Home from './Pages/Home/Home';
import SingleRecipe from './Pages/SingleRecipe/SingleRecipe';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import AuthProvider from './Context/AuthProvider'
import SingleFood from './Pages/SingleFood/SingleFood';
import SingleElectronic from './Pages/SingleElcetronic/SingleElectronic';
import SingleCloth from './Pages/SingleCloth/SingleCloth';
import Navbar from './Components/Navbar'
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';

initfireApp()
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            <Route exact path ='/' element={<Home/>}/>
            <Route exact path ='/home' element={<Home/>}/>

            <Route path='/shop' element={
                <Shop />}>

                <Route exact path="/shop/recipes" element={<Recipes></Recipes>} />
                <Route exact path="/shop/foods" element={<Foods></Foods>} />
                <Route exact path="/shop/electronics" element={<Electronics></Electronics>} />
                <Route exact path="/shop/clothes" element={<Clothes></Clothes>} />
                
            </Route>

            <Route path="/singleRecipe/:recipeId" element={<SingleRecipe></SingleRecipe>} />
            <Route path="/singleFood/:foodId" element={<SingleFood/>} />
            <Route path="/singleElectronic/:electronicId" element={<SingleElectronic/>} />
            <Route path="/singleCloth/:clothId" element={<SingleCloth/>} />

            <Route path='/aboutUs' element={<AboutUs></AboutUs>} />
            <Route path='/contactUs' element={<ContactUs></ContactUs>} />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />

            <Route path="/dashboard" element={
              <PrivetRoute><Dashboard /></PrivetRoute>
            }>
              <Route exact path="/dashboard/dashboardhome" element={
                <DashboardHome/>}>
              </Route>

              <Route path={`/dashboard/makeAdmin`} element={
                <MakeAdmin />
              }>
              </Route>
              <Route path={`/dashboard/addproduct`} element={
                <AddProducts />
              }>
              </Route>
            </Route>

          </Routes>
        </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;