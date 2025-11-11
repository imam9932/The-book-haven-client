import React from 'react';
import { toast } from 'react-toastify';

const AddBook = () => {
  const handleAddBook=(e)=>{
    e.preventDefault();
    const data={
      title:e.target.title.value,
     author:e.target.author.value,
     genre:e.target.genre.value,
     rating:e.target.rating.value,
     summary:e.target.summary.value,
     image:e.target.image.value,
     email:e.target.email.value,
     name:e.target.name.value,
    }
     
    fetch('http://localhost:3000/allBooks',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
     .then(data=>{
      console.log(data);
      toast.success('books added successfully')
     })
     .catch(err=>{
      console.log(err)
      toast.error(err.message)
     })

  }
  return (
    <div className='bg-[#F22E07] border-base-300 rounded-box w-xs border p-4 mx-auto my-10 text-white font-bold'>
           <h1 className='text-center text-2xl mb-4'>Add a Book</h1>
           <form onSubmit={handleAddBook}  >
              <fieldset className="fieldset ">
                
          
       {/* title */}
         <label className="label">Book Title</label>
         <input type="text" name='title' className="input text-black" placeholder="book title" />
       {/* author */}
         <label className="label">Author</label>
         <input type="text" name='author' className="input text-black" placeholder="author" />
       {/* genre */}
         <label className="label">Genre</label>
         <input type="text" name='genre' className="input text-black" placeholder="genre" />
       {/* rating */}
         <label className="label">Rating</label>
         <input type="number" name='rating' className="input text-black" placeholder="rating" />
       {/* summary */}
         <label className="label">Summary</label>
         <input type="text" name='summary' className="input text-black" placeholder="summary" />
       {/* cover image */}
         <label className="label">Cover Image</label>
         <input type="text" name='image' className="input text-black" placeholder="URL" />
       {/* email */}
         <label className="label">Your Email</label>
         <input type="email" name='email' className="input text-black" placeholder="email" />
       {/* name */}
         <label className="label">Your Name</label>
         <input type="text" name='name' className="input text-black" placeholder="name" />
   
          
       
         <button className="btn btn-neutral mt-2 bg-red-500 border-white">Add Book</button>
       </fieldset>
           </form>
            
       
       
        
       
            
          </div>
  );
};

export default AddBook;