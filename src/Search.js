import React, { useState } from "react";
import './Search.css';

export default function Search(){
    let [keyword, setKeyword] = useState("")
    function search(event){
        event.preventDefault();
        alert(`searching for ${keyword} definition`);
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