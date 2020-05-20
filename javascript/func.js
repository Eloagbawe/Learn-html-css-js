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
range(2,5);

function add(array){
    var totalsum = 0;
    for (var i = 0; i < array.length; i++){
        totalsum += array[i];
    }
    return totalsum;
}
console.log(add(range(1,10)));
console.log(add([4,8,9]));