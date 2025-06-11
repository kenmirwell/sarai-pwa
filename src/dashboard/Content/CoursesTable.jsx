import React, { useState, useEffect } from "react"
import DataTable from 'react-data-table-component';
import { coursesColumns } from "./coursesColumn";
import { getCourses } from '../../supabaseService';
import EditCourse from "./EditCourse";

const CoursesTable = ({triggerSave}) => {
  const [tableData, setTableData] = useState([])
  const [selectedCourse, setSelectedCourse] = useState(null)



  useEffect(() => {
    getCourses().then(res => setTableData(res))
  }, [])

  const handleSelect = (id) => {
    setSelectedCourse(id)
  }

  const handleBack = () => {
    setSelectedCourse(null)
  }

  return (
    <div className="bg-[#f9f9f9] pt-[30px]">
      <div className="max-w-[1200px] px-[50px] mx-auto">
        {
          !selectedCourse &&
          <div  className="flex w-[100%]">
            <h6 className="font-[600] text-[24px]">Courses</h6>
          </div>
        }
        <div className={`w-[100%]`}>
          <div className="pt-[30px]">
            <div className="shadow-lg rounded-md overflow-hidden">
              {
                !selectedCourse ?
                <DataTable
                  highlightOnHover
                  columns={coursesColumns()}
                  data={tableData}
                  striped //how to customized this
                  theme={null}
                  pagination
                  onRowClicked={row => handleSelect(row.id)}
                  // 	conditionalRowStyles={conditionalRowStyles}
                /> :
                <EditCourse
                  triggerSave={() => triggerSave()}
                  course={selectedCourse}
                  handleBack={() => handleBack()}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesTable;