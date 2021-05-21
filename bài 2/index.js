function check() {
    let num = document.getElementById("num").value;
    if (num > 10) {
        alert("Nhập lại");
    }
}

function getVal() {
    let num = document.getElementById("num").value;
    num = Number(num);
    // let trueNum = [3, 6, 8];
    // for(let i=0; i<trueNum.length; i++){
    //     if(num == trueNum[i]){
    //         console.log("Yes");
    //     }
    // }
    check();
    let  x  = document.getElementById("congrast");
    if (num === 3 || num === 6 || num === 8 ) {
        alert("Congrats, this is a lucky number");
    } else {
        alert("opps!");
    }
}