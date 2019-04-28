import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Image/findIt.jpg'
import Nyc from './Image/nyc.jpg'
import '../Container/Style/home.css';



const Home = (props) => {
  return (
    <>
    <div className='tiledBackground'>
   
    <div>
      <div>
        <img src={logo} alt="logo" className="rounded mx-auto d-block"
        style={{width: '500px', padding: '20px'}} /> 
      </div>

      <div style={{textAlign:'center', fontStyle: 'italic'}}>
        <h2>A simpler solution to get your lost item back in NYC!</h2>
      </div>
      <div className="btn-wrapper" style={{display:'flex', justifyContent: 'center'}}>
      <Link to="/lost" className="left" style={{paddingRight: '10px', paddingTop: '20px'}}>
        <button class="btn btn-primary btn-lg btn-danger"  >
          I LOST SOMETHING
        </button>
      </Link>
      <Link to="/found" className="right" style={{paddingLeft: '10px', paddingTop: '20px'}}>
        <button class="btn btn-primary btn-lg">
          I FOUND SOMETHING
        </button>
      </Link>
    </div>
   
  

    </div>
    </div>
 
    </>
  )
}

export default Home