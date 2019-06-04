import React, {Component} from "react";
import API from "../utils/google-books"
import { Input, FormBtn } from "../components/search-box";

class Search extends Component{
    state = {
        search: "",
        results: [],
        error: "",
    }
    render(){
      return (
            <div>
                <div class="container">
                    <form>
                        <Input name="title" placeholder="Title or Author (required)" />
                        <FormBtn>Search!</FormBtn>
                    </form>                    
                </div>

                <p>
                    This Search page is working. 
                </p>
            </div>
      )  
    }

}

export default Search;