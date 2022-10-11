let useName = prompt('tên đăng nhập');
if (useName == 'Admin') {

    let passWord = prompt('mật khẩu');
    if (passWord == 'TheMaster ' ) {
        alert('Welcome');
} else if (passWord == 'null') {
    alert('Canceled');
    } else {
        alert('I don’t know you');
    }
} else if (useName == 'null') {
    alert('cenceld');
} else {
    alert('I don’t know you');
}