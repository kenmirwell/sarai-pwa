import React, {useState,} from "react"

const EditLessonFields = ({data, handleChange, handleDeleteLesson}) => {

  return (
    <div className={`p-[20px] ${data.error ? "bg-red-100" : "bg-[#f1f1f1]"} hover:bg-[#d8fbe3]`}>
      <div className="flex gap-[20px]">
        <div className="flex flex-col gap-[10px] w-[100%]">
          <div className="flex flex-col w-[100%]">
            <p className="text-[12px] text-[#696969]">Lesson Title</p>
            <input  onChange={e => handleChange(e, data.id)} 
              name="title" 
              className={`${data.error ? "placeholder-red-400" : "placeholder-green-600"} text-[16px] bg-[#e2e2e2] text-[#6a6a6a] rounded-md w-[100%] p-[10px]`}
              placeholder="Enter title here"
              type="text" value={data.title}
            />
          </div>
          <div className="flex flex-col w-[100%]">
            <p className="text-[12px] text-[#696969]">Lesson Description</p>
            <input onChange={e => handleChange(e, data.id)}  
              name="description" 
              className={`${data.error ? "placeholder-red-400" : "placeholder-green-600"} text-[16px] bg-[#e2e2e2] text-[#6a6a6a] rounded-md w-[100%] p-[10px]`}
              placeholder="Enter lesson here"
              type="text" value={data.description}
            />
          </div>
          <div className="flex flex-col w-[100%]">
            <p className="text-[12px] text-[#696969]">Upload file</p>
            <input onChange={e => handleChange(e, data.id)}  name="" className="flex justify-center text-center text-[16px] bg-[#e2e2e2] text-[#6a6a6a] rounded-md w-[100%] px-[10px] py-[5px]" type="file" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[12px] text-[#696969]">Thumbnail</p>
            <div className="w-[100px] h-[100px] bg-[#e2e2e2] rounded-lg">
              {/* <img className="w-[100%]" src="" alt="" /> */}
            </div>
          </div>
          <div className="w-[100%]">
            <button onClick={() => handleDeleteLesson(data.id)} className="w-[100%] px-[20px] py-[5px] bg-[#e2e2e2] hover:bg-[red] rounded-sm">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditLessonFields;