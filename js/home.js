var provider = new firebase.auth.GoogleAuthProvider();
var googleSignInState = false;
var emailAuth;
var email;
var dialog = document.querySelector('dialog');
var database = firebase.database();

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

function sendEmailVerification() {

    firebase.auth().currentUser.sendEmailVerification().then(function() {

        alert('Email Verification Sent!');

    });

}


function googleSignIn() {
    firebase.auth().signInWithPopup(provider).then(function(result) {

        var token = result.credential.accessToken;
        var user = result.user;

    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        
        var credential = error.credential;

    });
 
       


}

     function teacherCheck(){
      
      var teacherBool = false;
     
      var teacherEmail = email

      
      if(teacherEmail.substring(teacherEmail.indexOf('@'),teacherEmail.length)=="@pdsb.net"){
      
      if (teacherEmail.charAt(0)=='p'){
      
      console.log("You are a teacher")
      teacherBool = true;
      window.location = 'teacher-darshboard.html'
      }
      else {
      
      
      alert("You are not a peel teacher! Please enter your studentNumber@pdsb.net email!");
      location.reload();
      
      }
      }
      else {
      
      
      alert("Please enter a @pdsb.net email!");
      location.reload();
      } 
    
        
     }     
     
     function studentCheck(){
     
     var studentBool = false;
         
       var studentEmail = email;
      console.log(email);
      console.log(studentEmail);
     var studentNumber = studentEmail.substring(0, studentEmail.indexOf('@'));
      
      if(studentEmail.substring(studentEmail.indexOf('@'),studentEmail.length)=="@pdsb.net"){
      
      if (!isNaN(studentNumber)) {
      
     window.location = 'dashboard.html'
      studentBool = true;
      }
      else {
      
      alert("You are not a peel student! Please enter your teacherNumber@pdsb.net email!");
     
      }
      }
      else {
      
      
      dialog.showModal();
      userDelete();
      document.getElementById("studentError").innerHTML = "Please enter a @pdsb.net email"
      
       dialog.querySelector('#close').addEventListener('click', function() {
      dialog.close();
    });
      }
    
      }



//
      function userDelete(){

        var user = firebase.auth().currentUser;

user.delete().then(function() {
  console.log("User deleted");
  
}, function(error) {

});
      }


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
            function writeUserData(uid, displayName, email, photoURL) {
  firebase.database().ref('students/' + uid).set({
    username: displayName,
    email: email,
    profile_picture : photoURL
  });
}


function initApp() {
    // auth change listener 

    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {
            // User is signed in.
            var displayName = user.displayName;
             email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var refreshToken = user.refreshToken;
            var providerData = user.providerData;
            
            writeUserData(uid, displayName, email, photoURL);
            

            console.log(email);
            studentCheck();
          

            document.getElementById('quickstart-account-details').textContent = JSON.stringify({
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                photoURL: photoURL,
                isAnonymous: isAnonymous,
                uid: uid,
                refreshToken: refreshToken,
                providerData: providerData,
                googleSignInState: googleSignInState
            }, null, '  ');




        } else {

           

        }
        

    });

    document.getElementById('googleSignIn').addEventListener('click', googleSignIn, false);
    document.getElementById('studentSignUp').addEventListener('click', googleSignIn, false);
        document.getElementById('teacherSignUp').addEventListener('click', teacherSignUp, false);

   // document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
}
window.onload = function() {
    initApp();
};