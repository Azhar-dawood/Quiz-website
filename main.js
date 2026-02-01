const questions = [
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Girrafe",correct:false},
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Australia",correct:true},
            {text:"Africa",correct:false},
            {text:"Asia",correct:false},
            {text:"Europe",correct:false},
        ]
    },
    {
        question:"Which is the largest country in the world?",
        answers:[
            {text:"China",correct:false},
            {text:"USA",correct:false},
            {text:"Spain",correct:false},
            {text:"Russia",correct:true},
        ]
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
            {text:"Vatican city",correct:true},
            {text:"Butan",correct:false},
            {text:"North Macedonia",correct:false},
            {text:"Panema",correct:false},
        ]
    },
    {
        question:"How many colors are there in the rainbow?",
        answers:[
            {text:"five",correct:false},
            {text:"Eight",correct:false},
            {text:"Seven",correct:true},
            {text:"Six",correct:false},
        ]
    },
    {
        question:"In which year did World War II end?",
        answers:[
            {text:"1947",correct:false},
            {text:"1943",correct:false},
            {text:"1945",correct:true},
            {text:"1950",correct:false},
        ]   
    },
    {
        question:"Which planet is known as the Red Planet?",
        answers:[
            {text:"Jupiter",correct:false},
            {text:"Mars",correct:true},
            {text:"Venus",correct:false},
            {text:"Neptune",correct:false},
        ]  
    },
    {
        question:"What is the unit of electrical resistance?",
        answers:[
            {text:"Watt",correct:false},
            {text:"ohm",correct:true},
            {text:"Volt",correct:false},
            {text:"Ampere",correct:false},
        ] 
    },
    {
         question:" What does the acronym GDP stand for??",
        answers:[
            {text:" General Domestic Plan",correct:false},
            {text:" Gross Demand Percentage",correct:false},
            {text:"Gross Domestic Product",correct:true},
            {text:"General Development Profit",correct:false},
        ]
    },
    {
        question:"Who was the first President of the United States?",
        answers:[
            {text:"George Washington",correct:true},
            {text:" John Adams",correct:false},
            {text:"Abraham Lincoln",correct:false},
            {text:"Thomas Jefferson",correct:false},
        ] 
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();


