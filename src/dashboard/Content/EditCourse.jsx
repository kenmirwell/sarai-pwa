import React, {useState, useEffect} from "react"
import { updateLessons, updateLesson, getCourseById, getLessonsbyCourse, deleteCourse } from "../../supabaseService"
import EditLessonFields from "./EditLessonFields"

const EditCourse = ({course, handleBack, triggerSave}) => {
  const [lessons, setLessons] = useState([])
  const [selectedCourse, setSelectedCourse] = useState([])
  

  useEffect(() => {
    getCourseById(course).then(res => setSelectedCourse(res))
    getLessonsbyCourse(course).then(res => setLessons(
      res.map(i => {
        return {...i, error: false}
      })
    ))

  }, [])

  //this is to update simply what in the input
  const handleChange = (e, id) => {

   const newState = lessons.map(item => {
      if (item.id === id) {
        return { ...item, [e.target.name]: e.target.value  };
      }
      return item;
    });

    setLessons(newState);
  }

  const handleSubmit = () => {

    //find if there are empty fields then map items to put an error tiem and value which is true if there are tiems found
    const emptyFields = lessons
      .filter(item => (item.title === "" || item.description === ""))
      .map(i => {
        return {...i, error: true}
      })

    if(emptyFields) {

      //merge the lessons and the empty fields
      const merged = lessons.map(itemA => {
        const match = emptyFields.find(itemB => itemB.id === itemA.id);
        return match ? { ...itemA, ...match } : itemA;
      });
      
      setLessons( merged);
    } else {
      updateLessons(lessons)
      triggerSave()
    }
  }

  const handleDeleteCourse = (id) => {
    deleteCourse(selectedCourse.id)
  }

  const handleDeleteLesson = (id) => {
    console.log(id)
  }

  const handleAddLesson = (id, order, courseID, index) => {
  const newLesson = {
    id: id + 1,
    title: "",
    description: "",
    order: order + 1,
    course_id: courseID
  };

  const newState = [
    ...lessons.slice(0, index + 1),
    newLesson,
    ...lessons.slice(index + 1).map(item => ({
      ...item,
      id: item.id + 1,
      order: item.order + 1
    }))
  ];

  setLessons(newState);
};


  return (
    <div className="py-[40px] px-[50px]">
      <div className="mb-[20px]">
          <div className="flex w-[100%] justify-between">
            <div onClick={() => handleBack()} className="cursor-pointer flex gap-[20px] pb-[20px] items-center">
              <svg width="18" height="12" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="#111111" d="M14.9998 9V8C14.9998 6.34315 13.6567 5 11.9998 5L1.99985 5M4.99985 9L1.70696 5.70711C1.31643 5.31658 1.31643 4.68342 1.70696 4.29289L4.99985 1" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <h6 className="hover:text-[#00b238]">Back to courses</h6>
            </div>
            <div className="flex gap-[20px]">
              <div>
                <button className="px-[20px] py-[5px] bg-[#f1f1f1] hover:bg-[#d8fbe3] rounded-sm w-max">See Assessment</button>
              </div>
              <div>
                <button onClick={handleSubmit} className="px-[20px] py-[5px] bg-[#f1f1f1] hover:bg-[#d8fbe3] rounded-sm w-max">Save</button>
              </div>
              <div>
                <button onClick={handleDeleteCourse} className="px-[20px] py-[5px] bg-[#f1f1f1] hover:bg-[#d8fbe3] rounded-sm w-max">Delete</button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start gap-[50px] rounded-lg">
            <div className="w-[100%]">
              {
                selectedCourse.map((i, ndx) => {
                  return (
                  <div key={"sel-course"+ndx}>
                      <div className="flex flex-col gap-[10px]">
                        <div className="flex flex-col">
                          <p className="text-[12px] text-[#696969]">Course Title</p>
                          <input onChange={e => handleChange(e)} className="text-[16px] bg-[#e2e2e2] text-[#6a6a6a] rounded-md w-[100%] p-[10px]" type="text" value={i.title} />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[12px] text-[#696969]">Course Description</p>
                          <input onChange={e => handleChange(e)} className="text-[16px] bg-[#e2e2e2] text-[#6a6a6a] rounded-md w-[100%] p-[10px]" type="text" value={i.description} />
                        </div>
                      </div>
                  </div>
                  )
                })
              }
            </div>
            <div>
              <div>
                <p className="text-[12px] text-[#696969]">Thumbnail</p>
                <div className="w-[200px] h-[150px] bg-[#e2e2e2] rounded-lg">
                  {/* <img className="w-[100%]" src="" alt="" /> */}
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        {
          lessons.sort((a, b) => a.order - b.order).map((i, ndx) => {
            return (
              <div key={"lessons"+ndx} className="flex">
                <div className="flex flex-col w-[5%]">
                  <p className="text-[18px] font-[700] text-[#696969]">{i.order}.</p>
                </div>
                <div className="w-[100%]">
                  <EditLessonFields
                    data={i}
                    handleChange={(e, data) => handleChange(e, data)}
                    handleDeleteLesson={(data) => handleDeleteLesson(data)}
                  />
                  <div className="w-[100%] mt-[5px]">
                    <button onClick={() => handleAddLesson(i.id, i.order, i.course_id, ndx)} className="w-max px-[20px] py-[5px] bg-[#e2e2e2] hover:bg-[#d8fbe3] rounded-sm">Add Lesson</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default EditCourse;