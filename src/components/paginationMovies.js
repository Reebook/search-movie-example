import React from "react"
import { array } from "prop-types";
import { UseSearch } from "../hooks/UseSearch"

function CreateList(count){
    console.log(count.count);
    let array = [];
    for (let index = 1; index <= count.count; index++) {
        array.push(index);
        
    }
    
    const search = (name,page)=>{
        UseSearch(name,page)
    }
    if(count.count < 20){
        return(
            
            <ul className="pagination-list">
                {array.map((name,index) => (              
                    <li  key={index}> <a className="pagination-link"  aria-label='Goto page {index}' onClick={search('',index)}>{name}</a>
                    </li>   
                ))}
            </ul>
        )
    }else{
        return(
            
            <ul className="pagination-list">
                {array.map((name,index) => (              
                    <li  key={index*2}> <a className="pagination-link"  aria-label='Goto page {index*2}' onClick={search('',index*2)}>{name}</a>
                    </li>   
                ))}

            
            </ul>
        )
    }
}

export default  function Pagination(props){
    const count = props.countPages;

    return(
    <div>
        <nav className="pagination" role="navigation" aria-label="pagination">
            <a className="pagination-previous">Previous</a>
            <a className="pagination-next">Next page</a>
      

            <CreateList count={count}/>
            
                
        </nav> 
        
    </div>
    )
}