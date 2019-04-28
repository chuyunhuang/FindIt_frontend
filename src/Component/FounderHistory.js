import React from 'react';


const FounderHistory = (props) =>{
    let history = props
    console.log(history.data)
    if(!history.data.msg){
        return <h1>Page is loading</h1>
    } else{
        
        return history.data.msg.map((e, i)=>{
            return (<>
                 <div class="w-100"></div>
                <div class="col">{e.title}</div>
                <div class="col">{e.date}</div>
                <div class="col">{e.status}</div>
                </>
            )
        })
    }
        




    
   
}

export default FounderHistory;