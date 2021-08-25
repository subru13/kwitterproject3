
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBF1Yi06TwwQEVB6HvTAp1mjJZHBS4NAVk",
      authDomain: "kwitter-project-c0d7a.firebaseapp.com",
      projectId: "kwitter-project-c0d7a",
      storageBucket: "kwitter-project-c0d7a.appspot.com",
      messagingSenderId: "720640114811",
      appId: "1:720640114811:web:ecaa24e75690440e1a22de",
      measurementId: "G-XF5RVNHH0F"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row="<div class = 'room_name' id = "+ Room_names +" onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}