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
let question = document.getElementById("question");
let quizContainer = document.getElementById('quiz-container');
let resultMessage = document.getElementById('result-message');
let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let next = document.querySelectorAll('.next');
let points = document.getElementById('score');
let span = document.querySelectorAll('span');

/*-------------- Functions -------------*/
function showQuestion() {
    for(let a = 0;a<span.length;a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' +(i+1) + '' + questionObject[i].question;
    option0.innerHTML = questionObject[i].option[0];
    option1.innerHTML = questionObject[i].option[1];
    option2.innerHTML = questionObject[i].option[2];
    option3.innerHTML = questionObject[i].option[3];
    begin.innerHTML = "Question" + (i+1) + 'of' + questionObject.length;
}

showQuestion();
console.log(showQuestion);