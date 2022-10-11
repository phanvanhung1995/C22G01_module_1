let soA = parseInt(prompt('nhập số thứ nhất'));
let soB = parseInt(prompt('nhập số thứ hai'));
let soC = parseInt(prompt('nhập số thứ ba'));


if (soA >= soB) {
    if (soA >= soC) {
        alert('số lớn nhất là : '+soA );
    } else {
        alert('số lớn nhất là : ' +soC);
    }
} else if (soB <= soC) {
    alert('số lớn nhất là : ' +soC);
} else {
    alert('số lớn nhất là số : ' +soB)
}
