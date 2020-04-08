import React from 'react';
import {BrowserRouter ,Switch,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import AbhiprayDetails from './components/abhipray/AbhiprayDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateAbhipray from './components/abhipray/CreateAbhipray';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar></Navbar>
     
     <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/Abhipray/:id' component={AbhiprayDetails}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/createAbhipray' component={CreateAbhipray}/>
     </Switch>
    </div>

    </BrowserRouter>
    
  );
}

export default App;
