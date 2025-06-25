import React from 'react'
import Navebar from '../Navebar/Navebar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout({logindata, setLoginData}) {
  return <>
  <Navebar logindata={logindata} setLoginData= {setLoginData} />
  <Outlet/>
  <Footer/>
  </>
}
