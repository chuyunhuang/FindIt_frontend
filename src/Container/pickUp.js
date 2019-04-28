import React from 'react';
import item from '../Context/item'

class PickUp extends React.Component{
  constructor(props){
    super(props)
    this.state={
    context: []
    }
  }

  static contextType = item

  componentDidMount(){
    if(this.context.length > 0){
    this.setState({context: this.context})
    }
  }

  render(){
    return (
      
      <>
      
    <div>
    {this.state.context.length < 1 ?
    <>
    <h1 style={{textAlign: 'center', marginTop: '100px'}}>Claim ID: </h1>
    <h2 style={{textAlign: 'center'}}>FedEx Pick-up Location:</h2>
    </>
    :
    <>
      <h1 style={{textAlign: 'center', marginTop: '100px'}}>Claim ID: {this.state.context[0].id} </h1>
      <h2 style={{textAlign: 'center'}}>FedEx Pick-up Location: {this.state.context[0].fedex_location} </h2>
      </>
    }
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