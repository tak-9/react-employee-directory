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
                    placeholder="Enter Search Keyword"
                />
            </form>
        </div>
    )
}

export default SearchForm;