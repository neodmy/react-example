import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/add' component={AddUser} />
          <EditUser path='/edit/:id' component={EditUser}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
