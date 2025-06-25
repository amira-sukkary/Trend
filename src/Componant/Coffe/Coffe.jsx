import axios from 'axios'
import  { useEffect, useState } from 'react';

export default function Coffe() {
   const[coffetrend,setCoffeTrend]=useState([]);

   async function TrendCoffe(){
    let {data}= await axios.get(`https://api.sampleapis.com/coffee/hot`);
    console.log(data);
    setCoffeTrend(data)
  }
  useEffect(()=>{
    TrendCoffe ();
  },[])
  return <>
   <div className="container">
  <div className="row">
    <div className="col-md-4"></div>
    <div className="col-md-4">
      <hr/>
      <h1 className='text-center text-white'>coffe trend</h1>
      <hr/>
    </div>
    <div className="col-md-4"></div>
  </div>
 </div>
 <div className="container">
    <div className="row">
           {coffetrend.map((item)=><div className="col-md-3 text-white" key={item.id}>
           <div className="position-relative">
      <img src={item.image} className='w-100' alt=""  />
      <div className="imagelayer">
        <div className="imageinfo">
          <h6>{item.title}</h6>
        </div>
      </div>
      </div>
      <h1>{item.title}</h1>
      </div>)}
    </div>
  </div>
  </>
}
