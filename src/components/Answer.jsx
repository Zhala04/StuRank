import { dino } from "./Matematik";

const Answer = ({
    answerText,
    index,
    onSelectAnswer,
    currentAnswer,
    correctAnswer,
  }) => {
    const letterMapping = ["A", "B", "C", "D"];
   const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer =
      currentAnswer === answerText && currentAnswer !== correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
    const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
    const disabledClass = currentAnswer ? "disabled-answer" : "";
    // if(isCorrectAnswer) {dino.style.height='50px'}
 
    return (
      <>
      <div   
        className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
        onClick={() => onSelectAnswer(answerText)}
      >
        <div className="answer-letter">{letterMapping[index]}</div>
        <div className="answer-text">{answerText}</div>
      </div></>
    );
  };
  
  // export {isCorrectAnswer};

  export default Answer;