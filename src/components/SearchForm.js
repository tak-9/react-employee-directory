import React from "react";

function SearchForm(props){
    return (
        <div>
            <form> 
                <input 
                    onChange={props.handleInputChange}
                    value={props.searchKeyword} 
                    name="searchKeyword" 
                    type="text"
                    placeholder="Enter Name to Search"
                />
            </form>
        </div>
    )
}

export default SearchForm;