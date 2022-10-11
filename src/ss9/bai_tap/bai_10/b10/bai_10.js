let soDien = parseInt(prompt('nhập số điện')) ;
let giaDien ;

if (soDien <= 0) {
    alert('nhập sai số điện');
} else if (soDien <= 50) {
    giaDien = soDien * 1678
} else if (soDien <= 100) {
    giaDien = 50 * 1678 + (soDien - 50)* 1734
} else if (soDien <= 200) {
    giaDien = 50 * 1678 + 50*1734 + (soDien - 50)* 2014
} else if (soDien <= 300) {
    giaDien = 50 * 1678 + 50*1734 + 50*2014 + (soDien - 50)* 2536
} else if (soDien <= 400) {
    giaDien = 50 * 1678 + 50*1734 + 50*2014 + 50*2536 + (soDien - 50)* 2834
} else {
    giaDien = 50 * 1678 + 50*1734 + 50*2014 + 50*2536 + 50*2834 + (soDien - 50)* 2927
}
alert(giaDien + 'Đ')