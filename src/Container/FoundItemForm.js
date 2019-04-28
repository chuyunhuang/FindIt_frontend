import React from 'react';
import {Link} from 'react-router-dom';
import './Style/mainForm.css';
import Img from '../Component/Image/boy.jpg';
import Logo from '../Component/Image/findIt.jpg';
import axios from 'axios';

import * as firebase from 'firebase';
import ImageService from '../Service/image';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDZHk3FdTSPRn1uOF7C9aNGAiGoop96c-0",
  authDomain: "findit-cd54e.firebaseapp.com",
  databaseURL: "https://findit-cd54e.firebaseio.com",
  projectId: "findit-cd54e",
  storageBucket: "findit-cd54e.appspot.com",
  messagingSenderId: "801673346676"
};
firebase.initializeApp(config);

class FoundItemForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      title: '',
      type: [],
      color: [],
      location: '',
      date: '', 
      image_url: '' 
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

  saveImage = (url) => {
    const date = Date()
    ImageService.saveImage(url, date)
  }

  handleFileInput = (e) => {
    const firstFile = e.target.files[0]
    const root = firebase.storage().ref()
    const newImage = root.child(firstFile.name)

    newImage.put(firstFile)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL()
      })
      .then((url) => {
        this.setState({
          image_url: url
        })
      })
  }

  handleClick = () =>{
    axios({
      url: 'https://findit1.herokuapp.com/items/create',
      method: 'post',
      data: {
          "user_id": '1',
          "type_id": this.state.type.value ,
          "colour_id": this.state.color.value,
          "lost_location": this.state.location,
          "date": this.state.date,
          "status": 'Not claimed', 
          "fedex_location": 'pending',
          "title": this.state.title, 
          "img_url": this.state.image_url 
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
          <label>TITLE</label>
            <input type="text" className="form-control" placeholder="Description" onChange={this.handleInput}></input>
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

        <div className="form-group ">
          <label>LOCATION</label>
            <input type="email" className="form-control" placeholder="Zip Code" onChange={this.handleLocation} ></input>
        </div>

        <div className="form-group">
          <label>DATE FOUND</label>
            <input type="email" className="form-control" placeholder="DD/MM/YY" onChange={this.handleDate} ></input>
        </div>

        <div className="form-group">
          <label>UPLOAD AN IMAGE</label>
            <input type="file" className="form-control" placeholder="" onChange={this.handleFileInput} ></input>
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