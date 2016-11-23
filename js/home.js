var provider = new firebase.auth.GoogleAuthProvider();
var googleSignInState = false;
var emailAuth;
var email;
 var displayName;
  var uid 
var photoURL; 
var dialog = document.querySelector('dialog');
var database = firebase.database();
var teacherSignUp = false;
var studentSignUp = false;


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
      writeUserData(uid, displayName, email, photoURL);
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
             displayName = user.displayName;
             email = user.email;
            var emailVerified = user.emailVerified;
            photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
           uid = user.uid;
            var refreshToken = user.refreshToken;
            var providerData = user.providerData;
            
            
            

        if(studentSignUp && !teacherSignUp){
            studentCheck();
            
        }
                if(teacherSignUp && !studentSignUp){
            teacherCheck();
            
        }

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
    document.getElementById('studentSignUp').addEventListener('click', student, false);
        document.getElementById('teacherSignUp').addEventListener('click', teacher, false);

   // document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
}
window.onload = function() {
    initApp();
};

function teacher(){
    teacherSignUp = true;
    googleSignIn();
}


function student(){
    studentSignUp = true;
    googleSignIn();
}

