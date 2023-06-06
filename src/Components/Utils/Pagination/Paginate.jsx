import React from 'react'
import { useState } from 'react'
import ReactPaginate from "react-paginate";
import { Data } from 'Components/Data/data';

const Paginate = () => {

  const [users, setUsers] = useState(Data.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 15;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
    return (
      <div className="user">
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <h3>{user.email}</h3>
      </div>
    );
  });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='pagination'>
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

export default Paginate