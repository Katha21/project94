var firebaseConfig = {
    apiKey: "AIzaSyDgt-hqLtUlVADN2Y-6y46mtMB7StGJ5XI",
    authDomain: "kwitter-project-88b09.firebaseapp.com",
    projectId: "kwitter-project-88b09",
    storageBucket: "kwitter-project-88b09.appspot.com",
  messagingSenderId: "651883292322",
  appId: "1:651883292322:web:cba4ddf3726aac77e799fb"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome" +user_name+ "!";

function add_room(){
    room_name = document.getElementById("room-name").value;

    localStorage.setItem("roomname",room_name);

    window.location="kwitter_page.html";

    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
    });
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach})}