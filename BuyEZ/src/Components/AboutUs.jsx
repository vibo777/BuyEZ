import Banner from "./Banner";

export default function AboutUs(props) {
  return (
    <>
      <Banner/>
      <div className='banner-title'>  
        <h1>{props.name}</h1>
      </div>
    </>
  );
}
