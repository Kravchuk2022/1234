"use strict"
let local = "Зовнішня змінна";
var i = 5;
while (i) {
    i--;
    let local = "внутрішня змінна";
    console.log("всередині циклу local=\"" + local + "\"");
}
console.log("Після закінчення циклу i =" + i);
console.log("А змінна local=\"" + local + "\"");