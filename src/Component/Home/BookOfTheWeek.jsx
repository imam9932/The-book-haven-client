import React from 'react';

const BookOfTheWeek = () => {
  return (
    <div className='mt-5'>
      <h1  className='text-xl text-center bg-[#f22e07] font-bold text-white py-2 rounded-xl'>Book Of The Week</h1>
     <div className='mt-5 p-5 bg-orange-200 shadow rounded-md border border-gray-300'>
       <div className='flex justify-around items-center md:flex-row flex-col-reverse '>
        <div className='space-y-3 mt-5 md:mt-0'>
          <h2><span className='text-[#006747] font-bold'>Book Name :</span>The Infinite Mind </h2>
          <p><span className='text-[#006747] font-bold'>Author :</span> Raj Patel</p>
          <p><span className='text-[#006747] font-bold'>Category :</span> Non-Fiction</p>
          <p><span className='text-[#006747] font-bold'>Rating :</span> 4.9</p>
          
          
        </div>
        <div>
          <img className='h-[200px] w-[200px] rounded-2xl  ' src="https://i.ibb.co.com/1GDfBj7k/infinite.jpg" alt="" />
        </div>
      </div>
      <p className='md:px-35 py-5 md:mx-11'><span className='font-bold underline'>Summary :</span>"A neuroscientist explores the untapped potential of the human brain through groundbreaking research."</p>
     </div>
    </div>
  );
};

export default BookOfTheWeek;