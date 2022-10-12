let a = parseInt(prompt('nhập số vốn gửi')) ;
let b = parseInt(prompt('số tháng cho vay')) ;
let c = parseInt(prompt('lãi suất hàng tháng')) ;
let t ;
t = a*(Math.pow((1+c/100) , b));
alert(t);

