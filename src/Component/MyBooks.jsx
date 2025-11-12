import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Loading from './Loading';

const MyBooks = () => {
  const {user,loading}=useContext(AuthContext);
  const [myBooks,setMyBooks]=useState([]);


  useEffect(()=>{

    fetch(`http://localhost:3000/my-books?email=${user.email}`,{
      headers:{
        authorization: `Bearer ,${user.accessToken}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setMyBooks(data);
    })
  },[]);

  if(loading){
    return <Loading></Loading>
  }
  return (
    <div>
      <h1 className='text-center text-[#f22e07] text-xl mt-5 font-bold'>My Books List</h1>
{
  myBooks.map(b=><div key={b._id}>
 <div className='border border-orange-700 flex justify-between items-center px-10 py-3 mt-5 rounded-lg'>


      <div className='text-[#f22e07] font-semibold'>
        <h3 className='text-xl mb-2'>Book Title : {b.title}</h3>
        <p>Author : {b.author}</p>
      </div>
      <div className='flex gap-5'>
         

{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className='btn bg-red-500 text-white hover:bg-black' onClick={()=>document.getElementById('my_modal_5').showModal()}>Update</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
    <div className="card bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#f22e07]">Update Book</h2>
        <form   className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Book Name</label>
            <input
              type="text"
              
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="title"
            />
          </div>
           {/* author */}
         <label className="label">Author</label>
         <input type="text" name='author' className="input w-full rounded-full focus:border-0 focus:outline-gray-200" placeholder="author"   />
       {/* genre */}
         <label className="label">Genre</label>
         <input type="text" name='genre' className="input w-full rounded-full focus:border-0 focus:outline-gray-200" placeholder="genre"    />
        
       {/* summary */}
         <label className="label">Summary</label>
         <input type="text" name='summary' className="input w-full rounded-full focus:border-0 focus:outline-gray-200" placeholder="summary"   />
       {/* cover image */}
         <label className="label">Cover Image</label>
         <input type="text" name='image' className="input w-full rounded-full focus:border-0 focus:outline-gray-200" placeholder="URL"   />
        

           
          
          {/* Submit Button */}
          <button
       
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Update Model
          </button>
        </form>
      </div>
    </div>
</dialog>

        <button className='btn bg-[#f22e07] text-white hover:bg-black'>Delete</button>
      </div>
      </div>

  </div>

  )
}
     
    </div>
  );
};

export default MyBooks;