import React, { useState } from "react";
import axios from "axios";
import './Search.css';

export default function Search(){
    let [keyword, setKeyword] = useState("")

    function handleResponse(response){
        console.log(response.data[0]);

    }

    function search(event){
        event.preventDefault();
        alert(`searching for ${keyword} definition`);

      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      console.log(apiUrl);
     axios.get(apiUrl).then(handleResponse);  
    }

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