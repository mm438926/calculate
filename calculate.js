'use strict';

let total = 0;
let input = "";
let calc = "+";
let flag = 1;

function clic(data){
  flag = 0;
  input += data;
  document.form.text.value = input;
}

function enzan(data){
  if (flag==0){
    flag = 1;
    let work = total + calc + input;
    total = eval(work);
    input = "";
    document.form.text.value = total;
  }
  if (data=="="){
    total = 0;
    calc = "+";
  } else {
    calc = data;
  }
}

function clear(){
  total = 0;
  input = "";
  calc = "+"
  document.form.text.value = total;
}
