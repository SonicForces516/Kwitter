const firebaseConfig = {
      apiKey: "AIzaSyCVpXZpxi_Cf5cV4dN9exx2bUKgjRn5vac",
      authDomain: "kwitterapp-f48ff.firebaseapp.com",
      databaseURL: "https://kwitterapp-f48ff-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-f48ff",
      storageBucket: "kwitterapp-f48ff.appspot.com",
      messagingSenderId: "943059391809",
      appId: "1:943059391809:web:d64dfdd04b5f192a8dbdc0"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout()
