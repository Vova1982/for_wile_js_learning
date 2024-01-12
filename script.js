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

// let a = document.querySelectorAll('.one');
// for (i = 0; i < a.length; i++){
//   a[i].style.background = "red";
//     console.log(i);
//     a[i].onclick = two;
// }
// function two() {
//     console.log("Red Bull")
// }
document.querySelector('.btn_22').onclick = () => { 
    let r_1 = document.querySelectorAll('.radio_1');
    // console.log(r_1);
    for (i = 0; i < r_1.length; i++){
        if (r_1[i].checked) {
            console.log(r_1[i].value);  
 }
    }
}
function t_99(){
   let a_99 = document.querySelector('.out_99');
   let b = '_';
    for (let i = 1; i < 15; i++) {
        a_99.innerHTML += [i]+ b;
    }
}
document.querySelector('#btn_99').onclick = t_99;