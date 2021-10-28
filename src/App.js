import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import FriendDetails from './Components/FriendDetails';
import Home from './Components/Home';
import NoMatch from './Components/NoMatch';
function App(){
    return(
        <div>
            <Router >
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    {/* <Route path="/friend/:FriendId">
                        <FriendDetails/>
                    </Route> */}
                    <Route path="/friend/:friendId">
                        <FriendDetails/>
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default App;