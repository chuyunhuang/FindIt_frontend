import React from 'react';
import {Link} from 'react-router-dom';

class PickUp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      claim_id: '',
      pickup_location: ''
    }
  }

  render(){
    return (
      
      <>
    <div>
      <h1 style={{textAlign: 'center', marginTop: '100px'}}>Claim ID: 1</h1>
      <h2 style={{textAlign: 'center'}}>FedEx Pick-up Location: 34th Penn </h2>
      <h4 style={{textAlign: 'center'}}>To claim your lost item, please bring a valid government issued photo ID.</h4>
    
      <div style={{textAlign: 'center', marginTop: '100px'}}>
        <a href="https://www.fedex.com/login/web/jsp/logon.jsp">
          <button className="btn btn-primary btn-lg" style={{width: '405px', textAlign: 'center'}}>
            Nevermind, I want it shipped via FedEx
          </button>
        </a>
      </div>
    </div>
   
    </>

    
    )
  }
}

export default PickUp;