import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Movie() {
 const[movietrend,setMovieTrend]=useState([]);

 async function TrendMovie() {
  let {data}=await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=44ee5523e457e74020effc2bddc4592e`)
 console.log(data.results);
 setMovieTrend(data.results)
  }

  useEffect(() => {
    TrendMovie();
  },[])

  return <>
 
 <div className="container">
  <div className="row">
    <div className="col-md-4"></div>
    <div className="col-md-4">
      <hr/>
      <h1 className='text-center text-white'>MovieTv</h1>
      <hr/>
    </div>
    <div className="col-md-4"></div>
  </div>
 </div>
  
  <div className="container">
    <div className="row">
     
           {movietrend.map((item)=><div className="col-md-3 text-white" key={item.id}>
            <Link to={`/moviedetails/${item.id}`} className='text-decoration-none'>
            <div className="position-relative">
      <img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100' alt=""  />
      <div className="imagelayer">
        <div className="imageinfo">
          <h6>{item.title}</h6>
        </div>
      </div>
      {item.vote_average?<div className='p-2 position-absolute end-0 top-0 text-whit bg-info'>{item.vote_average?.toFixed(1)}</div>:""}
      </div>
     </Link>
      <h1>{item.title}</h1>
      
      </div>)}
    </div>
  </div>
  </>
}
