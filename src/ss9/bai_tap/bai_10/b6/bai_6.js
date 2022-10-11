function clickday() {
    let a = parseFloat(document.getElementById('nhapA').value );
    let b = parseFloat(document.getElementById('nhapB').value );
    let result ;
    result = (0 - b)/a
  
    document.getElementById('result').innerHTML = result ;
}
