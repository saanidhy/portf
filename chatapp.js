function enter(){
    username=document.getElementById("username").value
    window.location="room.html";
    localStorage.setItem("username", username);
    document.getElementById("username").innerHTML="";
}