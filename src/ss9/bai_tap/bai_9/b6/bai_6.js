let doanhSo = parseInt(prompt('nhập doanh số bán hàng'));

if (doanhSo <= 10000000) {
    document.write('tháng này bạn khong có hoa hồng');
} else if (doanhSo <= 20000000) {
    document.write('tháng này hoa hồng của bạn là 3 triệu');
} else if(doanhSo <= 40000000) {
    document.write('tháng này hoa hồng của bạn là 10 triệu');
} else {
    document.write('tháng này hoa hồng của bạn là 15 triệu');
}