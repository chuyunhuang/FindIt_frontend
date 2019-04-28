import React from 'react';
import { Link } from 'react-router-dom';


import './Style/mainForm.css';
import Logo from '../Component/Image/findIt.jpg';

class ItemMatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: '1',
      title: 'black bear',
      type: 'toys',
      color: 'black',
      location: '10001',
      date: '04/25/19',
      fedex_pickup: '34th Street Penn',
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <div style={{ paddingBottom: "30px" }}>
          <h1>Lost Item Matched
            <Link to="/">
              <img src={Logo} className="img-thumbnail float-right" style={{ width: '100px' }} alt="" />
            </Link>
          </h1>
        </div>


        <div>
          <h4>Title: {this.state.title}</h4>
        </div>
        <div>
          <h4>Type: {this.state.type} </h4>
        </div>
        <div>
          <h4>Color: {this.state.color}</h4>
        </div>
        <div>
          <h4>Location Found: {this.state.location}</h4>
        </div>
        <div>
          <h4>Date: {this.state.date}</h4>
        </div>
        <div>
          <h4>FedEx Pick-up Location: {this.state.fedex_pickup}</h4>
        </div>
        </div>


        )
      }
    }
    
    
    
export default ItemMatch