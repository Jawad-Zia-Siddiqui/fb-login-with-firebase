
{/* <script src="https://www.gstatic.com/firebasejs/5.8.1/firebase.js"></script>
<script>
  // Initialize Firebase
      var config = {
    apiKey: "AIzaSyCL8s1NnOD_hBBwwSLbO7TXANpsIEdhrys",
    authDomain: "fb-developer.firebaseapp.com",
    databaseURL: "https://fb-developer.firebaseio.com",
    projectId: "fb-developer",
    storageBucket: "fb-developer.appspot.com",
    messagingSenderId: "1086333931301"
  };
  firebase.initializeApp(config);
</script> */}


function fbLogin(){

    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
      });

      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

