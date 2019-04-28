import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import item from '../Context/item'
import './Style/mainForm.css';
import Logo from '../Component/Image/findIt.jpg';

class ItemMatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      context: []
    }
  }

  static contextType = item

  componentDidMount(){
    if(this.context.length > 0){
    this.setState({context: this.context})
    }
  }

  claim = () => {
    console.log(1)
    this.props.history.push('/claimPage')
  }

  render() {
    console.log(this.context[0])
    console.log(this.state.context.length)
    return (
      <div className="container">
        <div style={{ paddingBottom: "30px" }}>
          <h1>Lost Item Matched
            <Link to="/">
              <img src={Logo} className="img-thumbnail float-right" style={{ width: '100px' }} alt=""/>
            </Link>
          </h1>
        </div>
        {this.state.context.length < 1 ?
        <>
        <div>
          <div>
  
          </div>
          <h4>Title: </h4>
        </div> 
        <div>
          <h4>Type: </h4>
        </div>
        <div>
          <h4>Color: </h4>
        </div>
        <div>
          <h4>Location Found: </h4>
        </div>
        <div>
          <h4>Date: </h4>
        </div>
        <div>
          <h4>FedEx Pick-up Location: </h4>
        </div>
    
        <div className="form-group">
          <button type="button" class="btn btn-danger">Claim Item</button>
        </div>
        </>
        :
        <>
        <div>
          <div>
            <img style={{width: '300px'}}src={this.state.context[0].img_url} />
          </div>
          <h4>Title: {this.state.context[0].title}</h4>
        </div> 
        <div>
          <h4>Location Found: {this.state.context[0].lost_location}</h4>
        </div>
        <div>
          <h4>Date: {this.state.context[0].date}</h4>
        </div>
        <div>
          <h4>FedEx Pick-up Location: {this.state.context[0].fedex_location}</h4>
        </div>
    
        <div className="form-group">
          
        <button type="button" class="btn btn-danger" onClick={this.claim}>Claim Item</button>
           
        </div>
          </>
        }
      </div>
    )
  }
}



export default ItemMatch