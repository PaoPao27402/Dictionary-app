import React, { useState } from "react";
import axios from "axios";
import './Search.css';

export default function Search(){
    let [keyword, setKeyword] = useState("")
    function search(event){
        event.preventDefault();
        alert(`searching for ${keyword} definition`);
    }

    function handleResponse(response){
        console.log(response);

    }

     let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en_US/hello";
     axios.get(apiUrl).then(handleResponse);

    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }

    return(
        <div className="dictionary">
         <form onSubmit={search}>
         <input type="search" onChange={handleKeywordChange}/>
         </form>  
        </div>
        
    );
}