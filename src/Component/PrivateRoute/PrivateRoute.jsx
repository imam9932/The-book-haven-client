import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
 import { AuthContext } from '../../Provider/AuthContext';
import Loading from '../Loading';

const PrivateRoute = ({children}) => {

  const {user,loading}=useContext(AuthContext);
console.log(user,loading);

const location=useLocation();
console.log(location);

if(loading){
  return <Loading></Loading>
}

if (user && user?.email){
  return children;
}
  return <Navigate to={'/login'} state={location.pathname}></Navigate>;
};

export default PrivateRoute;