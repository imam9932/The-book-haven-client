import React from 'react';

const MyBooks = () => {
  return (
    <div>
      <h1 className='text-center text-[#f22e07] text-xl mt-5 font-bold'>My Books List</h1>
      <div className='border border-orange-700 flex justify-between items-center px-10 py-3 mt-5 rounded-lg'>
      <div className='text-[#f22e07] font-semibold'>
        <h3 className='text-xl mb-2'>Book Title : Agnibina</h3>
        <p>Author : Kazi Nazrul Islam</p>
      </div>
      <div className='flex gap-5'>
        <button className='btn bg-red-500 text-white hover:bg-black'>Update</button>
        <button className='btn bg-[#f22e07] text-white hover:bg-black'>Delete</button>
      </div>
      </div>
    </div>
  );
};

export default MyBooks;