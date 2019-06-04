import React from "react";
import {
    // BrowserRouter as Router,
    Route,
    HashRouter
} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/navbar";


function App() {
    return(
        <HashRouter>
            <div>
                <Navbar />
                <Route exact path="/" component={Search} />;
                <Route exact path="/search" component={Search} />;
                <Route exact path="/saved" component={Saved} />;
            </div>
        </HashRouter>
    )
}

export default App;