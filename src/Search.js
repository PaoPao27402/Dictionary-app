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

    function search(){
     let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
     axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event){
        event.preventDefault();
        search()
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return(
        <div className="dictionary">
         <h1>Search a Word</h1>   
         <form className="submit" onSubmit={handleSubmit}>   
         <input type="search" onChange={handleKeywordChange}/>
         <input className="button" type="submit" value="🔍" />
         </form>
         <div className="hint">
             suggested words: sunset, yoga, wine, pine....
        </div>  
         <Results results={results} />
        </div>
        
    );
}