function add() {
    let s1 = document.getElementById('s1').value;
    let s2 = document.getElementById('s2').value;
    let result = parseFloat(s1) + parseFloat(s2);
    document.getElementById('result').innerHTML = result
}

    function sub() {
        let s1 = document.getElementById('s1').value;
        let s2 = document.getElementById('s2').value;
        let result = parseFloat(s1) - parseFloat(s2);
        document.getElementById('result').innerHTML = result

    }
