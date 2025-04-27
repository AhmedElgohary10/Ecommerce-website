//show username:
document.getElementById("userName").innerText = localStorage.getItem("name");


//logout:
document.getElementById("logOutBtn").onclick = function(){
    // localStorage.getItem("name");
    // localStorage.getItem("password");
    location = ("./index.html");
};
