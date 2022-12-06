import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/Context";
import { Link } from "react-router-dom";

const Javascript = () => {
  
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Tebrikler!</div>
          <div className="results-info">
            <div>Quiz'i bitirdiniz.</div>
            <div>
              Skorunuz {quizState.correctAnswersCount} / &nbsp;
              {quizState.questions.length} doğru.
            </div>
          </div>
          <Link to='/'
          
          >
            <button className="btn btn-primary">Ana sayfa</button>
          </Link>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
           Soru {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          {quizState.currentAnswer && (
            <div
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              className="next-button"
            >
              Sonraki soru
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Javascript;