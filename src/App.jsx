import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainDashboard from './dashboard/MainDashBoard'
import SignUp from './FrontEnd/SignUp'
import Login from './FrontEnd/Login'
import Header from './GlobalComponents/Header'
import InitialAssessment from './FrontEnd/InitialAssesment'
import AllCourses from './FrontEnd/AllCourses'
import MyLearning from './FrontEnd/MyLearning'
import SingleCourse from './FrontEnd/SingleCourse'
import AdminHeader from './GlobalComponents/AdminHeader'
import { Routes, Route } from "react-router-dom";
import FrontEnd from './FrontEnd/Frontend'
import Dashboard from './dashboard/Dashboard'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<FrontEnd/>} />
        <Route path="/project-admin/*" element={<Dashboard/>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
    // <div>
      // {/* <Header/> */}
      // // <AdminHeader setAdminRoute={(route) => handleRoute(route)}/>
      // // <MainDashboard adminRoute={adminRoute}/>
      // {/* <SignUp/> */}
      // {/* <Login/> */}
      // {/* <InitialAssessment/> */}
      // {/* <MyLearning/> */}
      // {/* <AllCourses/> */}
      // {/* <SingleCourse/> */}
    // </div>
  )
}

export default App
