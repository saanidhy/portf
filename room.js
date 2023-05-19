n=localStorage.getItem("username");
document.getElementById("name").innerHTML= "Hi! " + n;

const firebaseConfig = {
    apiKey: "AIzaSyDCfvxAhVwfhEZeqzvAS9vNzt87-xfkt4A",
    authDomain: "chat-f12c5.firebaseapp.com",
    databaseURL: "https://chat-f12c5-default-rtdb.firebaseio.com",
    projectId: "chat-f12c5",
    storageBucket: "chat-f12c5.appspot.com",
    messagingSenderId: "353686095923",
    appId: "1:353686095923:web:c00eec8236054242d5fb46"
  };

firebaseConfig.initializeApp(firebaseConfig);



function create(){
  Room_name=document.getElementById("room_name").value;
  localStorage.setItem("room",Room_name);

  firebase.database().ref("/").child(Room_name).update({
    purpose:"adding room name"
  });
  window.location="msg.html";
}

function getData() {
  firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("room name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
  

  });});}
getData();

function logout(){
  window.location="chatapp.html";
}
