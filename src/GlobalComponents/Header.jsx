import {useState, useEffect} from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  const [popup, setPopup] = useState(false)


  return (
    <div className="bg-[#e9e9e9]">
      <div className="max-w-[1200px] px-[50px] mx-auto">
        <div className="w-[100%] flex justify-between items-center py-[20px]">
          <div>
            <h1 className="text-[28px] font-[800]">Logo</h1>
          </div>
          <div className="flex gap-[20px] items-center">
            <ul className="flex items-center gap-[20px]">
              <Link to="/my-learning">My Learning</Link>
              <Link to="/">Courses</Link>
            </ul>
            <div className="relative">
              <div onClick={() => setPopup(!popup)} className="cursor-pointer flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#00B238]">
                <span className="text-[#ffffff]">UR</span>
              </div>
              { popup &&
                <div className={`absolute right-[0px]`}>
                  <div className="py-[20px] flex flex-col gap-[10px] bg-[#ffffff] rounded-lg w-max">
                    <Link to="/signup">
                      <div className="py-[5px] pl-[20px] pr-[30px] bg-[#ffffff] hover:bg-[#e9e9e9]">Sign-up</div>
                    </Link>
                    <Link to="/login">
                      <div className="py-[5px] pl-[20px] pr-[30px] bg-[#ffffff] hover:bg-[#e9e9e9]">Login</div>
                    </Link>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header