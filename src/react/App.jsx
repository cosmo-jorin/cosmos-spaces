import React from 'react';
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Index from './Index/Index.jsx';
import Airdrops from './Airdrops/Airdrops.jsx';
import Contact from './Contact/Contact.jsx';
import Links from './Links/links.jsx';
import Networks from './Networks/Networks.jsx';
import Team from './Team/Team.jsx';
import Validators from './Validators/Validators.jsx';

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
              <Switch>
              <Route exact path="/" component={Index}  />
              {/* <Route exact path="/Airdrops" component={Airdrops}  /> */}
              {/* <Route exact path="/Contact" component={Contact}  /> */}
              <Route exact path="/Links" component={Links}  />
              <Route exact path="/Networks" component={Networks}  />
              <Route exact path="/Team" component={Team}  />
              <Route exact path="/Validators" component={Validators}  />
              <Redirect to='/'/>
              </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
