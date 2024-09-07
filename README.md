
**QUIZ GAME PROJECT**

![some alt text](https://www.pngmart.com/files/19/Vector-Quiz-Transparent-PNG-418x279.png)


**DESCRIPTION**

***GAME NAME:*** QUIZ GAME

The project I chose is a quiz game developed as assignment during the ongoing Bootcamp of for the role as a Software Engineer  with General Assembly. The game has been completed after a series of sessions on learning the concepts of programming which has focused on specific topics in HTML, CSS, AND JAVASCRIPT. The background of the game is in such a way that I as an aspiring Software Engineer I like know more about things especially general knowledge be it any topic am always curious to know about everything to do with knowledge. This is the reason I decided to develop a Quiz game based on general knowlege in the categories of music and sports.

**Deployment Link**

You can access the deployed project here: [https://github.com/Tembwecodes/Quiz-game ]

**TIMEFRAME WORKING ON THE PROJECT**

This project has been completed over a timeframe of one week and has been developed by me as a stundent of the ongoing Bootcamp with General Assembly.

**TECHNOLOGIES USED**

Front End:
*  HTML, 
* CSS, 
* JavaScript

**DEVEOPMENT TOOLS**
* Git, 
* VSCode
* GitHub

**BRIEF**

The brief for this project was to create an interactive quiz game that tests the user’s knowledge on a specific topic based on two categories that were choosen which include music as well as sports. The game has been developed in such way that it includes features such as multiple-choice  to the questions, a scoreboad system, and result message for win or lose depending on the score of the player.

**PLANNING**

IN the initial Setup I I didnt have the design layout like a sketch but only went ahead and Created the basic structure of the project using HTML, CSS, and JavaScript files. to implement and initialise the game I had developed the psuedocode prior to developing the structure in html, even though it was not fully developed i was guided by it on developing function in javascript. As this was an individual task I was mandated to achieve the objectives assigned for the project of the Quiz game.

**PSUEDOCODE**

/*---------------Quiz Game psuedocode---------------*/

/* the game game should be able to initiaise when the show question function is called*/

/* the user should be able to read the questions and answers when start is button is clicked*/

/* struncture the elements using html, css, and javascript*/
/*set up the varibles to be accessed later*/

/*after reading the question the user must be able to select one of the optoins as an answer*/

/*the user if unsure of the answer must be able to return to previous question by clickling the previous button*/

/*the game must be able to check if the answer is correct or wrong and update the score*/

/*the game must be able to move to the next question when current question has been answered by the user*/

/*must be able to display the score and win/lose message at the end of the game when all questions have been answered by the user*/

/*must have the button to start the game again*/

/*must have audio file incoprated and play the adio while the game isbeing played*/



**CHALLENGES**

* committing my progress every interval due to technical challenges but with support i succeded.
* I had challenges with designing the layout to make more organised or well aligned this is because i did not have a sketch drawn in the initial planning og the project.

**SUCCESSES**

* ***game logic:*** Being able to implement the game logic to show result score and being able to display the win and lose message.

```javascript
const determinedScore = (e) => {
    if(e.innerHTML === questionObject[i].answer && score<questionObject.length)
    {
        score = score + 1;
        document.getElementById(e.id).style.background = '#132E35';
    }
    else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    ```
* ***sound:*** Successfully incomprating the audio file to the game.

```html
<audio id="quiz-audio" src="\\wsl.localhost\Ubuntu\home\tembwes\code\ga\projects\Quiz-game\ambient-game-67014.mp3"preload="auto" loop></audio
```

* ***User Interface:*** Styled the game using CSS and flexbox to make it visually appealing.
* ***Testing:*** Conducted thorough testing to ensure the game works as expected.
Code Snippets


**KEYTAKEAWYS**

The key take aways from this project challenging it may have been is:

1.Prioritising tasks, breaking them in small chuncks as a way to solve promblems.

2.To remain patient but focused

**FUTURE IMPROVEMENTS**

* I will have to improve on time management.
 