<template>

  <div class="android-be-together-section mdl-typography--text-center">
                     <div class="logo-font android-slogan">MarkCalc.</div>
                     <div class="logo-font android-sub-slogan">Alpha Build V:0.0.0.36</div>
                     <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" data-toggle="modal" href="javascript:void(0)" onclick="openLoginModal();"  name="signin">Student</button>
                     <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" data-toggle="modal" href="javascript:void(0)" onclick="openRegisterModal();" name="signup">Teachers</button>
 
 
                     <div class="container">
                     <div class="modal fade login" id="loginModal">
                        <div class="modal-dialog login animated">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                 <h4 class="modal-title">Student Portal</h4>
                              </div>
                              <div class="modal-body">
                                 <div class="box">
                                    <div class="content">
                                       <div class="social">
                                          <button class="loginBtn loginBtn--google" id="googleSignIn" name="signup">Sign In </button>
                                       </div>
                                       <div class="division">
                                          <div class="line l"></div>
                                          <span>or</span>
                                          <div class="line r"></div>
                                       </div>
                                       <div class="error"></div>
                                       <div class="form loginBox">
                                          <div class="social">
                                          <button class="loginBtn loginBtn--google" id="studentSignUp" name="signup">Sign Up</button>
                                       </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="box">
                                    <div class="content registerBox" style="display:none;">
                                       
                                                  <div class="social">
                                          <button class="loginBtn loginBtn--google" id="teacherSignUp" name="signup">Sign Up</button>
                                       </div>
                                         
                                       
                                    </div>
                                 </div>
                              </div>
                              <div class="modal-footer">
                                 <div class="forgot login-footer">
                                    <span>Are you 
                                    <a href="javascript: showRegisterForm();">Teacher?</a>
                                    </span>
                                 </div>
                                 <div class="forgot register-footer" style="display:none">
                                    <span>Are you a </span>
                                    <a href="javascript: showLoginForm();">Student?</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  
                  
     <dialog class="mdl-dialog" id="dialog">
    <h4 class="mdl-dialog__title">ERROR</h4>
    <div class="mdl-dialog__content">
      <p id= "studentError">
       
      </p>
    </div>
    <div class="mdl-dialog__actions">
      
      <button type="button" class="mdl-button" id="close">Ok</button>
    </div>
  </dialog>
</template>

<script>

</script>

<style>
body {
  /*  background-image: url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png); */
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   min-height: 100vh;
   font-family: 'Roboto', sans-serif;
}
   #container {
    width: 400px;
    margin: 40px auto 0;
    padding: 50px;
    box-sizing: border-box;
   
   
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    text-align: center;
}

#loginModal{
  padding-top: 100px;
}



/* GOOGLE SIGNIN BUTTONS */


.loginBtn {
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;
}
.loginBtn:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
}
.loginBtn:focus {
  outline: none;
}
.loginBtn:active {
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
}


/* Google */
.loginBtn--google {
  /*font-family: "Roboto", Roboto, arial, sans-serif;*/
  background: #DD4B39;
  margin-right: 15px;
  margin-top: 15px;
}
.loginBtn--google:before {
  border-right: #BB3F30 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
}
.loginBtn--google:hover,
.loginBtn--google:focus {
  background: #E74B37;
}

.mdl-dialog__actions{
  margin-right: 20px;
}

.android-be-together-section {
    position: relative;
    height: 800px;
    width: auto;
    background-color: #ffffff;
    background: url(https://static.pexels.com/photos/210661/pexels-photo-210661.jpeg) center 30% no-repeat;
    background-size: cover;
}

.android-slogan {
    font-size: 60px;
    padding-top: 160px;
}
.logo-font {
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    line-height: 1;
    color: #000000;
    font-weight: 500;
}

.android-sub-slogan {
    font-size: 21px;
    padding-top: 24px;
    margin-bottom: 40px;
}

/* Dashboard */

.demo-card-wide.mdl-card {
  width: 512px;
}
.demo-card-wide > .mdl-card__title {
  color: #fff;
  height: 176px;
  background: url('https://static.pexels.com/photos/214238/pexels-photo-214238.jpeg') center / cover;
}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}

#userName{
  padding-top:15px;
  
}
</style>
