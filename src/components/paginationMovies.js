import React, {useState} from "react"
import { array } from "prop-types";
import { UseSearch } from "../hooks/UseSearch"
import Pagination from 'bulma-pagination-react';

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

export default  function PaginatioMovies(props){
    const count = props.countPages;
    const perPage = 10;
    const [activePage, setActivePage ] = useState(1);
    const POSTS_PER_PAGE = 10;
    const pages = Math.ceil(count / perPage);


    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
      }
    return(

    <div>
        <Pagination
            pages={count}
            currentPage={activePage}
            onChange={page => handlePageChange(page)}
            />
    </div>
    )
}