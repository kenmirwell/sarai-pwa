import { useEffect, useState } from "react"
import { createPreAssessmentAns, getUserIfNoAssessment, getPreAssessment, getPreAssessmentResult } from "../supabaseService"
import InitialAssessmentData from "../Config/InitialAssesmentData"
import { useNavigate } from "react-router-dom"

const InitialAssessment = ({}) => {
  const navigate = useNavigate()
  const [loggedUser, setLoggeduser] = useState(null)
  const [assessment, setAssessment] = useState([])
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const username = localStorage.getItem('loggedEmail');
      const password = localStorage.getItem('loggedPassword');

      //see if a user is logged in
      if (!username || !password) {
        navigate('/404');

        console.log("404-1")
        return;
      }

      try {
        //see if the logged user already has assessment
        const userResult = await getUserIfNoAssessment(username, password);

        if (!userResult || userResult.length === 0) {
          navigate('/404');
          console.log("404-2")
          return;
        } else {
          const assessmentData = await getPreAssessment();
          assessmentData.map(i => {
            i.choices.map(j => {
              console.log("j", j.choice)
            })
          })
          setAssessment(assessmentData);
        }

        // const user = userResult[0];

        // setLoggeduser(user);

        // const existingResult = await getPreAssessmentResult(user);

        // if (existingResult) {
        //   navigate('/404'); // 🔁 Replace this with your actual destination
        //   console.log("404-3")
        // } else {
        //   const assessmentData = await getPreAssessment();
        //   setAssessment(assessmentData);
        // }
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/404');
        console.log("404-4")
      }
    };

    fetchData();
  }, []);


  console.log("loggedUser", loggedUser)

 const handleChange = (e, question_id, choiceIndex) => {
    setAnswers(prevAnswers => {
      const existingIndex = prevAnswers.findIndex(a => a.question_id === question_id);
      if (existingIndex !== -1) {
        const updated = [...prevAnswers];
        updated[existingIndex].answer = choiceIndex;
        return updated;
      } else {
        return [...prevAnswers, { question_id, answer: choiceIndex }];
      }
    });
  };


  const handleSubmit = async (e) => {
     e.preventDefault();

    const validateAnswers = () => {
      return assessment.every(q => 
        answers.find(a => a.question_id === q.id && a.answer !== "")
      );
    };

    if (!validateAnswers()) {
      alert("Please answer all the questions.");
      return;
    }

    const submission = {
      user_id: loggedUser.id,
      question_and_answer: answers
    };

    try {
      await createPreAssessmentAns(submission);
      alert("Assessment submitted!");
      // navigate("/my-learning")

    } catch (err) {
      console.error("Submission failed:", err.message);
    }

  }

  console.log('answer', answers)

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
            assessment.length > 0 && assessment.map((i, index) => (
              <div className="pb-[30px]">
                <h6 className="text-[18px]">{index + 1}. {i.question}</h6>
                <div className="pt-[10px] pl-[20px] flex flex-col gap-[10px]">
                  {
                    i.choices.map((item, index) => (
                      <div className="flex gap-[10px] items-center">
                        <input onChange={e => handleChange(e, i.id, index)} name={i.id} className="w-[20px] h-[20px]" type="radio" required/>
                        <p className="text-[14px]">{item.choice}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
          <button onClick={handleSubmit} className="px-[50px] py-[10px] border-[1px] bg-[#191919] text-[#ffffff] rounded-[5px] mt-[10px]" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default InitialAssessment