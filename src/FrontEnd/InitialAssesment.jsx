import InitialAssessmentData from "../Config/InitialAssesmentData"

const InitialAssessment = () => {
  return (
    <div>
      <div className="w-[100%] bg-[#606060]">
        <div className="max-w-[1200px] px-[50px] mx-auto py-[20px]">
            <h1 className="text-[32px] text-[#ffffff]">Training Needs Assessment (TNA) for SARAI Farmers</h1>
            <p className="text-[#ffffff]">Knowledge Gap Assessment and Learning Recommendations</p>
        </div>
      </div>
      <div className="w-[100%] py-[50px]">
        <form type="submit" className="max-w-[1200px] px-[50px] mx-auto">
          {
            InitialAssessmentData.map((i, index) => (
              <div className="pb-[30px]">
                <h6 className="text-[24px]">{index + 1}. {i.question}</h6>
                <div>
                  <div className="flex gap-[10px]">
                    <input type="checkbox" required/>
                    <p className="text-[18px]">{i.choices.a}</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <input type="checkbox" required/>
                    <p className="text-[18px]">{i.choices.b}</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <input type="checkbox" required/>
                    <p className="text-[18px]">{i.choices.c}</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <input type="checkbox" required/>
                    <p className="text-[18px]">{i.choices.d}</p>
                  </div>
                </div>
              </div>
            ))
          }
          <button className="px-[50px] py-[10px] border-[1px] bg-[#191919] text-[#ffffff] rounded-[5px] mt-[10px]" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default InitialAssessment