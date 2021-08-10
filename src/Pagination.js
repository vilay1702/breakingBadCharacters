import React, {useState} from 'react'
import Characters from './Characters'

const Pagination = ({data}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const charactersPerPage = 10;
    const totalPages = Math.ceil(data.length/charactersPerPage);
    let paginate = [];

    for(let i=1; i<=totalPages; i++){
        paginate.push(i);
    }

    const handleClick = (e) => {
        setCurrentPage(parseInt(e.target.innerText))
    }

    return (
        <>
        <Characters data={data.slice((currentPage-1)*10,currentPage*10)}/>
        <ul className="pagination">
            {paginate.map((item)=>{
                return (
                    <li className={currentPage===item ? 'currentPage' : null} key={item} onClick={(e)=>handleClick(e)}>{item}</li>
                );
            })}
        </ul>
        </>
    )
}

export default Pagination
