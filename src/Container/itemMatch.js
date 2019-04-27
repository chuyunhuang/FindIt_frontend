import React from 'react';
import { Link } from 'react-router-dom';

import './Style/mainForm.css';
import Logo from '../Component/Image/findIt.jpg';

class ItemMatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: '',
      type: '',
      color: '',
      location: '',
      date: '',
    }
  }

  render() {
    return (
      <div className="container">
        <div style={{ paddingBottom: "30px" }}>
          <h1>Lost Item Matched
            <Link to="/">
              <img src={Logo} className="img-thumbnail float-right" style={{ width: '100px' }} />
            </Link>
          </h1>
        </div>
        <p>
        <div>
          <h4>Title: </h4>
        </div>
        </p>
        <p>
        <div>
          <h4>Type: </h4>
        </div>
        </p>
        <p>
        <div>
          <h4>Color: </h4>
        </div>
        </p>
        <p>
        <div>
          <h4>Location Found: </h4>
        </div>
        </p>
        <p>
        <div>
          <h4>FedEx Pick-up Location: </h4>
        </div>
        </p>
    
        <div className="form-group">
          <button type="button" class="btn btn-danger">Claim Item</button>
        </div>
      
       
      </div>
    )
  }
}



export default ItemMatch