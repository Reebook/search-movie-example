import React, {useState} from "react"
import Pagination from 'bulma-pagination-react';
import { useMovies } from "../context/MoviesContext";


export default  function PaginatioMovies(props){
    const {countPages, name} = props
    const count = parseInt(countPages);     
    let {setKeyword,setPage} = useMovies()
   // console.log(results)   
    const [activePage, setActivePage ] = useState(1);
    const pagesCount = Math.ceil(count / 10);


    const handlePageChange = (pageNumber) => {
      //  console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);        
        setPage(pageNumber)
        setKeyword(name)
      }
    return(

    <div>
        <Pagination
            pages={pagesCount}
            currentPage={activePage}
            onChange={page => handlePageChange(page)}
            />
    </div>
    )
}