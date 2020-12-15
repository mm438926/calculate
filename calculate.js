'use strict';

let total = 0;      // 現在の合計値
let input = "";     // 現在入力している値
let calc = "+";     // 合計と入力値の演算
let flag = 1;       // １回前に入力したもの 0:数字 1:演算子

//数字の入力
function clic(data){
  flag = 0;
  input += data;
  document.form.text.value = input;
}

//小数点を１回以上押せない
function period(data){
  if (input.slice(-1) == data) {
    return;
  }  //変数inputの一つ前が'.' slice＝文字列切抜
  input += data;
  document.form.text.value = input;
}

//計算
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

//クリア
function kesu(data){
  if (data == 'AC'){
    total = 0;
    input = "";
    calc = "+"
    document.form.text.value = total;
  } else if (data == 'C') {
    input = "";
    document.form.text.value = document.form.text.value.slice(0, -1);
  } //１つ前の動作を表示しない？動作自体なかったことにする？
}
