function signup(){
    window.alert("Thanks for Signing In");
}
function light(){
    document.getElementById("navbar").style.backgroundColor = "#d0d0d0";
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("body").style.color = "black";
    document.getElementById("input_mail").style.backgroundColor = "#ebebeb";
    document.getElementById("input_pass").style.backgroundColor = "#ebebeb";
    document.getElementById("input_mail").style.color = "black";
    document.getElementById("input_pass").style.color = "black";
}
function dark(){
    document.getElementById("navbar").style.backgroundColor = "#202020";
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("body").style.color = "white";
    document.getElementById("input_mail").style.backgroundColor = "black";
    document.getElementById("input_pass").style.backgroundColor = "black";
    document.getElementById("input_mail").style.color = "white";
    document.getElementById("input_pass").style.color = "white";
}