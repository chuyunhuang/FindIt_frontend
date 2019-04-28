import React from 'react';
import axios from 'axios';
import History from '../Component/FounderHistory';
import Logo from '../Component/Image/findIt.jpg';
import {Link, Redirect} from 'react-router-dom';


class FounderHistory extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }


    componentDidMount(){
        axios.get('https://findit1.herokuapp.com/items/readAll')
        .then((data)=>{
            console.log(data)
            this.setState({data: data.data})
        })
        .catch((error)=>{
            console.log(error)
        })
          
    }


    render(){
        const {data} = this.state
        return(<>
           
        
        
        <div className="container">
        <Link to="/">
          <img src={Logo} className="img-thumbnail float-right" style={{width:'100px'}} alt=""/>
          </Link>
        <h1>Founder History</h1>
        <div className="row">
        <div className="col"><h3>Title</h3></div>
        <div className="col"><h3>Date Posted</h3></div>
        <div className="col"><h3>Status</h3></div>
        <div className="col"><h3>Image</h3></div>
        <History data={data}/>
        </div>
      </div>
      </>)
    }
}


export default FounderHistory;


