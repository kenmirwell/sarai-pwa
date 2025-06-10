import AllCourses from "./AllCourses"
import Header from "../GlobalComponents/Header"
import MyLearning from "./MyLearning";
import { Routes, Route } from "react-router-dom";

const FrontEnd = () => {
    return (
        <div>
        <Header/>
        <Routes>
            <Route path="/" element={<AllCourses/>} />
            <Route path="/my-learning" element={<MyLearning/>} />
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        </div>
    )
}

export default FrontEnd