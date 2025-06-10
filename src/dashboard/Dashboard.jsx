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
            <Route path="/project-admin" element={<MainDashboard adminRoute={adminRoute}/>} />
        </div>
    )
}

export default Dashboard