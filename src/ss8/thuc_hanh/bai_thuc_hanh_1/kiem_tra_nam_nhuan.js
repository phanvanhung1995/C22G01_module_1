let soNam = prompt('nhập vào number');

if (soNam % 4 == 0 && soNam % 100 != 0) {
    document.write('đây là năm nhuận');
} else if (soNam % 100 == 0 && soNam % 400 != 0) {
    document.write('đây là năm nhuận');
} else if (soNam % 100 == 0 && soNam % 400 == 0) {
    document.write('đây là năm nhuận');
} else {
    document.write('đây không phải năm nhuận');
}