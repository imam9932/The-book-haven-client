import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
   <div className='bg-[#F22E07] border-base-300 rounded-box w-xs border p-4 mx-auto my-50 text-white font-bold'>
    <h1 className='text-center text-2xl'>Register</h1>
    <form>
       <fieldset className="fieldset ">
        {/* name */}
  <label className="label">Your Name</label>
  <input type="text" name='name' className="input" placeholder="write your name" />

  {/* photo */}
  <label className="label">Photo URL</label>
  <input type="text" name='image' className="input" placeholder="URL" />
   
{/* email */}
  <label className="label">Your Email</label>
  <input type="email" name='email' className="input" placeholder="enter your email" />
{/* password */}
  <label className="label">Password</label>
  <input type="password" name='password' className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4 bg-red-500 border-white">Register</button>
</fieldset>
    </form>
    <p className='text-center'>------------or------------</p>
{/* google login */}

<div>
<button className="btn bg-red-500 w-full mt-2 text-white border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
</div>


<div  >
<p className="text-center text-sm text-white/80 mt-3">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-pink-300 hover:text-white underline"
                  >
                    Login
                  </Link>
                </p>

</div>

     
   </div>
  );
};

export default Register;