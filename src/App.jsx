

import{createBrowserRouter, RouterProvider} from 'react-router-dom'; 
import Layout from './Componant/Layout/Layout'
import Home from './Componant/Home/Home'
import Tv from './Componant/Tv/Tv';
import Coffe from './Componant/Coffe/Coffe';
import Movie from './Componant/Movie/Movie';
import Login from './Componant/Auth/Login';
import Register from './Componant/Auth/Register';
import {Toaster} from 'react-hot-toast'
import MovieDetails from './Componant/Details/MovieDetails';
import TvDetails from './Componant/Details/TvDetailes';
import {jwtDecode} from 'jwt-decode'
import { useEffect, useState } from 'react';

export default function App() {

  let [logindata,setLoginData]=useState(null)

function saveLogin(){
  let encodedToken=localStorage.getItem("token");
  let decodedToken=jwtDecode(encodedToken)
  console.log(decodedToken);
  setLoginData (decodedToken);
}

useEffect(()=>{
  if (localStorage.getItem("token")!=null){
    saveLogin()
  }
 

},[])

    let routers=createBrowserRouter([
     {path:"",element:<Layout logindata={logindata} setLoginData= {setLoginData} />,children:[
        {path:"home",element:<Home/>},
        {path:"movie",element:<Movie/>},
        {path:"tv",element:<Tv/>},
        {path:"moviedetails/:id",element:<MovieDetails/>},
        {path:"tvdetails/:id",element:<TvDetails/>},
        {path:"login",element:<Login saveLogin={saveLogin}/>},
        {path:"coffe",element:<Coffe/>},
        {index:true,element:<Login/>},
        {path:"register",element:<Register/>},  
     ]}
    ])
  return <>
  <Toaster/>
  <RouterProvider router={routers}></RouterProvider>
  
  </>
}
