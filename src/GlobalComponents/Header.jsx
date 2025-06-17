import {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { getUserByEmail } from '../supabaseService'

const Header = () => {
  const [popup, setPopup] = useState(false)
  const [loggedUser, setLoggeduser] = useState(null)
  const firstLetter = (loggedUser?.first_name?.[0]) || "?";
  const secondLetter = (loggedUser?.last_name?.[0]) || "?";

  const navigate = useNavigate();

  useEffect(() => {
  
      const username = localStorage.getItem('loggedEmail');
      const password = localStorage.getItem('loggedPassword');
  
      if(username && password) {
            getUserByEmail(username).then((res) => {
            setLoggeduser(res[0])
          })
      }
    }, [])

  const handleLogout = () => {
    localStorage.removeItem('loggedEmail');
    localStorage.removeItem('loggedPassword');
    setLoggeduser(null)
    navigate("/")
  }

  return (
    <div className="bg-[#e9e9e9]">
      <div className="max-w-[1200px] px-[50px] mx-auto">
        <div className="w-[100%] flex justify-between items-center py-[20px]">
          <div>
            <h1 className="text-[28px] font-[800]">Logo</h1>
          </div>
          <div className="flex gap-[20px] items-center">
            {loggedUser && loggedUser.email &&
              <ul className="flex items-center gap-[20px]">
                <Link to="/my-learning">My Learning</Link>
                <Link to="/">Courses</Link>
              </ul>
            }
            <div className="relative">
              {loggedUser && loggedUser.email ?
              <div onClick={() => setPopup(!popup)} className="cursor-pointer flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#00B238]">
                <span className="text-[#ffffff]">{firstLetter}{secondLetter}</span>
              </div> :
             <div className="flex gap-[5px]">
               <Link to="/login" className="px-[20px] py-[5px] cursor-pointer flex justify-center items-center rounded-lg bg-[#00B238]">
                  <span className="text-[#ffffff]">Login</span>
                </Link>
                <Link to="/signup" className="px-[20px] py-[5px] cursor-pointer flex justify-center items-center rounded-lg bg-[#00B238]">
                  <span className="text-[#ffffff]">Sign-up</span>
                </Link>
             </div>
              }
              { popup &&
                <div className={`absolute right-[0px]`}>
                  <div className="py-[20px] flex flex-col gap-[10px] bg-[#ffffff] rounded-lg w-max">
                    {loggedUser && loggedUser.email &&
                      <div onClick={handleLogout} className="py-[5px] pl-[20px] pr-[30px] bg-[#ffffff] hover:bg-[#e9e9e9]">Logout</div> 
                    }
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