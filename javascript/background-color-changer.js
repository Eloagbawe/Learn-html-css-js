//let colors = ["red", "blue", "yellow", "pink","green","orange","cyan","purple","grey","teal","brown"];

function change(){
    document.body.style.backgroundColor = colors[Math.round(Math.random() * (colors.length - 1))];
}

let hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];



function changeHex(){
    let hexCode = "#"
    for (let i = 0; i < 6; i++){
        hexCode = hexCode.concat(hex[Math.round(Math.random() * (hex.length - 1))]);
    }
    console.log(hexCode);
    document.body.style.backgroundColor = hexCode;
}