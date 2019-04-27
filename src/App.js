import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

//Pages
import Home from './Component/home';
import FoundItemForm from './Container/FoundItemForm';
import LostItemForm from './Container/LostItemForm';
import ItemMatch from './Container/itemMatch';


function App() {
  return (
    <HashRouter>
      <Switch>
      <Route path= "/" exact strict component={Home} />
      <Route path = "/found" exact strict component={FoundItemForm} />
      <Route path= "/lost" exact strict component ={LostItemForm} />
      <Route path= "/itemmatch" exact strict component ={ItemMatch} />
      </Switch>
    </HashRouter>
 
  );
}
export default App;
