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
  display.value=eval(display.value);
}

