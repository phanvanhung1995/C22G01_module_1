function up() {
    let element = document.getElementById('nobita')
    element.style.top = parseInt(element.style.top) - 5 + 'px' ;

}
function down() {
    let element = document.getElementById('nobita')
    element.style.top = parseInt(element.style.top) + 5 + 'px' ;

}
function left() {
    let element = document.getElementById('nobita')
    element.style.left = parseInt(element.style.left) - 5 + 'px' ;

}
function right() {
    let element = document.getElementById("nobita")
    element.style.left = parseInt(element.style.left) + 5 + 'px' ;
    console.log(element.style.left);
}
function moveSelec(evt) {
    console.log(evt.keyCode)
    switch (evt.keyCode) {
        case 37:
            left();
            break;
        case 38:
            up();
            break;
        case 39:
            right();
            break;
        case 40 :
            down();
            break;
    }

}
function start() {
    window.addEventListener('keydown',moveSelec);
}