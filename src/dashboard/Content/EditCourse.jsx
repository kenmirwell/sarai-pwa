import React, {useState, useEffect, useRef} from "react"
import { 
    updateLessons, 
    getCourseById, 
    getLessonsbyCourse, 
    deleteCourse, 
    deleteLessons, 
    createLessons, 
    storageUpload,
    updateCourse } from "../../supabaseService"
import EditLessonFields from "./EditLessonFields"

const EditCourse = ({course, handleBack, triggerSave}) => {
  const fileInputRef = useRef(null);
  const [lessons, setLessons] = useState([])
  const [selectedCourse, setSelectedCourse] = useState([])
  const [toDeleteLesson, setTodeleteLesson] = useState([])
  const [lessonThumbnail, setlessonThumbnail] = useState([])
  const [ fetchedLessonsThumbnail, setfetchedLessonsThumbnail] = useState([])
  

  useEffect(() => {
    getCourseById(course).then(res => setSelectedCourse(res))
    getLessonsbyCourse(course).then(res => setLessons(
      res.map(i => {
        return {...i, error: false}
      })
    ))

  }, [])


  const handleCourseChange = async (e, id) => {
    let newState;
    
    if (e.target.name === "thumbnail" && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Wait for the upload to finish first
      const matchingItem = selectedCourse.find(item => item.id === id);
      const fileName = `course_${matchingItem.course_id}_id_${matchingItem.id}_${file.name.replace(/\s+/g, "_")}`;
      
      const res = await storageUpload(fileName, file); // Wait for upload to finish
      const publicUrl = res.publicUrl;

      console.log(publicUrl)

      // Then build new state
      newState = selectedCourse.map(item => {
        if (item.id === id) {
          return {
            ...item,
            [e.target.name]: publicUrl, // Assign the returned URL
          };
        }
        return item;
      });
    } else {
      newState = selectedCourse.map(item => {
        if (item.id === id) {
          return { ...item, [e.target.name]: e.target.value };
        }
        return item;
      });
    }

    setSelectedCourse(newState)
  };


  console.log(selectedCourse)

  //this is to update simply what is in the input
  const handleChange = async (e, id, course) => {

    let newState;

    // If it's a file upload
    if (e.target.name === "thumbnail" && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Wait for the upload to finish first
      const matchingItem = lessons.find(item => item.id === id);
      const fileName = `course_${matchingItem.course_id}_id_${matchingItem.id}_${file.name.replace(/\s+/g, "_")}`;
      
      const res = await storageUpload(fileName, file); // Wait for upload to finish
      const publicUrl = res.publicUrl;

      console.log(publicUrl)

      // Then build new state
      newState = lessons.map(item => {
        if (item.id === id) {
          return {
            ...item,
            [e.target.name]: publicUrl, // Assign the returned URL
          };
        }
        return item;
      });

    } else {
      // Handle normal text input changes
      newState = lessons.map(item => {
        if (item.id === id) {
          return { ...item, [e.target.name]: e.target.value };
        }
        return item;
      });
    }

    setLessons(newState);
  }

  const handleUploadClick = (trigger) => {    
    trigger.current.click()
  };


  const handleSubmit = () => {

    updateCourse(selectedCourse)

    //find if there are empty fields then map items to put an error tiem and value which is true if there are tiems found
    const emptyFields = lessons
      .filter(item => (item.title === "" || item.description === ""))
      .map(i => {
        return {...i, error: true}
      })


    if(emptyFields.length > 0) {

      //merge the lessons and the empty fields
      const merged = lessons.map(itemA => {
        const match = emptyFields.find(itemB => itemB.id === itemA.id);
        return match ? { ...itemA, ...match } : itemA;
      });
      
      setLessons( merged);

    } else {
      const filterNewLessons = lessons.filter((item) => item.newItem )
      const filterLessons = lessons.filter((item) => !item.newItem )
      
      const newLessons = filterNewLessons.map(i => ({
        title: i.title,
        description: i.description,
        order: i.order,
        course_id: i.course_id,
        thumbnail: i.thumbnail
      }))

      const fitleredLessons = filterLessons.map(i => ({
        id: i.id,
        title: i.title,
        description: i.description,
        order: i.order,
        course_id: i.course_id,
        thumbnail: i.thumbnail
      }))
      
      if(toDeleteLesson) {
        deleteLessons(toDeleteLesson)
      }
      
      if(newLessons) {
        createLessons(newLessons)
      }
      updateLessons(fitleredLessons)
      triggerSave()
    }
  }


  const handleDeleteCourse = (id) => {
    deleteCourse(selectedCourse.id)
  }


  const handleDeleteLesson = (id, order, courseID, index) => {
    const newState = [
      ...lessons.slice(0, index),
      ...lessons.slice(index + 1).map(item => ({
        ...item,
        order: item.order - 1
      }))
    ]

    const deletedLessonsIDs = lessons.filter(item => item.id === id).map(i => ({
      id: i.id
    }))

    setTodeleteLesson((prev) => [
      ...prev,
      ...deletedLessonsIDs
    ]);

    setLessons(newState);
  }


  const handleAddLesson = (id, order, courseID, index) => {

    const generateID = (length = 16) => {
      const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let token = '';
      for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          token += charset[randomIndex];
      }
      return token;
    }

    const newLesson = {
      id: generateID(),
      title: "",
      description: "",
      order: order + 1,
      course_id: courseID,
      newItem: true
    };

    const newState = [
      ...lessons.slice(0, index + 1),
      newLesson,
      ...lessons.slice(index + 1).map(item => ({
        ...item,
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
          <div className="w-[100%] rounded-lg">
            {
              selectedCourse.map((i, ndx) => {
                return (
                <div className="flex gap-[20px]" key={"sel-course"+ndx}>
                    <div className="w-[100%]">
                      <div className="flex flex-col gap-[10px]">
                        <div className="flex flex-col">
                          <p className="text-[12px] text-[#696969]">Course Title</p>
                          <input name="title" onChange={e => handleCourseChange(e, i.id)} className="text-[16px] bg-[#e2e2e2] text-[#6a6a6a] rounded-md w-[100%] p-[10px]" type="text" value={i.title} />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[12px] text-[#696969]">Course Description</p>
                          <input name="description" onChange={e => handleCourseChange(e, i.id)} className="text-[16px] bg-[#e2e2e2] text-[#6a6a6a] rounded-md w-[100%] p-[10px]" type="text" value={i.description} />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-[12px] text-[#696969]">Thumbnail</p>
                      <div
                          id="upload-area"
                          className="flex w-[100px] h-[100px] bg-[#e2e2e2] rounded-lg"
                          onClick={() => handleUploadClick(fileInputRef)}
                      >
                          <img className="w-[100%]" src={i.thumbnail ? i.thumbnail : "#"} alt="" />
                      </div>

                      {/* Hidden input field */}
                      <input
                        type="file"
                        ref={fileInputRef}
                        name="thumbnail"
                        onChange={e => handleCourseChange(e, i.id)}
                        className="hidden"
                        accept="image/*"
                      />
                    </div>
                </div>
                )
              })
            }
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
                    handleChange={(e, dataID, courseID) => handleChange(e, dataID, courseID)}
                    handleDeleteLesson={() => handleDeleteLesson(i.id, i.order, i.course_id, ndx)}
                    handleUploadClick={(trigger) => handleUploadClick(trigger)}
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