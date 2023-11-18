document.addEventListener('DOMContentLoaded', function () {

let display=document.getElementById('display');

let buttons=document.querySelectorAll('.cal-btns');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Update the value of the result input with the clicked button's value
      display.value += button.value;
    });
  });
});

function clear1(){
    display.value="";
}

function result(){
  if(display.value==""){
    alert("Please enter the numbers to calculate")
  }
  else{
    display.value=eval(display.value);
  } 
}

