import {useState, useEffect} from "react"
import { createUser } from "../supabaseService";
import { useNavigate, Link } from "react-router-dom"

const SignUp = ({setUserLogin}) => {
  const navigate = useNavigate()
  const [createdUser, setCreatedUser] = useState([])
  const [userDetails, setUserDetails] = useState({
    first_name: null,
    middle_name: null,
    last_name: null,
    email: null,
    password: null,
    errors: {}
  });

  useEffect(() => {
    if(createdUser.length > 0) {
      navigate('/initial-assessment');
    }
  }, [createdUser])

  const handleChange = (e) => {
    setUserDetails(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }
  
  
  const handleSubmit = () => {
    Object.keys(userDetails).map(item => {
      if(!userDetails[item]){
        setUserDetails(prev => ({
          ...prev,
          errors: {
            ...prev.errors,
            [item]: 'This field is required'
          }
        }));
      } else {
        setUserDetails(prev => ({
          ...prev,
          errors: {
            ...prev.errors,
            [item]: null
          }
        }));
      }
    })

    const { errors, ...newUser } = userDetails;

    createUser(newUser).then(res => {
      if(res.length > 0) {
        localStorage.setItem('loggedEmail', res[0].email);
        localStorage.setItem('loggedPassword', res[0].password)
        setCreatedUser(res)
      }
    })
  }

  return (
    <div className="flex w-[100%] h-[100vh] justify-center items-center">
      <div className="flex flex-col gap-[10px] px-[40px] py-[40px] bg-[#e9e9e9] rounded-[8px]">
        <div className="flex flex-col justify-center items-left w-[100%]">
          <span>Let's get you started</span>
          <h1 className="text-[24px] font-[700]">Create an Account</h1>
        </div>
        <div className="flex flex-col gap-[10px] pt-[20px]">
          {
            Object.keys(userDetails).map(item => 
             (
               item !== "errors" &&
                <div className="w-[300px]">
                  <p className="text-[12px]">{item}</p>
                  <input onChange={(e) => handleChange(e)} name={item} className={`border-[1px] ${userDetails["errors"][item] && "border-[red]"} p-[10px] w-[100%] rounded-[5px]`} type="text" placeholder={`Enter ${item}`} />
                  {
                    userDetails["errors"][item] &&
                    <p className="text-[red]">{userDetails["errors"][item]}</p>
                  }
                </div>
             )
            )
          }
          <button onClick={() => handleSubmit()} className="p-[10px] border-[1px] bg-[#191919] text-[#ffffff] rounded-[5px] mt-[10px]" type="submit">Submit</button>
        </div>
        <div className="flex gap-[5px] text-[14px]">
          <p>Already have an account?</p>
          <Link className="font-[700] cursor-pointer" to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp