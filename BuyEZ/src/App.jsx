import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import HomePage from './Components/HomePage.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Shop from './Components/Shop.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import Blog from './Components/Blog.jsx';
import Contact from './Components/Contact.jsx';
import appStore from './Redux_Components/appStore.jsx';
import Cart from './Components/Cart.jsx';
import { Provider } from "react-redux";

function App() {

  return (
    
    <Provider store={appStore}>
        <BrowserRouter>
          <Header/>
              <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutUs name="About us"/> }/>
                <Route path='/shop' element={<Shop name="Products" />}/>
                <Route path='/product/:id' element={<ProductDetails />}/>
                <Route path='/cart' element={<Cart name="Cart" />}/>
                <Route path='/blog' element={<Blog name="Blogs" />}/>
                <Route path='/contact' element={<Contact name="Contact" />}/>  
              </Routes>
          <Footer/>  
        </BrowserRouter>
    </Provider>
    
  )
}

export default App
