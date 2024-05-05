type Props = {
  question: string;
  asnwer: string[];
  callback: any;
  userAnswer: string;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = () => {
  return (
    <div>QuestionCard</div>
  )
}

export default QuestionCard