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
		 
		 
		 /* function toggleSignIn() {
    if (firebase.auth().currentUser) {

        firebase.auth().signOut();

    } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (password.length <= 6) {
            alert('Please enter a password greater than 6 characters');
            return;
        }
        // Sign in with email and pass.
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            //  error handling 
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            document.getElementById('quickstart-sign-in').disabled = false;

        });

    }
    document.getElementById('quickstart-sign-in').disabled = true;
}

function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (password.length < 6) {
        alert('Please enter a password greater than 6 characters');
        return;
    }
    // Sign up

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // error handling 
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);

    });
    sendEmailVerification();

}


*/


     //
/*
function sendPasswordReset() {
    var email = document.getElementById('email').value;

    firebase.auth().sendPasswordResetEmail(email).then(function() {

        alert('Password Reset Email Sent!');

    }).catch(function(error) {
        // error handling
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
        }
        console.log(error);

    });

}
*/