
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

function reversingArray(list){
    var newArray = []
    for (var i = list.length - 1; i >= 0; i--){
        newArray.push(list[i]);
    }
    console.log(newArray);
}
reversingArray([6,8,9,18]);

function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--){
      newArray.push(arr[i]);
    }
    return newArray;
  }
  var array1 = ["yes", "no", "maybe", "always", "sometimes", "never", "if"];
 console.log(reverseArray(array1));

 array2=["why","oh","ji","me","hello","danj","fili","kes","makpos"];
 console.log(array2.length);

 function reverseArrayInPlace(arr) {
    for (var i = 0; i <= (Math.floor((arr.length - 1))/2); i++) {
        let el = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = el;
    }
    return arr;
  }
  console.log(reverseArrayInPlace(array2));

  function arrayToList(arr){
      list = {};
      for (var i = arr.length-1; i >= 0; i--){
          if (list.rest !== undefined){
          list = {"value": arr[i], "rest": list};
          }
          else{
              list = {"value": arr[i], "rest": null};
          }
      }
      return list;
  }

  console.log(arrayToList([10,20,30]));

  function listToArray(list){
      array = [];
      for (var node = list; node; node = node.rest){
        if (node.value){
        array.push(node.value);
        }
      }
      return array;
  }
  console.log(listToArray(arrayToList([10, 20, 30])));

  function prepend(element,list){
      newlist = {"value": element, "rest":list};
      return newlist;
  }
console.log((prepend(30,(prepend(10, prepend(20, null))))));
console.log(prepend(20,null));

function nth(list,nth){
    array=[];
    for (var node = list; node; node = node.rest){
        if (node.value){
            array.push(node.value);
        }
        else{
            return undefined;
        }
    }
    return array[nth];
}
console.log(nth(arrayToList([10, 20, 30]), 1+1));

function recursiveNth(list,nth){
    array=[];
    
    for (var node = list; node; node = node.rest){
        array.push(node);
    }
        if (nth === 0){
            return (array[0].value);
        }
        else{
            return (recursiveNth(array[nth - 1].rest, 0));
        }
        
    }
    

console.log(recursiveNth(arrayToList([10, 20, 30, 40]), 3));

function deepEqual(a,b){
    if (a === b){
        return true;
    }
    else if ((typeof a == "object" && a != null) && (typeof b == "object" && b != null)){
        if(Object.keys(a).length != Object.keys(b).length){
            return false;
        }
        for (var prop in a){
            if (!prop in b){
                return false;
            }
            else if ((!prop in a) || (!deepEqual(a[prop],b[prop]))){
                return false;
            }
        }
        return (prop in a) === (prop in b);
    }
}

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
