import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllBooks = () => {
  const data=useLoaderData();
  console.log(data);
  return (
    <div>
    <h1 className='text-3xl text-center text-[#f22E07]'>All Books</h1>
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
      {
        data.map(book=><div key={book._id} className='bg-[#F22E07] rounded-xl p-3 text-center text-white font-bold  '>
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