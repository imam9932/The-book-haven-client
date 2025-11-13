import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Loading from './Loading';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyBooks = () => {
  const {user,loading}=useContext(AuthContext);
  const [myBooks,setMyBooks]=useState([]);
  console.log(myBooks);
  


  useEffect(()=>{

    fetch(`http://localhost:3000/my-books?email=${user.email}`,{
      headers:{
        authorization: `Bearer ,${user.accessToken}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
      
      setMyBooks(data);
    })
  },[]);



  if(loading){
    return <Loading></Loading>
  };

  const handleDelete=(id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
fetch(`http://localhost:3000/bookDetails/${id}`,{
      method:'DELETE',
      headers:{
        'content-type':'application/json'
      },
     })
    .then(res=>res.json())
     .then(data=>{
      console.log(data);
      Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    setMyBooks(myBooks.filter(book=>book._id!==id))
       
      })
     .catch(err=>{
      console.log(err)
      })


    
  }
});
  }
  return (
    <div>
      <h1 className='text-center text-[#f22e07] text-xl mt-5 font-bold'>My Books List</h1>
{
  myBooks.map(b=><div key={b._id}>
    {
      
    }
 <div className='border border-orange-700 flex justify-between items-center px-10 py-3 mt-5 rounded-lg'>


      <div className='text-[#f22e07] font-semibold'>
        <h3 className='text-xl mb-2'>Book Title : {b.title}</h3>
        <p>Author : {b.author}</p>
      </div>
      <div className='flex gap-5'>
         

 

        <Link to={`/update-book/${b._id}`} className='btn bg-[#f22e07] text-white hover:bg-black'>Update</Link>
        <button onClick={()=>handleDelete(b._id)} className='btn bg-[#f22e07] text-white hover:bg-black'>Delete</button>
      </div>
      </div>

  </div>

  )
}
     
    </div>
  );
};

export default MyBooks;