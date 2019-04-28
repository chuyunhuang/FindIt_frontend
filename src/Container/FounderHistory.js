import React from 'react';
import axios from 'axios';
import History from '../Component/FounderHistory';


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
            this.setState({data: data.data})
        })
        .catch((error)=>{
            console.log(error)
        })
          
    }


    render(){
        const {data} = this.state
        return(<div className="container">
        <h1>Founder History</h1>
        <div className="row">
        <div className="col"><h3>Title</h3></div>
        <div className="col"><h3>Date Posted</h3></div>
        <div className="col"><h3>Status</h3></div>
        <History data={data}/>
        </div>
      </div>)
    }
}


export default FounderHistory;


