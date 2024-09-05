console.log('Quiz game!');

/*-------------- Constants -------------*/

const questionObject = [
    {
        question: "What English Premier League club plays at a stadium known as the Theatre of Dreams?",
        option: ["Brentford fc", "Manchester United", "Manchester City", "Arsenal"],
        answer: "Manchester United"
    },

    {
        question: "What position did NFL great Rob Gronkowski play?",
        option: ["offensive lineman", "running back", "tight end", "linebacker"],
        answer: "tight end"
    },

    {
        question: "How many times have Brazil won the World Cup?",
        option: ["5", "1", "6", "8"],
        answer: "5"
    },

    {
        question: "Which Golfer is credited with inventing the ‘Stinger’ shot?",
        option: ["Scottie Scheffler", "Jake Knapp", "Rory McIlroy", "Tiger Woods"],
        answer: "Tiger Woods"
    },

    {
        question: "Who was formerly known as Cassius Clay?",
        option: ["Muhammad Ali", "Mike Tyson", "Jack Johnson", "Manny Pacquiao"],
        answer: "Muhammad Ali"
    },

    {
        question: "In what year was the first World Cup?",
        option: ["1845", "2010", "1989", "1930"],
        answer: "1930"
    },

    {
        question: "What is Elton John’s real name?",
        option: ["John Cash", "Reginald Kenneth Dwight", "Elvis Presley", "Peter Whight"],
        answer: "Reginald Kenneth Dwight"
    },

    {
        question: "How many teams are there in Formula 1?",
        option: ["30", "40", "10", "20"],
        answer: "10"
    },

    {
        question: "Before becoming famous, where did Harry Styles work?",
        option: ["At a Food Restaurant", "At JP Morgan", "At a Car Factory",  "At a bakery"],
        answer: "At a bakery"
    },

    {
        question: "What rock guitarist played on the Michael Jackson song “Beat It?",
        option: ["Eddie Van Halen", "Brian May", "Jeff Beck", "Jimi Hendrix"],
        answer: "Eddie Van Halenn"
    },

    {
        question: "Angus Young is co-founder and lead guitarist for what Australian band?",
        option: ["Alchetron", "AC/DC", "The Wanted", "Ultimate Boy bands"],
        answer: "AC/DC"
    },

    {
        question: "What is Taylor Swift’s middle name?",
        option: ["Underwood", "Hannah", "Natalie", "Alison"],
        answer: "Alison"
    },

    {
        question: "Eminem stars and performs in what semi-autobiographical movie from 2002?",
        option: ["The Sea Inside", "8 Mile", "Remember The Titans", "The Pianist"],
        answer: "8 Mile"
    },

]
console.log(questionObject);

/*---------- Variables (state) ---------*/
let i = 0;
let score = 0;


/*----- Cached Element References  -----*/
let question = document.getElementById('question');
let quizContainer = document.getElementById('quiz-container');
let scoreCard = document.getElementById('scoreCard');
let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let next = document.querySelector('.next');
let previous = document.querySelector('.previous');
let points = document.getElementById('score');
let span = document.querySelectorAll('span');
let restartButton = document.getElementById('restart');
let result = document.getElementById('result');
/*let resultMessage = document.getElementById('result-message');*/

    
/*-------------- Functions -------------*/
const showQuestion = () => {
    for(let a = 0; a<span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i+1) + '' + questionObject[i].question;
    option0.innerHTML = questionObject[i].option[0];
    option1.innerHTML = questionObject[i].option[1];
    option2.innerHTML = questionObject[i].option[2];
    option3.innerHTML = questionObject[i].option[3];
    begin.innerHTML = "Question" + (i+1)  + 'of' + questionObject.length;
}
console.log(showQuestion);


const determinedScore = (e) => {
    if(e.innerHTML === questionObject[i].answer && score<questionObject.length)
    {
        score = score + 1;
        document.getElementById(e.id).style.background = '#132E35';
    }
    else {
        document.getElementById(e.id).style.background = 'tomato';
    }

setTimeout(nextQuestion, 300);
}
console.log(determinedScore);


const nextQuestion = () => {
    if(i<questionObject.length-1)
{
    i = i + 1;
    showQuestion();
}
else {
    points.innerHTML = score + '/' + questionObject.length;
    quizContainer.style.display = 'block';
    updateResult();
}
}
console.log(nextQuestion);


const previousQuestion = () => {
    if (i > 0) {
        i = i - 1;
        showQuestion();
    }
};
console.log(previousQuestion);


const backToQuiz = () => {
    location.reload();
}

const checkAnswer = () => {
    let answerObject = document.getElementById('answerObject');
    let answers = document.getElementById('answers')
    answerObject.style.show = 'block';
    scoreboard.style.show = 'block';
    for(let a = 0; a<questionObject.length; a++)
    {
        let list = document.createElement('li');
        list.innerHTML = questionObject[a].answer;
        answers.appendChild(list);
    }
}
console.log(checkAnswer);

const updateResult = () => {
    let message = '';
    if (score === questionObject.length) {
        message = 'perfect score! you got all the answers right';
    } else if (score > questionObject.length / 2) {
        message = 'Great job! you scored more than  half.';
    } else {
        message = 'Better luck next time. keep practing!';
    }
    result.innerHTML = message;
    scoreboard.style.display = 'block';
}
console.log(updateResult);

const restart = () => {
    i = 0;
    score = 0;
    showQuestion();
    quizContainer.style.display = 'block';
    points.innerHTML = score + '/' + questionObject.length;
}
console.log(restart);



/*-------------Event Listener-------------*/
next.addEventListener('click',nextQuestion)
previous.addEventListener('click', previousQuestion);
restartButton.addEventListener('click', restart);
/*option0.addEventListener('click', function() { determinedScore(option0) });
option1.addEventListener('click', function() { determinedScore(option1) });
option2.addEventListener('click', function() { determinedScore(option2) });
option3.addEventListener('click', function() { determinedScore(option3) });*/

showQuestion();