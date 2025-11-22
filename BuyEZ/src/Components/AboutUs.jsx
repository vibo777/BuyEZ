import Banner from "./Banner";
import {Link} from 'react-router-dom';
export default function AboutUs(props) {
  return (
    <>
      <Banner/>
      <div className='banner-title'>  
        <h1>{props.name}</h1>
      </div>
      <div className="container">
      <div className="row about-us-section">
        <div className="col-6 about-us-mission">
          <h1>01</h1>
          <h3>Our Mission</h3>
          <p>
            At BuyEZ, our mission is to provide a seamless and enjoyable online shopping experience for our customers. We strive to offer a wide range of high-quality products at competitive prices, ensuring that our customers can find everything they need in one convenient place. We are committed to exceptional customer service, fast shipping, and a user-friendly platform that makes shopping easy and fun.
          </p>    
          <ul className="about-us-features">
            <li>Wide Range of Products</li>
            <li>Competitive Prices</li>
            <li>Exceptional Customer Service</li>
            <li>Fast and Reliable Shipping</li>
          </ul>
          <Link to="/contact">
            <button className="about-us-button">Contact Us</button>
          </Link>
        </div>
        <div className="col-1"></div>
        <div className="col-5 about-us-image">
        </div>
      </div>
    </div>
    </>
  );
}
