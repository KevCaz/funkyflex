// https://www.w3schools.com/howto/howto_js_dropdown.asp
function dropDown() {
    var x = document.getElementById("dropdown")
    if (x.style.display === "none") {
      x.style.display = "flex";
      x.style.flexFlow = "row wrap";
    } else {
      x.style.display = "none";
    }
  }