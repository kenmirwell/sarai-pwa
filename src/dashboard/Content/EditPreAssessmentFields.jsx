import React, {useState, useEffect, useRef} from "react"

const EditPreAssessmentFields = ({data, onChangeChoices, onChangeQuestion}) => {
  const fileInputRef = useRef(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [question, setQuestion] = useState({})

  // When your data loads (e.g., inside useEffect), initialize it:
  useEffect(() => {
      setSelectedAnswer(Number(data.choices.answer));
      setQuestion({"question": data.question})
  }, []);

  const handleChange = (e, id, index) => {
    if(e.target.name === "choice_"+id) {
      setSelectedAnswer(index)
      onChangeChoices({id: id, ans: index})

    } else if(e.target.name === "question") {
      setQuestion(prev => (
        {
          [e.target.name]: e.target.value
        }
      ))
      onChangeQuestion({
        id: data.id,
        [e.target.name]: e.target.value
      })
    }
  }
  
  return (
    <div className={`p-[20px] ${/*${data ? "bg-red-100" : "bg-[#f1f1f1]"}*/""} hover:bg-[#d8fbe3]`}>
      <div className="flex gap-[20px]">
        <div className="flex flex-col gap-[10px] w-[100%]">
          <div className="flex flex-col w-[100%]">
            <p className="text-[12px] text-[#696969]">Question</p>
            <input  
              onChange={e => handleChange(e)} 
              name="question" 
              className={`${data ? "placeholder-red-400" : "placeholder-green-600"} text-[16px] bg-[#e2e2e2] text-[#6a6a6a] rounded-md w-[100%] p-[10px]`}
              placeholder="Enter title here"
              type="text" value={question.question}
            />
          </div>
          <div className="flex gap-[50px]">
            {
              data && data.choices.choices.map((item, index) => (
                <div key={index} className="flex w-[100%] items-center gap-[10px]">
                  <input
                    onChange={(e) => handleChange(e, data.id, index)}
                    name={"choice_"+data.id}
                    type="radio"
                    value={index}
                    checked={selectedAnswer === index} // ✅ This is the correct way
                  />
                  <p className="text-[12px] text-[#696969] text-[18px]">
                    {["A", "B", "C", "D"][index]}
                  </p>
                  <input  
                    name="choice_text" 
                    className={`${item ? "placeholder-red-400" : "placeholder-green-600"} text-[16px] bg-[#e2e2e2] text-[#6a6a6a] rounded-md w-[100%] p-[10px]`}
                    placeholder="Enter title here"
                    type="text" 
                    value={item}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditPreAssessmentFields;