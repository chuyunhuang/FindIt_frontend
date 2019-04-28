import React from 'react';
import { Link } from 'react-router-dom';


const ClaimAction = (props) => {
  return (
    <>
    <div>
      <h1 style={{textAlign: 'center', marginTop: '100px'}}>Choose Option to Claim Your Item</h1>
      <div className="btn-wrapper" style={{display:'flex', justifyContent: 'center'}}>
      <Link to="/pickup" className="left" style={{paddingRight: '10px', paddingTop: '20px'}}>
        <button class="btn btn-primary btn-lg btn-danger" style={{width: '205px'}}  >
          Pick-Up 
        </button>
      </Link>
      <a href="https://www.fedex.com/login/web/jsp/logon.jsp" className="right" style={{paddingLeft: '10px', paddingTop: '20px'}}>
        <button class="btn btn-primary btn-lg" style={{width: '205px'}}>
          Ship It via FedEx
        </button>
      </a>
    </div>
    </div>
    </>
  )
}

export default ClaimAction;