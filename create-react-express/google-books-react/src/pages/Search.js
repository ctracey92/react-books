import React, {Component} from "react";
import API from "../utils/google-books"

class Search extends Component{
    state = {
        search: "",
        results: [],
        error: "",
    }
    render(){
      return (
            <div>
                <p>
                    This Search page is working. 
                </p>
            </div>
      )  
    }

}

export default Search;