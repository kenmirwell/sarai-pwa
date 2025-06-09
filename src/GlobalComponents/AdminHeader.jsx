const AdminHeader = ({setAdminRoute}) => {
  return (
    <div className="bg-[#606060]">
      <div className="max-w-[1200px] px-[50px] mx-auto">
        <div className="w-[100%] flex justify-between items-center py-[20px]">
          <div>
            <h1 className="text-[28px] font-[800] text-[#ffffff]">Logo</h1>
          </div>
          <div className="flex gap-[20px] items-center">
            <div className="w-[500px]">
              <input 
                className={`rounded-lg bg-[#ffffff] w-[100%] py-[10px] pr-[10px] pl-[20px] $text-[#ffffff] shadow-md`} type="text" placeholder="Enter Keyword" 
                // value={searchTerm}
                // 		onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <ul className="flex items-center gap-[20px]">
              <li onClick={() => setAdminRoute("users")} className="text-[#ffffff] cursor-pointer">Users</li>
              <li onClick={() => setAdminRoute("courses")} className="text-[#ffffff] cursor-pointer">Courses</li>
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

export default AdminHeader