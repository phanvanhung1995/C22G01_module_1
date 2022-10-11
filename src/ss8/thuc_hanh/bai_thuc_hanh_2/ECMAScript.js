function kiemTra() {
    let cauTraLoi = document.getElementById("cauTraLoi").value;
    let result ;
    if (cauTraLoi == 'ECMAScript') {
        result = 'right'
    } else {
        result = 'Didn’t know? ECMAScript!'
    }
    document.getElementById('resutl').innerHTML = result
}