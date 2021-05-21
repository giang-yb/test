let n = prompt('Nhập n (4 < n < 20)');
let x = prompt('Nhập vào số cần tìm số đối diện')
let sum ;
d = n/2;
function check(){
    if(n % 2 == 0){
        if(n>4 && n<20){
           if(x> (n/2)){
            a =x ;
            b = n/2;
            alert( Number(a - b));
           }
           else if(x <(n/2)){
            let a =+x ;
            let b =+n/2
            alert(a + b);
                
           }
        }
    }
    else{
        alert("Nhập số trong khoảng từ 4 tới 20");
        let n = prompt('Nhập n (4 < n < 20)');
        
    }
}
console.log( check(n));