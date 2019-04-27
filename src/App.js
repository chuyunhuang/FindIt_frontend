import React from 'react';
import {HashRouter, Route,} from 'react-router-dom';

//Pages
import Home from './Component/home';
import FoundItemForm from './Container/FoundItemForm';
import LostItemForm from './Container/LostItemForm';

function App() {
  return (
    <HashRouter>
      <Route path= "/" exact component={Home} />
      <Route path = "/found" exact component={FoundItemForm} />
      <Route path= "/lost" exact component ={LostItemForm} />
    </HashRouter>
 
  );
}
export default App;
