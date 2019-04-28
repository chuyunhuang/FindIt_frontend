import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import itemcontext from './Context/itemContext'
import item from './Context/item'

//Pages
import Home from './Component/home';
import FoundItemForm from './Container/FoundItemForm';
import LostItemForm from './Container/LostItemForm';
import ItemMatch from './Container/itemMatch';
import ClaimAction from './Component/claimAction';
import PickUp from './Container/pickUp';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
        item: {}
      }
  }

  storeItem = item => {
    this.setState({item: item})
  }

  render(){
  console.log(this.state)
  return (
    <HashRouter>
      <Switch>
      <item.Provider value= {this.state.item}>
      <itemcontext.Provider value={this.storeItem}>
      <Route path= "/" exact strict component={Home} />
      <Route path= "/found" exact strict component={FoundItemForm} />
      <Route path= "/lost" exact strict component ={LostItemForm} />
      <Route path= "/itemmatch" exact strict component ={ItemMatch} />
      <Route path= "/claimPage" exact strict component ={ClaimAction} />
      <Route path= "/pickup" exact strict component={PickUp} />
      </itemcontext.Provider>
      </item.Provider>
      </Switch>
    </HashRouter>
 
  );
  }
}
export default App;
