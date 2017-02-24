  var nav = document.getElementsByClassName('nav');




window.addEventListener("scroll", change)
function change(){
  var nav = document.getElementsByClassName('nav');
  var offset = window.scrollY;
  var actual = 180;
if(offset > 500){
nav[0].style.height="auto";


return;
}








var width =  actual - offset * 0.2;
var nav = document.getElementsByClassName('nav');
nav[0].style.height=width + "px";


}

function clicke(){
var z = document.getElementsByClassName('mobile-menu');

z[0].classList.toggle("mobile-menu--active");
nav[0].classList.toggle("nav--disabled");
}

function hoveri(){
var value = this.options[this.selectedIndex].value;
var o = document.getElementsByClassName('portfolio__item-inside');
o[value].classList.toggle("portfolio__item-inside--active");

}


var y = document.getElementsByClassName('portfolio--size');
for (let i = 0; i < 5; i++) {
  y[i].addEventListener('mouseover',function(){

    var o = document.getElementsByClassName('portfolio__item-inside');
    o[i].classList.toggle("portfolio__item-inside--active");
  });
  y[i].addEventListener('mouseout',function(){

    var o = document.getElementsByClassName('portfolio__item-inside');
    o[i].classList.toggle("portfolio__item-inside--active");
  });

}
