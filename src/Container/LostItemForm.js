import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import itemcontext from '../Context/itemContext'

import './Style/mainForm.css';
import Logo from '../Component/Image/findIt.jpg';
import Img from '../Component/Image/girl.jpg';
import { throwStatement } from '@babel/types';

class LostItemForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: '',
      type: [],
      color: [],
      type_id: '',
      color_id: '',
      location: '',
      date: '',
      result: [],
      redirect: ''
    }
  }

  static contextType = itemcontext

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

  handleType = (e) =>{
    this.setState({
      type_id: e.target.value
    })
  }

  handleColor = (e) =>{
    this.setState({
      color_id: e.target.value
    })
  }


  handleLocation = (e) =>{
    this.setState({
      location: e.target.value
    })
  }

  handleDate = (e) =>{
    this.setState({
      date: e.target.value
    })
  }

  handleClick = () =>{
    const {type_id, color_id, location, date} = this.state
    if(type_id.length > 0 && color_id.length > 0 && location.length > 0 && date.length > 0){
    axios({
      url: 'https://findit1.herokuapp.com/items/read',
      method: 'GET',
      params: {
        'type_id': this.state.type_id,
        'colour_id': this.state.color_id,
        'lost_location': this.state.location,
        'date': this.state.date
      }
    })
    .then((data)=>{
        this.context(data.data.msg)
      console.log(data)
      this.setState({redirect: <Redirect to='/itemmatch' />})
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  }

  render() {

    console.log('inside render', this.context)
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

        <p>Fill out form to match found item that has been entered in our website to claim your lost item</p>
        </div>
        <div className="form-group">
          <label>TYPE</label>
          <select id="inputState" className="form-control" onChange={this.handleType}>
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
          <select id="inputState" className="form-control" onChange={this.handleColor}>
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
          <button type="button" className="btn btn-danger" onClick={this.handleClick}>Submit</button>
        </div>
       
        </form>

        <div>
          <img src={Img} alt="img" style={{width: '200px'}} className="rounded mx-auto float-right"/>
        </div>
        </div>
        <>
        {this.state.redirect}
        </>
      </>


    )
  }
}

export default LostItemForm

