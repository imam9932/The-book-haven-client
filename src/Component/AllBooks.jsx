import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const AllBooks = () => {
  const data=useLoaderData();
   const [sortOrder,setSortOrder]=useState('desc');
   const [books,setBooks]=useState([]);

  useEffect(()=>{
    fetch(`http://localhost:3000/allBooks?sort=${sortOrder}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setBooks(data)
    })
    .catch(error=>{
      console.log(error.message)
    })
  },[sortOrder])
  return (
    <div>
      <div className="dropdown mt-2 bg-[#f22e07] rounded-lg">
  <div tabIndex={0} role="button" className="btn m-1 bg-[#f22e07]">Sort</div>
  <ul tabIndex="-1" className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm bg-[#f22e07] text-white font-bold">
    <button className='hover:bg-black rounded-md' onClick={()=>setSortOrder('asc')}>Low to High (Rating)</button>
    <button className='mt-2 hover:bg-black rounded-md' onClick={()=>setSortOrder('desc')}>High to Low (Rating)</button>
  </ul>
</div>
     
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
      {
        books.map(book=><div key={book._id} className='bg-[#F22E07] rounded-xl p-3 text-center text-white font-bold mt-5  '>
          <div className=' rounded-2xl p-3'>
            <h4 className=' '><span className='text-gray-300'>Book Name :</span> {book.title}</h4>
          <p className=' '><span className='text-gray-300'>Author :</span> {book.author}</p>
          <p><span className='text-gray-300'>Genre :</span> {book.genre}</p>
          <p><span className='text-gray-300'>Rating :</span> {book.rating}</p>
          
           <button className='bg-red-700 px-3 py-1 mt-2 rounded-md hover:bg-white hover:text-black'>
             <Link to={`/bookDetails/${book._id}`} >View Details</Link>
           </button>
          
          </div>
        </div>)
      }
    </div>
     </div>
  );
};

export default AllBooks;