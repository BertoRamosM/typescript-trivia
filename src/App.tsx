import QuestionCard from "./components/QuestionCard"

function App() {

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

      <QuestionCard />
      <button className="next" onClick={NextQuestion}>Next Question</button>
    </div>
  )
}

export default App
