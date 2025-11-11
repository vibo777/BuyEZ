import Banner from './Banner';
import { useState,React } from 'react';

export default function Contact(props) {

  let [details, setDetails] = useState({
    name:"",
    email:"",
    message:""
  }); 

  const handleInput=(event)=>{
    setDetails((prevObj) => {
      return { ...prevObj, [event.target.name]: event.target.value};
    });
  }

  const handleSubmit=(event)=>{
    console.log(details);
  }

  return (
    <div>
      <Banner/>
      <div className='banner-title'>
        <h1>{props.name}</h1>
      </div> 

      <div className='contact-header'>
        <h2 className='contact-title'>Get In Touch With Us</h2>
        <p className='sub-title'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>
      
      <div className="form-container">
        <div className="left">
          <div className="info">
            <div className="item">
              <div className="logo">
                <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z"></path></svg>
              </div>
              <div className="details">
                <h3>Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="item">
              <div className="logo">
              <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"></path></svg>
              </div>
              <div className="details">
                <h3>Phone</h3>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="item">
              <div className="logo">
                <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M1024 544v448q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-352q0-14 9-23t23-9h64q14 0 23 9t9 23zm416 352q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path></svg>
              </div>
              <div className="details">
                <h3>Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday & Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
            <form className='contact-form' onSubmit={handleSubmit}>
              <label>Name</label>
              <input 
              type="text" 
              name="name"
              placeholder='Enter your name'
              value={details.name}
              onChange={handleInput}
              />

              <label>Email</label>
              <input 
              type="email" 
              name="email"
              placeholder='Enter your email'
              value={details.email} 
              onChange={handleInput}
              />
              
              <label>Message</label>
              <textarea rows="6" 
              name="message"
              placeholder='Type your message here' 
              value={details.message}
              onChange={handleInput}
              ></textarea>
              <button type='submit' className='contact-btn'>Send Message</button>
            </form>
        </div>
      </div>
    </div>
  )
}
