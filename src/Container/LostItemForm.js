import React from 'react';
import {Link} from 'react-router-dom';

import './Style/mainForm.css';
import Logo from '../Component/Image/findIt.jpg';
import Img from '../Component/Image/girl.jpg';

class LostItemForm extends React.Component {
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

      <>
      <div className="container">
      <form>
        <div style={{paddingBottom:"30px"}}>
          <h1>Lost Item Info
            <Link to="/">
          <img src={Logo} className="img-thumbnail float-right" style={{width:'100px'}}/>
          </Link>
          </h1>    
        </div>
        <div className="form-group">
          <label for="inputState">TYPE</label>
          <select id="inputState" className="form-control">
            <option selected>Choose...</option>
            <option>Black</option>
            <option>Brown</option>
            <option>Grey</option>
            <option>White</option>
            <option>None of the above</option>
          </select>
        </div>

        <div className="form-group">
          <label for="inputState">COLOR</label>
          <select id="inputState" className="form-control">
            <option selected>Choose...</option>
            <option>Keys</option>
            <option>Wallet</option>
            <option>Clothing Accessories</option>
            <option>Toys</option>
            <option>Electronics</option>
          </select>
        </div>

        <div className="form-group">
          <label for="inputEmail3">LOCATION</label>
            <input type="email" className="form-control" placeholder="Zip Code" ></input>
        </div>

        <div className="form-group">
          <label for="inputEmail3">DATE LOST</label>
            <input type="email" className="form-control" placeholder="DD/MM/YY" ></input>
          <div>Search query is 7-day history period</div>
        </div>
        <div className="form-group">
          <button type="button" class="btn btn-danger">Submit</button>
        </div>
       
        </form>

        <div>
          <img src={Img} alt="img" style={{width: '200px'}} className="rounded mx-auto float-right"/>
        </div>

        </div>
      </>


    )
  }
}

export default LostItemForm

