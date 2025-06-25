
import axios from 'axios';
import { useEffect, useState } from 'react';
import { data, useParams } from 'react-router-dom';

export default function TvDetails() {
  let {id}=useParams();
  const [detailestv,setDetailesTv]=useState({})
  async function TrendDatailesTv(id) {
    let {data}= await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=44ee5523e457e74020effc2bddc4592e`)
    console.log(data);
    setDetailesTv(data)
  }
  useEffect(()=>{
    TrendDatailesTv(id);
   
  },[])

  return <>
 <div className="container">
 <div className="row">
  <div className="col-md-3">
  <img src={'https://image.tmdb.org/t/p/w500/'+detailestv.poster_path} className='w-100' alt=""  />

  </div>
  <div className="col-md-9 text-white">
    <h3 className='h6 my-2'>{detailestv.name}</h3>
    <p className='py-2'>{detailestv.tagline}</p>
    <ul className='list-unstyled d-flex'>{detailestv.genres?.map(genres=><div key={detailestv.id} className='bg-info p-3 mx-2 rounded-2'>{genres.name}</div>)}</ul>
    <p className='py-2'>vote :{detailestv?.vote_average?.toFixed(1)}</p>
    <p className='py-2'>vote count :{detailestv?.vote_count?.toFixed(1)}</p>
    <p className='py-2'>popularity :{detailestv?.popularity?.toFixed(1)}</p>
    <p className='py-2'>release data :{detailestv?.first_air_date}</p>
    <p className='py-2'>{detailestv?.overview}</p>


    




  </div>
 </div>
 </div>
  </>
}
