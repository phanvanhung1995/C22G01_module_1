let a = parseInt(prompt('nhập vào số a'));
let b = parseInt(prompt('nhập vào số b'));
let c = parseInt(prompt('nhập vào số c'));

if (a < 0 && b<0 && c<0) {
    alert('nhập sai dữ liệu');
} else if (a + b > c && b + c > a && a + c > b ) {
    alert('đây là 3 cạnh của 1 tam giác')
} else {
    alert('đây không phải 3 cạnh của 1 tam giác')
}
