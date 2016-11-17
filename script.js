  // Initialize Firebase

var user;
var userEmail;

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');


userEmail = txtEmail.value;


btnLogin.addEventListener('click', e => {
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();


	const promise = auth.signInWithEmailAndPassword(email, pass);

	 $('#userLoader').show();
    $('#btnLogin').hide();
    console.log(txtEmail.value);


	promise.catch(e=> alert(e.message));
});


btnSignUp.addEventListener('click', e => {
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();

	const promise = auth.createUserWithEmailAndPassword(email, pass);
    $('#userLoader').show();
    $('#btnSignUp').hide();
	promise.catch(e=> alert(e.message));

console.log(txtEmail.value);


});


btnSignOut.addEventListener('click', e => {
firebase.auth().signOut();


});


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   $(".login-cover").hide();


       var dialog = document.querySelector('#loginDialog');

          if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
      dialog.close();
	user = firebase.auth().currentUser;

console.log(user);
  } 



  else {

 $(".login-cover").show();
 $('#btnLogin').show();
 $('#btnSignUp').show();
 $('#userLoader').hide;
       var dialog = document.querySelector('#loginDialog');

      if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
      dialog.showModal();
 
  }
});






		var kuMark;
		var thinkingMark;
		var communicationMark;
		var applicationMark;
		var subject;
		
		
		function onClick2(){
			
		subject = document.getElementById("yourNumber").value;
		
		document.getElementById('pass').innerHTML = "What is your \"Knowledge and Understanding\" mark (e.g.\"3/4\")?";
		
		document.getElementById('yourNumber').value = "";
		document.getElementById("onClick2").style.visibility = 'hidden';
		
		document.getElementById("onClick3").style.visibility = 'visible';
		
		}
		
		
		function onClick3() {
		
		kuMark = document.getElementById("yourNumber").value;
		
		document.getElementById('pass').innerHTML = "What is your \"Thinking\" mark?";
		
		document.getElementById('yourNumber').value = "";
		document.getElementById("onClick3").style.visibility = 'hidden';
		
		document.getElementById("onClick4").style.visibility = 'visible';
			}
			
			
			
		function onClick4() {
		
		thinkingMark = document.getElementById("yourNumber").value;
		
		document.getElementById('pass').innerHTML = "What is your \"Communication\" mark?";
		
		document.getElementById('yourNumber').value = "";
		document.getElementById("onClick4").style.visibility = 'hidden';
		
		document.getElementById("onClick5").style.visibility = 'visible';
			}
			
			
		function onClick5() {
		
		communicationMark = document.getElementById("yourNumber").value;
		
		document.getElementById('pass').innerHTML = "What is your \"Application\" mark?";
		
		document.getElementById('yourNumber').value = "";
		document.getElementById("onClick5").style.visibility = 'hidden';
		
		document.getElementById("onClick6").style.visibility = 'visible';
			}
			
		function onClick6() {
		
		applicationMark = document.getElementById("yourNumber").value;
		
		document.getElementById("onClick6").style.visibility = 'hidden';
		
		document.getElementById("onClick7").style.visibility = 'visible';
		
		document.getElementById("yourNumber").style.visibility = 'hidden';
		
		document.getElementById('pass').innerHTML = "";
			}
			
		
		function onClick7() {
		  var dashLength;
		  var mark1;
		  var mark1_1;
		  var mark1_2;
		  var Mark1;
		  
		  
		  var mark2;
		  var mark2_1;
		  var mark2_2;
		  var Mark2;
		  
		  var mark3;
		  var mark3_1;
		  var mark3_2;
		  var Mark3;
		  
		  var mark4;
		  var mark4_1;
		  var mark4_2;
		  var Mark4;
		  
		  var aWeight;
		  var kWeight;
		  var tWeight;
		  var cWeight;
		  subject = subject.toLowerCase();
		  subject = subject.trim();
		  	aWeight = 0.25;
			kWeight = 0.25;
			tWeight = 0.25;
			cWeight = 0.25;
		  if (subject=="chem" || subject=="chemistry" || subject=="bio" || subject == "biology"){
			aWeight = 0.25;
			kWeight = 0.25;
			tWeight = 0.25;
			cWeight = 0.25;
		  }
		  else if (subject=="accounting" || subject=="business" || subject=="functions" || subject == "math" || subject == "calc" || subject == "adv functions" || subject == "advanced functions" || 
		  subject == "calculus" || subject == "calculus and vectors"){
			aWeight = 0.30;
			kWeight = 0.30;
			tWeight = 0.20;
			cWeight = 0.20;
		  }
		  else if (subject=="art" || subject=="arts" || subject=="visual arts" || subject == "music" || subject == "drama" || subject == "media arts"){
			aWeight = 0.2;
			kWeight = 0.3;
			tWeight = 0.3;
			cWeight = 0.2;
		  }
		  else if (subject=="physics"){
			aWeight = 0.3;
			kWeight = 0.2;
			tWeight = 0.3;
			cWeight = 0.2;
		  }
		  else if (subject=="english" || subject=="language" || subject=="eng"){
			aWeight = 0.1;
			kWeight = 0.3;
			tWeight = 0.3;
			cWeight = 0.3;
		  }
		  else if (subject=="tech" || subject=="tech design" || subject=="comp sci" || subject=="computer science" || subject=="technological design" || subject=="photography" || 
		  subject=="photography and digital imaging" || subject=="comm tech" || subject=="communication technology"){
			aWeight = 0.3;
			kWeight = 0.2;
			tWeight = 0.3;
			cWeight = 0.2;
		  }
		  mark1 = kuMark;
		  dashLength = mark1.indexOf('/');
		  mark1_1 = parseFloat(mark1.substring(0, dashLength));
		  mark1_2 = parseFloat(mark1.substring(dashLength + 1 , mark1.length));
		  Mark1 = (mark1_1 / mark1_2)*100;
		  Mark1 *= kWeight;
		  
		  mark2 = applicationMark;
		  dashLength = mark2.indexOf('/');
		  mark2_1 = parseFloat(mark2.substring(0, dashLength));
		  mark2_2 = parseFloat(mark2.substring(dashLength + 1 , mark2.length));
		  Mark2 = (mark2_1 / mark2_2)*100;
		  Mark2 *= aWeight;
		  mark3 = thinkingMark;
		  dashLength = mark3.indexOf('/');
		  mark3_1 = parseFloat(mark3.substring(0, dashLength));
		  mark3_2 = parseFloat(mark3.substring(dashLength + 1 , mark3.length));
		  Mark3 = (mark3_1 / mark3_2)*100;
		  Mark3 *= tWeight;
		  
		  mark4 = communicationMark;
		  dashLength = mark4.indexOf('/');
		  mark4_1 = parseFloat(mark4.substring(0, dashLength));
		  mark4_2 = parseFloat(mark4.substring(dashLength + 1 , mark4.length));
		  Mark4 = (mark4_1 / mark4_2)*100;
		  Mark4 *= cWeight;
		  
		  var overallMarkFinal;
		  var overallMark;
		  overallMark = Mark1 + Mark2 + Mark3 + Mark4;
		  overallMark = Math.round(overallMark * 10.0) / 10.0;
		  firebaseMark = overallMark
		  if(isNaN(overallMark)){
		  alert("Please enter valid mark values");
		  location.reload();
		  }
		  else{ 
		  overallMarkFinal = overallMark.toString() + '%';
		  overallMarkFinal = overallMarkFinal.fontcolor("#16A085");
		  document.write("<br>");
		  document.write("<br>");
		  document.write("<br>");
		  document.write("<br>");
		  document.write("<br>");
		  document.write("<br>");
		  document.write("<br>");
		  document.write("<br>");
		  document.write("<br>");
		  document.write("<br>");
		  document.write("<br>");
		  document.write("<center><span style=\"font-size: 200; text-align:center;\">" + overallMarkFinal + "<\/span></center>");

var myUserId = firebase.auth().currentUser.uid;
var userEmail2 = txtEmail.value;
		   firebase.database().ref('users/' + myUserId ).set({
   mark: firebaseMark,
   subject : subject,
   email: txtEmail.value
  });
		  }
			}
			