const Header = () => {
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
            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#00B238]">
              <span className="text-[#ffffff]">UR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header