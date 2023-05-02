import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import Home from './main/Home'

import Login from './main/Login';
import Search from './main/Search';
function AppRouter() {
  return (
    <div>
        <Router>
          <Routes>
          <Route path='/' element ={JSON.parse(sessionStorage.getItem("isLogin")) ?<Home/>: <Navigate to = "/login" />} />
            <Route path = '/login' element ={<Login/>}/>
            <Route path = '/search' element = {<Search/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default AppRouter;

