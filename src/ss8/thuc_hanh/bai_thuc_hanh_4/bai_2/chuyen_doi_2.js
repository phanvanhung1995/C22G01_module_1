let a = +prompt('a?' ,'');

switch (a) {
    case 0:
        text ='0';
        break;
    case 1:
        text ='1' ;
        break;
    case 2:
    case 3:
        text = '2,3';
        break
}
document.write(text)