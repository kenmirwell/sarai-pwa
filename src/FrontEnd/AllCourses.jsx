import CourseCard from "../GlobalComponents/CourseCard"
import Courses from "../Config/CoursesData"

const AllCourses = () => {

  return (
    <div className="pb-[50px]">
      <div className="w-[100%] bg-[#606060]">
        <div className="max-w-[1200px] px-[50px] mx-auto pt-[20px]">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-[32px] text-[#ffffff] pb-[20px]">Courses</h1>
                <div className="flex gap-[40px] text-[#ffffff]">
                  <p className="pb-[10px]">All Courses</p>
                  <p className="pb-[10px]">Category A</p>
                  <p className="pb-[10px]">Category B</p>
                  <p className="pb-[10px]">Category C</p>
                  <p className="pb-[10px]">Category D</p>
                </div>
              </div>
              <div className="w-[300px] pt-[10px] flex gap-[10px]">
                <input className="bg-[#ffffff] p-[8px] w-[100%] rounded-[5px]" type="text" placeholder="Search" />
                <div className="bg-[#00B238] flex items-center justify-center px-[12px] py-[4px] rounded-[8px]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L22.2929 23.7071ZM19.1176 10.0588H18.1176C18.1176 14.5096 14.5096 18.1176 10.0588 18.1176V19.1176V20.1176C15.6142 20.1176 20.1176 15.6142 20.1176 10.0588H19.1176ZM10.0588 19.1176V18.1176C5.60806 18.1176 2 14.5096 2 10.0588H1H0C0 15.6142 4.50349 20.1176 10.0588 20.1176V19.1176ZM1 10.0588H2C2 5.60806 5.60806 2 10.0588 2V1V0C4.50349 0 0 4.50349 0 10.0588H1ZM10.0588 1V2C14.5096 2 18.1176 5.60806 18.1176 10.0588H19.1176H20.1176C20.1176 4.50349 15.6142 0 10.0588 0V1ZM16.5294 16.5294L15.8223 17.2365L22.2929 23.7071L23 23L23.7071 22.2929L17.2365 15.8223L16.5294 16.5294Z"/>
                  </svg>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="max-w-[1200px] px-[50px] mx-auto pt-[50px]">
          {
            <div className="flex flex-wrap gap-[50px]">
              {
                Courses.map((i, index) => (
                  <CourseCard
                    title={i.title}
                    description={i.description}
                    progress={i.progress}
                    category={i.category}
                    thumbnail={i.thumbnail}
                  />
                ))
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default AllCourses