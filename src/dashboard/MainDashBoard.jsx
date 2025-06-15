import Sidebar from "./Sidebar/Sidebar"
import UsersTable from "./Content/UsersTable"
import CoursesTable from "./Content/CoursesTable"
import PreAssessment from "./Content/PreAssessment"
import Spinner from "./Content/Spinner"
import { useState } from "react"

const MainDashboard = ({adminRoute}) => {
  const [loading, setLoading] = useState(false)

  const triggerSave = () => {
    setLoading(true)

    setTimeout( () => {
      setLoading(false)
    }, 2000)
  }
  
  return (
    // <div className="flex">
    //   {/* <Sidebar/> */}
    //   {/* <DbContent/> */}
    // </div>
   <>
    { loading ?
      <Spinner/> :
      <div>
          {
            adminRoute === "users" ?
              <UsersTable/> :
            adminRoute === "courses" ?
              <CoursesTable
                triggerSave={() => (triggerSave())}
              /> :
            adminRoute === "pre-assessment" &&
              <PreAssessment
                triggerSave={() => (triggerSave())}
              />
          }
      </div>
    }
   </>
  )
}

export default MainDashboard