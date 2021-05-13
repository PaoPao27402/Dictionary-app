import React, { useState } from "react";
import axios from "axios";
import './Search.css';
import Results from "./Results";

export default function Search(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);

    }

    function search(event){
        event.preventDefault();

      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      console.log(apiUrl);
     axios.get(apiUrl).then(handleResponse);  
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return(
        <div className="dictionary">
         <p>Search a Word</p>   
         <form onSubmit={search}>   
         <input type="search" onChange={handleKeywordChange}/>
         <input className="button" type="submit" value="Search" />
         </form>  
         <Results results={results} />
        </div>
        
    );
}