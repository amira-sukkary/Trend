import{Link} from 'react-router-dom';

import {useNavigate} from 'react-router-dom'


export default function Navebar({logindata , setLoginData}) {
  let navigate=useNavigate()
function Logout(){
  localStorage.setItem('token');
  setLoginData(null)
  navigate("/")
}

  return <>
  
 <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
   <Link className="navbar-brand text-white"to="">Navbar</Link>
    <button className="navbar-toggler bg-white border border-5 border-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {logindata?   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className="nav-link active text-white" aria-current="page"to="home">Home</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link  text-white"to="movie">Movie</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link  text-white"to="tv">Tv</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link text-white"to="coffe">Coffe</Link>
        </li>
       
      </ul>:""}
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {logindata?<li className="nav-item">
         <Link onClick={Logout} className="nav-link text-white"to="">Logout</Link>
        </li> :<>  <li className="nav-item">
         <Link className="nav-link text-white"to="">Login</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link text-white"to="register">Register</Link>
        </li>
        </>}
       
       
        
       
      </ul>
      
    </div>
  </div>
</nav>

  </>
}
