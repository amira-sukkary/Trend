
import axios from 'axios';
import { useEffect, useState } from 'react';
import { data, useParams } from 'react-router-dom';

export default function MovieDetails() {
  let {id}=useParams();
  const [detailesmovie,setDetailesMovie]=useState({})
  async function TrendDatailesMovie(id) {
    let {data}= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=44ee5523e457e74020effc2bddc4592e`)
    console.log(data);
    setDetailesMovie(data)
  }
  useEffect(()=>{
    TrendDatailesMovie(id);
   
  },[])

  return <>
 <div className="container">
 <div className="row">
  <div className="col-md-3">
  <img src={'https://image.tmdb.org/t/p/w500/'+detailesmovie.poster_path} className='w-100' alt=""  />

  </div>
  <div className="col-md-9 text-white">
    <h3 className='h6 my-2'>{detailesmovie.title}</h3>
    <p className='py-2'>{detailesmovie.tagline}</p>
    <ul className='list-unstyled d-flex'>{detailesmovie.genres?.map(genres=><div key={detailesmovie.id} className='bg-info p-3 mx-2 rounded-2'>{genres.name}</div>)}</ul>
    <p className='py-2'>vote :{detailesmovie?.vote_average?.toFixed(1)}</p>
    <p className='py-2'>vote count :{detailesmovie?.vote_count?.toFixed(1)}</p>
    <p className='py-2'>popularity :{detailesmovie?.popularity?.toFixed(1)}</p>
    <p className='py-2'>release data :{detailesmovie?.release_data}</p>
    <p className='py-2'>{detailesmovie?.overview}</p>


    




  </div>
 </div>
 </div>
  </>
}
