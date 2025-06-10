import { useState } from "react"
import MainDashboard from "./MainDashBoard"
import AdminHeader from "../GlobalComponents/AdminHeader"

const Dashboard = () => {
    const [adminRoute, setAdminRoute] = useState("users")

    const handleRoute = (route) => {
        setAdminRoute(route)
    }

    return (
        <div>
            <AdminHeader setAdminRoute={(route) => handleRoute(route)}/>
            <MainDashboard adminRoute={adminRoute}/>
        </div>
    )
}

export default Dashboard