let thuNhap = parseInt(prompt('nhập vào lương tháng')) ;
let thue ;

if (thuNhap < 10000000) {
    thue = 'không phải nộp thuế' ;
} else if (thuNhap < 20000000 ) {
    thue = thuNhap * 0.1
} else if ( thuNhap < 40000000) {
    thue = thuNhap * 0.15
} else if (thuNhap < 80000000) {
    thue = thuNhap * 0.2
} else {
    thue = thuNhap * 0.25
}
alert(thue + 'Đ')