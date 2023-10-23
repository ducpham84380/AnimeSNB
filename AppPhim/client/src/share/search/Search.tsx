import React from "react";
import searchIcon from "src/assets/images/search.svg";
import "src/share/search/Search.scss";

interface SearchProps {};

const Search: React.FC<SearchProps> = (props) => {
    

    return (
        <div className="search_box">
            <div className="search_input_box" >
                <input className="search_input" placeholder="search" />
                <img src={searchIcon} alt="" className="search_icon"></img>
            </div>
        </div>
    );
};

export default Search;
