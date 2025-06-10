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
import './App.css'

function App() {
  const [adminRoute, setAdminRoute] = useState("users")

  const handleRoute = (route) => {
    setAdminRoute(route)
  }

  return (
    <div>
      <AdminHeader setAdminRoute={(route) => handleRoute(route)}/>
      <Routes>
        <Route path="/" element={<AllCourses/>} />
        <Route path="/project-admin" element={<MainDashboard adminRoute={adminRoute}/>} />
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
