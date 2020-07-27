import React, {useState} from "react"
import Pagination from 'bulma-pagination-react';


export default  function PaginatioMovies(props){
    const count = parseInt(props.countPages);    
    const [activePage, setActivePage ] = useState(1);
   // const pages = Math.ceil(count / perPage);


    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
       // getMovies()

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