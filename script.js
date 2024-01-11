// for (let i = 1; i <7; i++) { 
//     console.log(i);
// }
// for (let j = 10; j > 0; j--){
//     console.log(j);
// }
// for (let y = 0; y < 16; y = y + 2){
//     console.log(y)
// }
// for (let a = 0; a < 38; a++){
//     if (a == 15) {
//         break
//     }
//     console.log(a);
// }

let a = document.querySelectorAll('.one');
for (i = 0; i < a.length; i++){
  a[i].style.background = "red";
    console.log(i);
    a[i].onclick = two;
}
function two() {
    console.log("Red Bull")
}