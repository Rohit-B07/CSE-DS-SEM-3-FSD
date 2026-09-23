const questions = [
    {
        question: "What is HTML?",
        options: ["Language", "Browser", "Computer", "Game"],
        answer: "Language"
    },
    {
        question: "What is CSS used for?",
        options: ["Styling", "Gaming", "Typing", "Calling"],
        answer: "Styling"
    },
    {
        question: "What is JavaScript?",
        options: ["Language", "Browser", "Website", "Computer"],
        answer: "Language"
    },
    {
        question: "Capital of India?",
        options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
        answer: "Delhi"
    },
    {
        question: "What is 2+2",
        options: ["4", "5", "22", "2"],
        answer: "5"
    },
    {
        question: "From Where did you copy the code ?",
        options: ["Gemini", "Copilot", "Claude", "ChatGPT"],
        answer: "ChatGPT"
    }

];

let questionNo = 0;
let marks = 0;
let selectedOption = -1;
let answered = false;
let timerInterval = null;
let totalSeconds = 3 * 60;
let remainingSeconds = totalSeconds;

function startQuiz(){
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let section = document.getElementById("section").value;
    if(name == "" || roll == "" || section == ""){
        alert("Please Enter Valid Details");
        return;
    }
    document.getElementById("startPage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";
    startTimer();
    showQuestion();
}

function startTimer(){
    remainingSeconds = totalSeconds;
    updateTimerDisplay();
    timerInterval = setInterval(function(){
        remainingSeconds--;
        updateTimerDisplay();
        if(remainingSeconds <= 0){
            stopTimer();
            alert("Time's up!");
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay(){
    let mins = Math.floor(remainingSeconds / 60).toString().padStart(2, '0');
    let secs = (remainingSeconds % 60).toString().padStart(2, '0');
    document.getElementById("timer").innerText = mins + ":" + secs;
    if(remainingSeconds <= 30){
        document.getElementById("timer").style.color = "rgb(255, 100, 100)";
    }else{
        document.getElementById("timer").style.color = "white";
    }
}

function stopTimer(){
    if(timerInterval !== null){
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function showQuestion(){
    let q = questions[questionNo];
    selectedOption = -1;
    answered = false;
    document.getElementById("questionNumber").innerText = "Question " + (questionNo + 1) + " of " + questions.length;
    document.getElementById("question").innerText = q.question;
    document.getElementById("answerResult").innerText = "";
    let options = "";
    q.options.forEach(function(option, index){
        options += "<button class=\"option-btn\" data-index=\"" + index + "\" onclick=\"checkAnswer('" + option + "', " + index + ")\">" + option + "</button><br>";
    });
    document.getElementById("options").innerHTML = options;

    let nextBtn = document.getElementById("nextBtn");
    if(questionNo === questions.length - 1){
        nextBtn.style.display = "none";
    }else{
        nextBtn.style.display = "inline-block";
    }
}

function highlightOption(index){
    let buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(function(btn, i){
        btn.classList.remove("highlighted");
        if(i === index){
            btn.classList.add("highlighted");
        }
    });
}

function checkAnswer(answer, index){
    if(answered){
        return;
    }
    answered = true;
    selectedOption = index;

    let result = document.getElementById("answerResult");
    let buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(function(btn){
        btn.disabled = true;
        btn.style.cursor = "not-allowed";
    });

    highlightOption(index);

    if(answer == questions[questionNo].answer){
        marks++;
        result.innerText = "Correct!";
        result.style.color = "green";
        buttons[index].classList.add("correct");
    }else{
        result.innerText = "Wrong!";
        result.style.color = "red";
        buttons[index].classList.add("wrong");
        questions[questionNo].options.forEach(function(opt, i){
            if(opt == questions[questionNo].answer){
                buttons[i].classList.add("correct");
            }
        });
    }
}

function nextQuestion(){
    questionNo++;
    if(questionNo < questions.length){
        showQuestion();
    }else{
        submitQuiz();
    }
}

function submitQuiz(){
    stopTimer();
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let section = document.getElementById("section").value;
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
    document.getElementById("studentInfo").innerText =
        "Name: " + name + " | Roll No: " + roll + " | Section: " + section;
    document.getElementById("score").innerText =
        "Your Marks: " + marks + " / " + questions.length;
}

document.addEventListener("keydown", function(e){
    if(document.getElementById("quizPage").style.display !== "block"){
        return;
    }

    let totalOptions = questions[questionNo].options.length;
    let buttons = document.querySelectorAll(".option-btn");

    if(e.key === "ArrowUp"){
        e.preventDefault();
        if(selectedOption <= 0){
            selectedOption = totalOptions - 1;
        }else{
            selectedOption--;
        }
        highlightOption(selectedOption);
    }else if(e.key === "ArrowDown"){
        e.preventDefault();
        if(selectedOption >= totalOptions - 1 || selectedOption === -1){
            selectedOption = 0;
        }else{
            selectedOption++;
        }
        highlightOption(selectedOption);
    }else if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        if(selectedOption !== -1 && !answered){
            checkAnswer(questions[questionNo].options[selectedOption], selectedOption);
        }
    }
});