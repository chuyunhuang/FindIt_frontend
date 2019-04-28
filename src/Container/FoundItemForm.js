import React from 'react';
import {Link} from 'react-router-dom';
import './Style/mainForm.css';
import Img from '../Component/Image/boy.jpg';
import Logo from '../Component/Image/findIt.jpg';
import axios from 'axios';


class FoundItemForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      title: '',
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

  handleInput = (e) =>{
    this.setState({
      title: e.target.value
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
    axios({
      url: 'https://findit1.herokuapp.com/items/create',
      method: 'post',
      data: {
          "user_id": '2',
          "type_id": this.state.type.value ,
          "colour_id": this.state.color.value,
          "lost_location": this.state.location,
          "date": this.state.date,
          "status": 'unclaimed', 
          "fedex_location": 'pending',
          "title": this.state.title, 
          "img_url": 'https://tcprd-tdcdn.netdna-ssl.com/green-acrylic-green-london-tartan-scarf-240375-105-1600-0.jpg?id=SC240375' 
      }
    })
    .then((res)=>{
      console.log('after post', res)
    })
  }

  render(){
    

    return (
      <>
      <div className="container">
      <form>
        
        <div style={{paddingBottom:"30px"}}>
          <h1>Found Item Info
          <Link to="/">
          <img src={Logo} className="img-thumbnail float-right" style={{width:'100px'}} alt=""/>
          </Link>
          </h1>
        </div>
        <div className="form-group ">
          <label>Title</label>
            <input type="text" className="form-control" placeholder="Description" onChange={this.handleInput}></input>
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

        <div className="form-group ">
          <label>LOCATION</label>
            <input type="email" className="form-control" placeholder="Zip Code" onChange={this.handleLocation} ></input>
        </div>

        <div className="form-group">
          <label>DATE FOUND</label>
            <input type="email" className="form-control" placeholder="DD/MM/YY" onChange={this.handleDate} ></input>
        </div>

        {/* NTH using Google's Places API */}
        <div className="form-group">
          <label>Search nearby Fedex Drop Off Location</label>
            <input type="email" className="form-control" placeholder="current location/zip code" ></input>
        </div>

        <div className="form-group">
          <button type="button" className="btn btn-danger" onClick={this.handleClick}>Submit</button>
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