import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { getUserByEmailAndPassword } from "../supabaseService"

const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: null,
    password: null,
    errors: {}
  })

  const handleChange = (e) => {
    setLoginDetails(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = () => {
    Object.keys(loginDetails).map(item => {
      if(!loginDetails[item]){
        setLoginDetails(prev => ({
          ...prev,
          errors: {
            ...prev.errors,
            [item]: 'This field is required'
          }
        }));
      } else {
        setLoginDetails(prev => ({
          ...prev,
          errors: {
            ...prev.errors,
            [item]: null
          }
        }));
      }
    })

    const { errors, ...newUser } = loginDetails;

    getUserByEmailAndPassword(newUser).then(res => {
      if(res.length > 0) {
        localStorage.setItem('loggedEmail', res[0].email);
        localStorage.setItem('loggedPassword', res[0].password)
        navigate('/initial-assessment')
      }
    })
  }

  return (
    <div className="flex w-[100%] h-[100vh] justify-center items-center">
      <div className="flex flex-col gap-[10px] px-[40px] py-[40px] bg-[#e9e9e9] rounded-[8px]">
        <div className="flex justify-center items-center w-[100%]">
          <h1 className="text-[24px] font-[700]">Login</h1>
        </div>
        <div className="flex flex-col gap-[10px] pt-[10px]">
          <div className="w-[300px]">
            <input name="email" onChange={(e) => handleChange(e)} className="border-[1px] p-[10px] w-[100%] rounded-[5px]" type="email" placeholder="Email Address" />
            {
              loginDetails["errors"]["email"] &&
              <p className="text-[red]">{loginDetails["errors"]["email"]}</p>
            }
          </div>
          <div className="w-[300px]">
            <input name="password" onChange={(e) => handleChange(e)} className="border-[1px] p-[10px] w-[100%] rounded-[5px]" type="password" placeholder="Password" />
            {
              loginDetails["errors"]["password"] &&
              <p className="text-[red]">{loginDetails["errors"]["password"]}</p>
            }
          </div>
          <button onClick={() => handleSubmit()} className="p-[10px] border-[1px] bg-[#191919] text-[#ffffff] rounded-[5px] mt-[10px]" type="submit">Login</button>
        </div>
        <div className="flex gap-[5px] text-[14px]">
          <p>Don't have an account yet?</p>
          <Link className="font-[700] cursor-pointer" to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  )
}

export default Login