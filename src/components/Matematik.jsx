import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/Context";
import { Link } from "react-router-dom";
import Answer from "./Answer";

const Matematik = () => {

  // var elem = document.getElementById("dino");
  //     var pos = 0;
     
  //     function frame() {
  //         if (pos >= 100) {
  //             pos = -10;
  //         } else {
  //             pos=pos+0.25;
  //             elem.style.left = pos + '%';
  //         }
  //     }
  //     var id = setInterval(frame, 75);
     



// const cactus = document.getElementById("cactus");

// function jump() {
//   if (dino.classList !== "jump") {
//     dino.classList.add("jump");

//     setTimeout(function () {
//       dino.classList.remove("jump");
//     }, 300);
//   }
// }
// let isAlive = setInterval(function () {
//   // get current dino Y position
//   let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

//   // get current cactus X position
//   let cactusLeft = parseInt(
//     window.getComputedStyle(cactus).getPropertyValue("left")
//   );

//   // detect collision
//   if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
//     // collision
//     // alert("Game Over!");
//   }
// }, 10);

// window.addEventListener("keydown", function (event) {
//   jump();
// });

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
          <div className="game">
      <div id="dino" style={{height:'50px'}}></div>
      <div id="cactus"></div>
    </div>
        </div>
      )}
    </div>
  );
};
export const dino = document.querySelector('#dino');
// dino.style.height='20px'

export default Matematik;