import { useState } from "react"
import { fetchQuizQuestions } from "./API";
import QuestionCard from "./components/QuestionCard"
import { Difficulty } from "./API";

const TOTAL_QUESTIONS = 10;

function App() {

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY ))



  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const StartTrivia = async() =>{
    
  }

  const CheckAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }

  const NextQuestion = () => {
    
  }

  return (
    <div className="App">
      <h1>React Trivia</h1>
      <button className="start" onClick={StartTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ... </p>

     {/*  <QuestionCard
        questionNumber={number +1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={CheckAnswer}
      /> */}
      <button className="next" onClick={NextQuestion}>Next Question</button>
    </div>
  )
}

export default App
