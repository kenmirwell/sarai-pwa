const CourseCard = (props) => {
  return (
    <div className="w-[300px] shadow-lg">
      <div class="h-[200px] rounded-t-lg overflow-hidden">
          <img class="w-full h-full object-cover" src={props.thumbnail} alt=""/>
      </div>
      <div className="pt-[10px] px-[15px] pb-[20px] rounded-b-lg">
        <div className="pb-[10px]">
          <div className="w-[100%]">
            <p className="text-[14px] font-[300]">{props.category}</p>
          </div>
          <div className="pt-[10px]">
            <h2 className="text-[20px] font-[700]">{props.title}</h2>
            <p className="text-[16px]">{props.description}</p>
          </div>
        </div>
        {/* progrss bar */}
        {
          props.progress && props.progress !== 0 ?
          <div>
            <p  className="text-[12px] font-[300]">{`${props.progress}%`} Complete</p>
            <div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div className="h-full bg-green-500 transition-all duration-500 ease-in-out" style={{ width: `${props.progress}%` }}/>
              </div>
            </div>
          </div> : <></>
        }
      </div>
    </div>
  )
}

export default CourseCard;