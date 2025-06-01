import DbContent from "./Content/DbContent"
import Sidebar from "./Sidebar/Sidebar"

const MainDashboard = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <DbContent/>
    </div>
  )
}

export default MainDashboard