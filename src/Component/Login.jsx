import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const {user,setUser,setLoading,signInWithEmailAndPasswordFunc,signInWithGoogleFunc}=useContext(AuthContext);

  const navigate=useNavigate();
  const location=useLocation();

  const handleSignIn=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password);

    // signin function
    signInWithEmailAndPasswordFunc(email,password)
    .then(res=>{
      console.log(res.user)
      toast.success("user logging successful")
      setUser(user)
      setLoading(false)
      navigate(`${location.state? location.state : '/'}`)
    })
    .catch(error=>{
      console.log(error.message)
      toast.error(error.message)
    })
  };

  // / google signin
    const handleGoogleSignIn=()=>{
    signInWithGoogleFunc()
    .then(res=>
    console.log(res.user),
    toast.success('user logging successful'),
     navigate(`${location.state? location.state : '/'}`),
    setUser(user),
    setLoading(false)
  )
  .catch(error=>{
    console.log(error.message)
    toast.error(error.message);
  });
  
  };
  return (
     <div className='bg-[#F22E07] border-base-300 rounded-box w-xs border p-4 mx-auto my-50 text-white font-bold'>
        <h1 className='text-center text-2xl underline mb-4'>Login Your Account</h1>
        <form onSubmit={handleSignIn}>
           <fieldset className="fieldset ">
             
       
    {/* email */}
      <label className="label">Your Email</label>
      <input type="email" name='email' className="input text-black" placeholder="enter your email" />
    {/* password */}
      <label className="label">Password</label>
      <input type="password" name='password' className="input text-black" placeholder="Password" />

      <p className='mt-1 font-bold'>forget your password ?</p>
    
      <button className="btn btn-neutral mt-2 bg-red-500 border-white">Log-in</button>
    </fieldset>
        </form>
        <p className='text-center'>------------or------------</p>
    {/* google login */}
    
    <div type='button' onClick={handleGoogleSignIn}>
    <button className="btn bg-red-500 w-full mt-2 text-white border-[#e5e5e5]">
      <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
      Login with Google
    </button>
    </div>
    
    
    <div  >
    <p className="text-center text-sm text-white/80 mt-3">
                      Didn't have an account?{" "}
                      <Link

                        to="/register"
                        className="text-pink-300 hover:text-white underline"
                      >
                        Register
                      </Link>
                    </p>
    
    </div>
    
         
       </div>
  );
};

export default Login;