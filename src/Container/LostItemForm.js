import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Style/mainForm.css';
import Logo from '../Component/Image/findIt.jpg';
import Img from '../Component/Image/girl.jpg';

class LostItemForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: '',
      type: [],
      color: [],
      location: '',
      date: '',
    }
  }

  componentDidMount(){
    axios({
      url: 'https://findit1.herokuapp.com/type/read',
      method: 'get'
    })
    .then((data)=>{
      this.setState({
        type: data.data.msg
      })
    axios({
      url: 'https://findit1.herokuapp.com/colour/read',
      method: 'get'
    })
    .then((data)=>{
      this.setState({
        color: data.data.msg
      })
    })
    })
  }

  handleLocation = (e) =>{
    this.setState({
      location: e.target.value
    })
    console.log(e.target.value)
  }

  handleDate = (e) =>{
    this.setState({
      date: e.target.value
    })
    console.log(e.target.value)
  }

  handleClick = () =>{
    axios({
      
      })
  
  }

  render() {
    
    return (

      <>
      <div className="container">
      <form>
        <div style={{paddingBottom:"30px"}}>
          <h1>Lost Item Info
            <Link to="/">
          <img src={Logo} className="img-thumbnail float-right" style={{width:'100px'}} alt=""/>
          </Link>
          </h1>    
        </div>
        <div className="form-group">
          <label>TYPE</label>
          <select id="inputState" className="form-control">
            <option>Choose...</option>
            {
              this.state.type.map((e, i)=>{
                return (
                  <option key={i} value={e.id}>
                      {e.type}
                  </option>
                ) 
              })
            }
          </select>
        </div>

        <div className="form-group">
          <label>COLOR</label>
          <select id="inputState" className="form-control">
            <option>Choose...</option>
            {
               this.state.color.map((e, i)=>{
                return ( 
                  <option key={i} value={e.id}>
                      {e.colour}
                  </option>
               )
             })
            }
          </select>
        </div>

        <div className="form-group">
          <label>LOCATION</label>
            <input type="email" className="form-control" placeholder="Zip Code" onChange={this.handleLocation}></input>
        </div>

        <div className="form-group">
          <label>DATE LOST</label>
            <input type="email" className="form-control" placeholder="DD/MM/YY" onChange={this.handleDate}></input>
          <div>Search query is 7-day history period</div>
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-danger">Submit</button>
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

