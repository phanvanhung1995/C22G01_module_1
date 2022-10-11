function clickthis() {
    let a = parseFloat(document.getElementById('nhapA').value);
    let b = parseFloat(document.getElementById('nhapB').value);
    let c = parseFloat(document.getElementById('nhapC').value);
    let result;

    if (a == 0) {
        result = (0 - c) / b

    } else {
        let denta = (b*b-4*a*c)
        if (denta < 0) {
            result = ('phương trình vô nghiệm');
        } else if (denta == 0) {
            let nghiemKep = -(b/(2*a))
            result = ('phương trình có 1 nghiệm kép là :' + nghiemKep) ;
        } else {
            let x1 = (-b + Math.sqrt(denta))/(2*a) ;
            let x2 = (-b - Math.sqrt(denta))/(2*a) ;
            result = ('phương trình có 2 nghiệm là :' +x1 + 'và' +x2)
        }
    }
    document.getElementById('result').innerHTML = result;
}