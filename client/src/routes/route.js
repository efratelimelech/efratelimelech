import React from 'react'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from '../components/home/home'
import Login from '../components/login/login'
import SignUp from '../components/login/sign-up'
import NavFunc from '../components/home/nav'
import About from '../components/about/about'
import Campains from '../components/campaigns/campaigns'
import Locations from '../components/locations/locations'
import Customers from '../components/customers/customers'


export default function Routers(){

    return(
        <BrowserRouter> 
              <NavFunc/>
             <Routes>
             <Route path='/Home' element={<Home/>}/>
             <Route path="/Login" element={<Login/>}/>
             <Route path="/Sign-up" element={<SignUp/>}/>
             <Route path="/About" element={<About/>}/>
             <Route path="/Campains" element={<Campains/>}/>
             <Route path="/Locations" element={<Locations/>}/>
             <Route path="/customers" element={<Customers/>}/>
             <Route path="/" element={<Home/>}/>
             </Routes>
        </BrowserRouter>
    )
}


