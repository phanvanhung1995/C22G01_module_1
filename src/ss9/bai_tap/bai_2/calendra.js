function check() {
    let soThang = parseInt(document.getElementById('nhapsothang').value) ;
    let result ;

    switch (soThang) {
        case 1 :
        case 3:
        case 5 :
        case 7:
        case 9:
        case 11:
            result = ('Tháng này có 31 ngày') ;
            break;
        case 2:
            result = ('tháng này có 28 hoăc 29 ngày') ;
            break ;
        case 4 :
        case 6 :
        case 8 :
        case 10 :
        case 12 :
            result = ('tháng này có 30 ngày') ;
            break
        default :
            result = 'nhập sai tháng, xin mời nhập lại'
    }
    document.getElementById('ketqua').innerHTML = result
}
