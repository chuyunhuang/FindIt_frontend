import React from 'react';


const FounderHistory = (props) =>{
    let history = props
    console.log(history.data)
    if(!history.data.msg){
        return <h1>Page is loading</h1>
    } else{
        
        return history.data.msg.map((e, i)=>{
            return (<>
                 <div className="w-100" key={i} ></div>
                <div className="col">{e.title}</div>
                <div className="col">{e.date}</div>
                <div className="col">{e.status}</div>
                </>
            )
        })
    }
        




    
   
}

export default FounderHistory;