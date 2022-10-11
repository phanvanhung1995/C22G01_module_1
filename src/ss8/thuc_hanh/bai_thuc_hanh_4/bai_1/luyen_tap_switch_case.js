let browser = prompt('enter browser name');

switch (browser) {
    case 'Edge' :
        text = ('You have got the Edge!');
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        text = ('Okay we support these browsers too');
        break;
    default:
        text = 'We hope that this page looks ok!'
}
document.write(text)