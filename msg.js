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
user_name=localStorage.getItem("username");
room_name=localStorage.getItem("room");
function send(){
  msg=document.getElementById("message").value;
  document.getElementById("message").innerHTML="";
  firebaseConfig.database().ref(room_name).push({
    name:user_name,
    message:msg,
    likes:0
  });
}
function logout(){
  window.location="chatapp.html";
}