// src/components/ModuleQuiz.jsx
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle, XCircle, Award, RotateCcw, ArrowRight } from 'lucide-react';

export default function ModuleQuiz({ questions, passingScore = 70, onComplete, onRetry }) {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });

    const percentage = Math.round((correct / questions.length) * 100);
    setScore(percentage);
    setShowResults(true);
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
    if (onRetry) onRetry();
  };

  const handleComplete = () => {
    if (onComplete) onComplete(score);
  };

  const isPassed = score >= passingScore;
  const allAnswered = Object.keys(selectedAnswers).length === questions.length;

  if (showResults) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="text-center">
          {isPassed ? (
            <>
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-green-600" size={48} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {t('quizPassed') || 'Congratulations! 🎉'}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {t('yourScore') || 'Your Score'}: <span className="font-bold text-green-600">{score}%</span>
              </p>
              <p className="text-gray-600 mb-8">
                {t('quizPassedMessage') || 'You have successfully completed this module!'}
              </p>
              <button
                onClick={handleComplete}
                className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium inline-flex items-center gap-2"
              >
                <CheckCircle size={20} />
                {t('completeModule') || 'Complete Module'}
              </button>
            </>
          ) : (
            <>
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <XCircle className="text-red-600" size={48} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {t('quizNotPassed') || 'Almost There!'}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {t('yourScore') || 'Your Score'}: <span className="font-bold text-red-600">{score}%</span>
              </p>
              <p className="text-gray-600 mb-8">
                {t('quizNotPassedMessage') || `You need ${passingScore}% to pass. Review the content and try again!`}
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleRetry}
                  className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium inline-flex items-center gap-2"
                >
                  <RotateCcw size={20} />
                  {t('retryQuiz') || 'Retry Quiz'}
                </button>
              </div>
            </>
          )}

          {/* Show answers review */}
          <div className="mt-12 text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {t('reviewAnswers') || 'Review Your Answers'}
            </h3>
            <div className="space-y-4">
              {questions.map((q, qIndex) => {
                const userAnswer = selectedAnswers[qIndex];
                const isCorrect = userAnswer === q.correctAnswer;

                return (
                  <div
                    key={qIndex}
                    className={`p-4 rounded-lg border-2 ${
                      isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      ) : (
                        <XCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 mb-2">
                          {qIndex + 1}. {q.question}
                        </p>
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">{t('yourAnswer') || 'Your answer'}:</span>{' '}
                          {q.options[userAnswer]}
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">{t('correctAnswer') || 'Correct answer'}:</span>{' '}
                            {q.options[q.correctAnswer]}
                          </p>
                        )}
                        <p className="text-sm text-gray-700 italic">
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {t('moduleQuiz') || 'Module Quiz'}
          </h2>
          <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {currentQuestion + 1} / {questions.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(currentQuestion, index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                selectedAnswer === index
                  ? 'border-emerald-600 bg-emerald-50'
                  : 'border-gray-200 hover:border-emerald-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selectedAnswer === index
                      ? 'border-emerald-600 bg-emerald-600'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedAnswer === index && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <span className="font-medium text-gray-800">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {t('previous') || 'Previous'}
        </button>

        {currentQuestion < questions.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={selectedAnswer === undefined}
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium inline-flex items-center gap-2"
          >
            {t('next') || 'Next'}
            <ArrowRight size={20} />
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={!allAnswered}
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium inline-flex items-center gap-2"
          >
            {t('submitQuiz') || 'Submit Quiz'}
            <CheckCircle size={20} />
          </button>
        )}
      </div>
    </div>
  );
}