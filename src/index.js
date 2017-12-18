

let button = document.getElementsByClassName('btn btn-primary')
button.addEventListener('click', function(e){
  xhttp.open("GET", "https://randomuser.me/api/", true);
  xhttp.send();

})
