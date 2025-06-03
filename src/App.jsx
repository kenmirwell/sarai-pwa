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
import './App.css'

function App() {

  return (
    <div>
      <Header/>
      {/* <MainDashboard/> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
      {/* <InitialAssessment/> */}
      {/* <MyLearning/> */}
      {/* <AllCourses/> */}
      <SingleCourse/>
    </div>
  )
}

export default App
