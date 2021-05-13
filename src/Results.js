import React from "react";

export default function Results(props){
    if (props.results) {
      return ( 
        <div className="Results">
            <h1>
             {props.results.word}   
            </h1>
            {props.results.map(function(meaning, index){
               return meaning.definitions[0].definition; 
            })}
        </div> ); 
    } else {
        return null;

    }
    
}
