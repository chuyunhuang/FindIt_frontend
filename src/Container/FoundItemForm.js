import React from 'react';
import {Link} from 'react-router-dom';
import './Style/mainForm.css';
import Img from '../Component/Image/boy.jpg';
import Logo from '../Component/Image/findIt.jpg';

class FoundItemForm extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return (
      <>
      <div className="container">
      <form>
        
        <div style={{paddingBottom:"30px"}}>
          <h1>Found Item Info
          <Link to="/">
          <img src={Logo} className="img-thumbnail float-right" style={{width:'100px'}}/>
          </Link>
          </h1>
        </div>
        <div className="form-group ">
          <label for="inputEmail3">Title</label>
            <input type="text" className="form-control" placeholder="Description" ></input>
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

        <div className="form-group ">
          <label for="inputEmail3">LOCATION</label>
            <input type="email" className="form-control" placeholder="Zip Code" ></input>
        </div>

        <div className="form-group">
          <label for="inputEmail3">DATE FOUND</label>
            <input type="email" className="form-control" placeholder="DD/MM/YY" ></input>
        </div>

        {/* NTH using Google's Places API */}
        <div className="form-group">
          <label for="inputEmail3">Search nearby Fedex Drop Off Location</label>
            <input type="email" className="form-control" placeholder="current location/zip code" ></input>
        </div>

        <div className="form-group">
          <button type="button" class="btn btn-danger">Submit</button>
        </div>
      
        </form>
        <div>
          <img src={Img} alt="img" style={{width: '150px'}} className="rounded mx-auto float-left"/>
        </div>
        </div>
      </>

    )
  }
}

export default FoundItemForm;