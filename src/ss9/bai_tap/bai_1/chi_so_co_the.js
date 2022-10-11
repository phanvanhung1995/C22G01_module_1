let canNang = prompt('nhập cân nặng', '');
let chieuCao = prompt('nhập chiều cao', '');
let bmi = canNang / (chieuCao * chieuCao);

if (bmi < 18.5) {
    document.write('undeweight');
} else if (bmi >= 18.5 && bmi < 25) {
    document.write('normal');
} else if (bmi >= 25 && bmi < 30) {
    document.write('overweight');
} else {
    document.write('obese');
}
