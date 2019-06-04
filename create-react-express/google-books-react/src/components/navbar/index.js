import React from "react";
import { NavLink } from 'react-router-dom'



function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" class="navbar-brand">React Books</NavLink>
        {/* <a class="navbar-brand" href="/">React Books</a> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
          <NavLink to="/search" class="nav-item nav-link">Search</NavLink>
          <NavLink to="/saved" class="nav-item nav-link">saved</NavLink>
            {/* <a class="nav-item nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="/saved">Saved</a> */}
          </div>
        </div>
      </nav>  
    );
}

export default Navbar;