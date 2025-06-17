import { useState, useEffect } from "react";
import AllCourses from "./AllCourses"
import Header from "../GlobalComponents/Header"
import MyLearning from "./MyLearning";
import SignUp from "./SignUp";
import Login from "./Login";
import InitialAssessment from "./InitialAssesment";
import BadGateway from "./BadGateway";
import { Routes, Route, useLocation, useNavigate, Link } from "react-router-dom";


const FrontEnd = () => {
    const location = useLocation()
    const [userLogin, setUserLogin] = useState({})

    return (
        <div>
        {
            location.pathname !== "/login" && 
            location.pathname !== "/signup" &&
            location.pathname !== "/404" &&
            <Header/>
        }
        <Routes>
            <Route path="/" element={<AllCourses/>} />
            <Route path="/my-learning" element={<MyLearning/>} />
            <Route path="/signup" element={<SignUp
                    setUserLogin={(e) => setUserLogin(e)}
                />} 
            />
            <Route path="/login" element={<Login/>} />
            <Route 
                path="/initial-assessment" 
                element={<InitialAssessment/>}
            />
            <Route path="/404" element={<BadGateway />} />
        </Routes>
        </div>
    )
}

export default FrontEnd