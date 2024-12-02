
var i;
let coll = document.getElementsByClassName("collapsible");
let cont = document.getElementById('content');
let flag =document.getElementById('first-flag');
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    console.log(this)
    if(cont.style.display ==='none'){cont.style.display = 'block';this.style.height='fit-content';flag.style.padding='10px'}
    else{cont.style.display ='none';this.style.height='60px';flag.style.padding='0px'
      }
  });
}
function openForm() {
  document.getElementById("search-form").style.zIndex = "200";
  document.getElementById('main').setAttribute('class','stop-scrolling');
}

function closeForm() {
  document.getElementById("search-form").style.zIndex = "-200";
  document.getElementById('main').removeAttribute('class');
}
