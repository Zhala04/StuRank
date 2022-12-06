import React, { createContext, useReducer } from "react";
// import { useNavigate } from "react-router-dom";
import { dino } from "../components/Matematik";
import questions1 from "../data/Data1";
import questions2 from "../data/Data2";
import questions3 from "../data/Data3";
import questions4 from "../data/Data4";
import questions5 from "../data/Data5";
import { shuffleAnswers } from "../Helpers";
// const dino = document.getElementById("dino");
var initialState={};
const fc=()=>{ switch(window.location.pathname){
  
       case '/quiz': 
       
      return  initialState = {
        
          questions:questions1,
          currentQuestionIndex: 0,
          currentAnswer: "",
          answers: shuffleAnswers(questions1[0]),
          showResults: false,
          correctAnswersCount: 0,
        };
    
        
    
    case '/matematik':  
 
       return initialState = {
          questions:questions2,
          currentQuestionIndex: 0,
          currentAnswer: "",
          answers: shuffleAnswers(questions2[0]),
          showResults: false,
          correctAnswersCount: 0,
        };
      
        case '/turkce':
          return initialState = {
            questions:questions3,
            currentQuestionIndex: 0,
            currentAnswer: "",
            answers: shuffleAnswers(questions3[0]),
            showResults: false,
            correctAnswersCount: 0,
          };
        case '/cpp':
          return initialState = {
            questions:questions4,
            currentQuestionIndex: 0,
            currentAnswer: "",
            answers: shuffleAnswers(questions4[0]),
            showResults: false,
            correctAnswersCount: 0,
          };
        case '/javascript':
          return initialState = {
            questions:questions5,
            currentQuestionIndex: 0,
            currentAnswer: "",
            answers: shuffleAnswers(questions5[0]),
            showResults: false,
            correctAnswersCount: 0,
          };
        default:
            return initialState = {
                questions:questions1,
                currentQuestionIndex: 0,
                currentAnswer: "",
                answers: shuffleAnswers(questions1[0]),
                showResults: false,
                correctAnswersCount: 0,
              };
       
     
        
    }}
 
// fc();

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswersCount =
      action.payload ===
      state.questions[state.currentQuestionIndex].correctAnswer
      ? state.correctAnswersCount + 1 
      : state.correctAnswersCount;

      // state.questions[state.currentQuestionIndex].correctAnswer
      // ? dino.style.height='100px'
      // :dino.style.height='120px'
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentAnswer: "",
        showResults,
        currentQuestionIndex,
        answers,
      };
    }
    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState=fc());

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};