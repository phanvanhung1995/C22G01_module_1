function clickHer() {
    let bkt1 = parseFloat(document.getElementById('bkt1').value);
    let bkt2 = parseFloat(document.getElementById('bkt2').value);
    let btgk = parseFloat(document.getElementById('btgk').value);
    let btck = parseFloat(document.getElementById('bkck').value);
    let result ;
    result = (bkt1 + bkt2 + btgk * 2 + btck * 4)/8
    console.log(result)
    document.getElementById('result').innerHTML = result
}