import { useEffect, useState } from "react";
import EditPreAssessmentFields from "./EditPreAssessmentFields";
import { getPreAssessment, updatePreAssessment } from "../../supabaseService";

const PreAssessment = () => {
  const [assessment, setAssessment] = useState([])

  useEffect(() => {
    getPreAssessment().then((res) => setAssessment(res))
    // getPreAssessment().then((res) => {
    //   setAssessment(
    //     res.map(item => ({
    //       id: item.id,
    //       category_id: item.category_id, // ensure this exists in your data
    //       choices: item.choices.choices.map((choiceText, index) => ({
    //         choice: choiceText,
    //         is_correct: item.choices.answer === index
    //       }))
    //     }))
    //   );
    // });
  }, [])

  const handleChoices = (id, ans) => {
    // setAssessment(res)
    setAssessment(
      assessment.map(item => ({
        id: item.id,
        category_id: item.category_id, // ensure this exists in your data
        choices: {
          choices: item.choices.choices.map((choiceText, index) => (choiceText)),
          answer: id === item.id ? ans : item.choices.answer
        }
      }))
    );
  }

  const handleQuestions = (e) => {
    setAssessment(
      assessment.map(item => ({
        id: item.id,
        category_id: item.category_id, // ensure this exists in your data
        question: e.id === item.id ? e.question : item.question,
        choices: item.choices
      }))
    );
  }
  
  const handleSubmit= () => {
    updatePreAssessment(assessment).then(res => console.log("response", res))
  }


  return (
    <div className="py-[40px] px-[50px]">
      <div>
        <div className="flex justify-end w-[100%] pr-[20px]">
          <button onClick={handleSubmit} className="px-[20px] py-[5px] bg-[#f1f1f1] hover:bg-[#d8fbe3] rounded-sm w-max">Save</button>
        </div>
      </div>
      <div className="mb-[20px]">
        {
          assessment.map((data) => (
            <EditPreAssessmentFields
              data={data}
              onChangeChoices={(e) => handleChoices(e.id, e.ans)}
              onChangeQuestion={(e) => handleQuestions(e)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PreAssessment;