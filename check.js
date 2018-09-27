
var pos = 0, test1, test_status, question, choice, choices, chA, chB, chC, correct = 0, score=0;
var questions = [
	[ "He is rich ........... he is not happy", "and", "but", "though", "B" ],
	[ "He sells oranges ............ mangoes", "as well", "also", "as well as", "C" ],
	[ "I honor him ............. he is an honest man", "though", "so", "because", "C" ],
	[ "We decided to go out ............. it was very late", "although", "however", "even if", "A" ],
	[ "He sat down ............. he was tired", "though", "so", "because", "C" ],
	[ "You must be quiet ............... you must leave the room", "or", "while", "but", "A" ],
	[ "He is neither a knave ............ a fool", "or", "either", "nor", "C" ],
	[ "I will come .............. I have time", "whether", "if", "unless", "B" ],
	[ "I went to the shop ............... bought some pens", "and", "to", "as", "A" ],
	[ "I waited for him .............. he arrived", "until", "without", "if", "A" ],
	[ "He bled so profusely ............. he died", "so", "that", "as", "A" ],
	[ "You will not get the prize ......... you deserve it", "if", "unless", "whether", "B" ]

];

function _(x) {
	return document.getElementById(x);
}
function renderQuestion() {
		test1 = _("test");
	if (pos >= questions.length)
	   { 
		test1.innerHTML="<h2>You got "+correct+ " of "+questions.length+" questions correct </h2><br><h2>Your score is "+score+"</h2>";
		_("test_status").innerHTML = "Test completed";
		pos = 0;
		correct = 0;
		return false;
	   }
	_("test_status").innerHTML = "Question " +(pos+1)+" of " +questions.length;
	question = questions[pos][0];
	chA= questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	
	test1.innerHTML = "<h3>"+question+"</h3>";
	test1.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test1.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test1.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test1.innerHTML += "<button onclick ='checkAnswer()'>Submit Answer</button>";
}

function showquestion(){
    show = _("showquest");
    for(var i = 0; i<questions.length; i++)
        {
        show.innerHTML += "<div class='ques border2p col-xs-3'>Q."+(i+1)+"</div>";
        }
    
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i < choices.length; i++)
	{
		if(choices[i].checked)
		{
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4])
	{
		correct++;
        score +=1;
	}
    else{
        score = score - 0.33;
    }
	pos++;
	renderQuestion();  
}
function nextbut(){
    pos++;
    renderQuestion();
}

function shtime(){
  document.getElementById('timer').innerHTML =
  00 + ":" + 20;
  startTimer();
}

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){alert('timer completed');
         window.open("file:///C:/Users/user/Desktop/onlinetest/index.html")}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}    

window.addEventListener("load", renderQuestion, false);
window.addEventListener("load", showquestion, false);
window.addEventListener("load", shtime, false);

