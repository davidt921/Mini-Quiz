import React, { useState } from 'react';
import './App.css';


let answerUser = []

const questions = [
	{
		questionText: 'I value',
		answerOptions: ['Justice','Mercy'],
		
	},
	{
		questionText: 'I appreciate a wide variety of music.',
		answerOptions: ['Rarely','Occasionally','Sometimes','Usually','Almost Always'],
	},
	{
		questionText: 'A quiet weekend at home is',
		answerOptions: ['Boring','Rejuvenating'],
	},
	{
		questionText: 'I prefer speakers that communicate',
		answerOptions: ['Literally ','Figuratively'],
	},
	{
		questionText: 'With people, I am more often',
		answerOptions: ['Brief and to the point ','Friendly and warm'],
	},
	
	
];


export default function App() {
	const [curQuestion, setCurrentQuestion] = useState(0);

	// const [showScore, setShowScore] = useState(false);

	const [showAnswer, setShowAnswer] = useState(false);

	// const [answer, setAnswer]=useState(0);
	
	// const score = answerUser.map((x) => questions.answerOptions);


	const handleAnswerButtonClick= (answerOptions) => {

		//jawabananya
		answerUser.push(answerOptions);

		// if(isCorrect === true) {
		// 	setScore( score + 1 );			


		// }

		const nextQuestion = curQuestion + 1;
		if(nextQuestion < questions.length){
			setCurrentQuestion(nextQuestion);
		}else{
			setShowAnswer(true);
		
		}
		
	}

	const answer = answerUser.map((item, index) =>  
									<div key={index}>- {item}</div> );


	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showAnswer ? (
				<div className='score-section'>The User Answers : {answer}</div>
			) : (
				<>
					<div className='question-section'>
				
						<div className='question-text'>{questions[curQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[curQuestion].answerOptions.map((answerOptions) => 
							<button className='buttonOption' onClick={()=>handleAnswerButtonClick(answerOptions)}>{answerOptions}</button>)
						}
					</div>
				</>
			)}
		</div>
	);
}
