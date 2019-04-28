import React from 'react';
import axios from 'axios';

class FedexHub extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            claimID: '',
        }
    }
        componentDidMount(){
            axios({
                url: `https://findit1.herokuapp.com/items/read`,
                method: 'GET',
                params: {
                    'colour_id': 3
                }
            })
            .then((data)=>{
                console.log(data)
            })
            .catch((error)=>{
                console.log(error)
            })
        }

    render() {
        return (<>
                <form>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-group">
                        <label>Address</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label">Check me out</label>
                    </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </>)
            }
        
}

 export default FedexHub;