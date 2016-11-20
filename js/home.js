/*  

    TODO: Skip Email verification for google sign ups


*/
var provider = new firebase.auth.GoogleAuthProvider();
var googleSignInState = false;

function toggleSignIn() {
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
        var email = error.email;
        var credential = error.credential;

    });

    googleSignInState = true;
}

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

function initApp() {
    // auth change listener 

    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var refreshToken = user.refreshToken;
            var providerData = user.providerData;

            window.location = 'dashboard.html';

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
            // User is signed out.


            var dialog = document.querySelector('#loginDialog');

            if (!dialog.showModal) {
                dialogPolyfill.registerDialog(dialog);
            }
            dialog.showModal();

            document.getElementById('quickstart-sign-in').textContent = 'Sign in';


        }

        document.getElementById('quickstart-sign-in').disabled = false;

    });

    document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
    document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
    document.getElementById('googleSignIn').addEventListener('click', googleSignIn, false);

    document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
}
window.onload = function() {
    initApp();
};