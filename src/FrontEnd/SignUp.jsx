

const SignUp = () => {
  return (
    <div className="flex w-[100%] h-[100vh] justify-center items-center">
      <div className="flex flex-col gap-[10px] px-[40px] py-[40px] bg-[#e9e9e9] rounded-[8px]">
        <div className="flex flex-col justify-center items-left w-[100%]">
          <span>Let's get you started</span>
          <h1 className="text-[24px] font-[700]">Create an Account</h1>
        </div>
        <form action="submit" className="flex flex-col gap-[10px] pt-[20px]">
          <div className="w-[300px]">
            <input className="border-[1px] p-[10px] w-[100%] rounded-[5px]" type="text" placeholder="Full Name" />
          </div>
          <div className="w-[300px]">
            <input className="border-[1px] p-[10px] w-[100%] rounded-[5px]" type="email" placeholder="Email Address" />
          </div>
          <div className="w-[300px]">
            <input className="border-[1px] p-[10px] w-[100%] rounded-[5px]" type="password" placeholder="Password" />
          </div>
          <div className="w-[300px]">
            <input className="border-[1px] p-[10px] w-[100%] rounded-[5px]" type="text" placeholder="Occupation" />
          </div>
          <button className="p-[10px] border-[1px] bg-[#191919] text-[#ffffff] rounded-[5px] mt-[10px]" type="submit">Submit</button>
        </form>
        <div className="flex gap-[5px] text-[14px]">
          <p>Already have an account?</p>
          <p className="font-[700]">Login in</p>
        </div>
      </div>
    </div>
  )
}

export default SignUp