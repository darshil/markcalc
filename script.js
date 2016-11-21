  // OLD JS FOR FIREBASE OUTDATED  // 
  // 
  // 
 dialog.showModal();
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


var myUserId = firebase.auth().currentUser.uid;
var userEmail2 = txtEmail.value;
		   firebase.database().ref('users/' + myUserId ).set({

   email: txtEmail.value
  });
		 dialog.showModal();