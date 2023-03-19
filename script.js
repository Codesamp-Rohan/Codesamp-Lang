function langpvisible1(){
    document.getElementById("lang_p1").style.visibility = "visible";
}
function langphidden1(){
    document.getElementById("lang_p1").style.visibility = "hidden";
}
function langpvisible2(){
    document.getElementById("lang_p2").style.visibility = "visible";
}
function langphidden2(){
    document.getElementById("lang_p2").style.visibility = "hidden";
}
function langpvisible3(){
    document.getElementById("lang_p3").style.visibility = "visible";
}
function langphidden3(){
    document.getElementById("lang_p3").style.visibility = "hidden";
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }