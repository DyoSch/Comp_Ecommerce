function loadHeader() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "assets/components/header.html", true);
  xhr.onreadystatechange = function () {
    document.getElementById("headerContainer").innerHTML = xhr.responseText;
  };
  xhr.send();
}

document.addEventListener("DOMContentLoaded", loadHeader);
