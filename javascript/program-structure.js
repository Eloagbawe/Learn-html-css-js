let result = 1;
let counter = 0;

//while loop
while (counter < 10 ){
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

//do while loop
let res = 1;
let count = 0;
do{
    res = res * 2;
    count = count + 1;
} while (count < 10);
console.log(res);

//for loop
let answer = 1;
for (let i = 0; i < 10; i++){
    answer = answer * 2; 
}
console.log(answer);

var x = "";
var y = 0;
while (y < 7){
    x += "#";
    y = y + 1;
    console.log(x);
}

var a = "";
for (let b = 1; b <= 100; b++){
    if ((b % 3 === 0) && (b % 5 === 0)){
        a +="FizzBuzz \n";
    }
    else if ((b % 5)=== 0){
        a +="Buzz \n";
    }
    else if ((b % 3) === 0){
        a +="Fizz \n";
    }
    else{
        a += b + "\n";
    }
}
console.log(a);

var c = " ";


for (var e = 0; e < 8; e++){
    for( var f = 0; f < 8; f++){
       if (((e + f) % 2) !== 0){
            c += "#";
     }
       else{
        c += " ";
    }   
 }   
    c += "\n";
}
console.log(c);