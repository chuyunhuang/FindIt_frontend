import React from 'react';
import axios from 'axios';



class FounderHistory extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            data: []
        }
    }


    componentDidMount(){
        axios.get('https://findit1.herokuapp.com/items/readAll')
          .then((data)=>{
              console.log(data)
          })
          .catch((error)=>{
              console.log(error)
          })
    }


    render(){
        return(<div><h1>Data</h1></div>)
    }
}


export default FounderHistory;


