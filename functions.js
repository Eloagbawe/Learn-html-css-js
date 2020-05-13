function divider(factor){
    return number => number / factor;
}
var thrice = divider(3);
console.log(thrice(15));

function minimum(a,b){
    if (a < b){
        return a;
    }
    else{
        return b;
    }
}
console.log(minimum(0,-10));

// function isEven(c){
//     if ((c % 2 === 0) && (c > 1)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(-2));

//recursive function
function isEven(c){
         if ((c % 2 === 0) && (c > 1)){
             return true;
         } else if ((c % 2 === 1)&& (c > 1)){
             return false;
         } else {
             return isEven(c-2);
     }
}
console.log(isEven(2));


function countChar(name, letter){
    let counter = 0;
    for (var i = 0; i < name.length; i++){
        if (name[i] === letter){
            counter ++;
        }else{
            counter = counter;
        }
    }
    console.log(counter);
}
countChar("Middleton", "d");
