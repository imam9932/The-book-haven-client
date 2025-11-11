import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BookDetails = () => {
  const data=useLoaderData();
  const book=data.result;
  console.log(book);
  return (
    <div className='flex gap-5 p-10 mt-5'>
      <div className='flex-1'>
         <img className='w-[400px] h-[400px] rounded-lg' src={book.coverImage} alt="" />
      </div>
      <div className='flex-1 text-[#f22e07] font-semibold flex flex-col justify-center'>
        <h2 className='text-2xl font-semibold '><span>Book Name :</span> {book.title}</h2>
        <p className='mb-8'>Author : {book.author}</p>
       <div className='flex justify-between mb-5'>
         <p>Category : {book.genre}</p>
         <p>Rating : {book.rating}</p>
       </div>
       <p className='text-[#f22e07] font-normal'><span className='underline'>Summary :- </span> {book.summary}</p>

       <Link to={'/myBooks'} className='btn bg-red-500 text-white mt-10 w-1/2 hover:bg-[#f22e07] hover:text-black text-lg py-2'>Add in your list</Link>
      </div>
      </div>
  );
};

export default BookDetails;