import AllCourses from "./AllCourses"
import Header from "../GlobalComponents/Header"
import { Routes, Route } from "react-router-dom";

const FrontEnd = () => {
    return (
        <div>
            <Header/>
            <AllCourses/>
        </div>
    )
}

export default FrontEnd