import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import HomePage from './Components/HomePage.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Shop from './Components/Shop.jsx';
import Blog from './Components/Blog.jsx';
import Contact from './Components/Contact.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>  
          </Routes>
        <Footer/>  
      </BrowserRouter>
    </>
  )
}

export default App
