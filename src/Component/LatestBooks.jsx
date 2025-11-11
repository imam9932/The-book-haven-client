import React from 'react';
import { useLoaderData } from 'react-router';

const LatestBooks = () => {
  const data=useLoaderData();
  console.log(data);
  return (
    <div className='mt-5'>
      <h1 className='text-xl text-center bg-[#f22e07] font-bold text-white py-2 rounded-xl '>Latest Books</h1>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-5'>
        {
          data.map(d=><div key={d._id} className="card bg-[#f22e07] w-76 mx-auto shadow-sm text-white">
  <figure>
    <img className='h-[300px] w-full'
      src= {d.coverImage}
      alt="bookImage" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{d.title}</h2>
    <p> {d.author}</p>
    
  </div>
</div>)
        }
      </div>
       
    </div>
  );
};

export default LatestBooks;