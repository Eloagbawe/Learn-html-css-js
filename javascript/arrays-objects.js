
function range(x, y){
    let myArray = [];
    for (var i=0; i <= y; i++){
        if (x <= y){
        myArray.push(x);
        x += 1;
    }
    else{
        break;
    }
}
    return(myArray);
}
console.log(range(2,5));

function specialRange(x, y, z){
     let numbers =[];
     function countingUp(x, y, z = 1){
        for (var i = 0; i <= y; i++){
        if (x <= y){
             numbers.push(x);
             x += z;
         }
    }
}
     function countingDown(x, y, z = -1){
        for (var i = x; i >= y; i--){
        if (x >= y){
            numbers.push(x);
             x += z;
        }
    }
}
    countingUp(x, y, z) || countingDown(x, y, z);
    return (numbers);
}

console.log(specialRange(20, -10, -2));

function add(array){
    var totalsum = 0;
    for (var i = 0; i < array.length; i++){
        totalsum += array[i];
    }
    return(totalsum);
}
console.log(add(range(5,15)));

