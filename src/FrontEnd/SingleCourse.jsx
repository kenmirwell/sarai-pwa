import temporayImage from "../assets/farmers.png"
import LessonsData from "../Config/LessonsData"

const SingleCourse = () => {
  return (
    <div>
      <div className="w-[100%] bg-[#606060]">
        <div className="max-w-[1200px] px-[50px] mx-auto py-[35px]">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-[32px] text-[#ffffff] pb-[20px]">Course Name</h1>
                <div className="flex gap-[40px] text-[#ffffff]">
                  <p className="pb-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum nunc ac libero bibendum, sed rhoncus est pellentesque. Nullam odio odio, elementum vitae finibus eget, finibus sed velit. In at lacinia dui, vitae interdum augue. Cras lobortis neque vitae consectetur faucibus.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="max-w-[1200px] px-[50px] mx-auto pt-[50px]">
          <div class="h-[500px] rounded-lg overflow-hidden">
            <img class="w-full h-full object-cover" src={temporayImage} alt=""/>
          </div>
          <div className="pt-[40px]">
            <div className="flex justify-between items-center pb-[40px]">
              <h2 className="text-[24px] text-[#000000] font-[700]">Lessons and Progress</h2>
              <button className="px-[50px] py-[5px] border-[1px] bg-[#00B238] text-[#ffffff] rounded-[5px]" type="submit">Take Assessment</button>
            </div>
            {
              LessonsData.map((i, index) => (
                <div className="pb-[30px]">
                  <div className="flex items-start gap-[20px]">
                    <input className="w-[20px] h-[20px] mt-[8px]" type="checkbox"/>
                    <div>
                      <h6 className="text-[20px] font-[700]">{index+1}. {i.title}</h6>
                      <div className="flex gap-[10px]">
                          <p className="text-[18px] pl-[28px]">{i.description}</p>
                        </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCourse