import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const UpdateBook = () => {
  const promise=useLoaderData();
  const update=promise.result;
  console.log(update);
  const navigate=useNavigate();

  const handleUpdateBook=(e)=>{
    e.preventDefault();
    const data={
      title:e.target.title.value,
     author:e.target.author.value,
     genre:e.target.genre.value,
     rating:e.target.rating.value,
     summary:e.target.summary.value,
     image:e.target.image.value,
      
    }
     
    fetch(`http://localhost:3000/bookDetails/${update._id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
     .then(data=>{
      console.log(data);
      toast.success('books updated successfully')
      navigate('/myBooks')
     })
     .catch(err=>{
      console.log(err)
      toast.error(err.message)
     })

  }
  return (
    <div className='bg-[#F22E07] border-base-300 rounded-box w-xs border p-4 mx-auto my-10 text-white font-bold'>
           <h1 className='text-center text-2xl mb-4'>Update Your Book</h1>
           <form onSubmit={handleUpdateBook}    >
              <fieldset className="fieldset ">
                
          
       {/* title */}
         <label className="label">Book Title</label>
         <input type="text"
           name='title' className="input text-black" placeholder="book title" defaultValue={update.title} />
       {/* author */}
         <label className="label">Author</label>
         <input type="text" name='author' className="input text-black" placeholder="author" defaultValue={update.author} />
       {/* genre */}
         <label className="label">Genre</label>
         <input type="text" name='genre' className="input text-black" placeholder="genre" defaultValue={update.genre} />
       {/* rating */}
         <label className="label">Rating</label>
         <input type="number" name='rating' className="input text-black" placeholder="rating" defaultValue={update.rating} />
       {/* summary */}
         <label className="label">Summary</label>
         <input type="text" name='summary' className="input text-black" placeholder="summary" defaultValue={update.summary} />
       {/* cover image */}
         <label className="label">Cover Image</label>
         <input type="text" name='image' className="input text-black" placeholder="URL" defaultValue={update.image} />
       
          
       
         <button className="btn btn-neutral mt-2 bg-red-500 border-white">Update Book</button>
       </fieldset>
           </form>
            
       
       
        
       
            
          </div>
  );
};

export default UpdateBook;