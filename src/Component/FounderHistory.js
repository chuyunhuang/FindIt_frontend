import React from 'react';


const FounderHistory = (props) =>{
    let history = props

    if(!history.data.msg){
        return <h1>Page is loading</h1>
    } else{
        
        return history.data.msg.map((e, i)=>{
            return (<>
                {i % 2 === 0 ?
                <>
                 <div className="w-100" key={i} style={{backgroundColor: 'lightgrey'}}></div>
                 <div className="col text-md-left" style={{backgroundColor: 'lightgrey', paddingTop:'60px'}}>{e.title}</div>
                 <div className="col" style={{backgroundColor: 'lightgrey', alignItems:'center', paddingTop:'60px'}}>{e.date}</div>
                 <div className="col" style={{backgroundColor: 'lightgrey', alignItems:'center', paddingTop:'60px'}}>{e.status}</div>
                 <img className="col" style={{backgroundColor: 'lightgrey', width:'10px', height:'150px'}} src={e.img_url} alt="" />

                 </>
                :
                <>
                <div className="w-100" key={i} style={{backgroundColor: 'red'}}></div>
                <div className="col" style={{ paddingTop:'60px'}}>{e.title} </div>
                <div className="col" style={{ paddingTop:'60px'}}>{e.date}</div>
                <div className="col" style={{ paddingTop:'60px'}}>{e.status}</div>
                <img className="col" style={{width:'10px', height:'150px'}} src={e.img_url} alt=" "/>
                </>
                }
                </>
            )
        })
    }
        




    
   
}

export default FounderHistory;