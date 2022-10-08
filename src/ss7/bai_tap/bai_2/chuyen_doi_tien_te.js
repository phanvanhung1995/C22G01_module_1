// function click(){
//
//
//
// let amount = document.getElementById('amount').value;
// let from = document.getElementById('from').valua;
// let to = document.getElementById('to').valua;
// let result;
// if (from == "USD" && to == " VND")
// {
// result = + amount * 23000 ;
// document.write('Result:' + result)
// }
//
// // }
// function click(){
//     let Amount = document.getElementById("Amount").value;
//     let FromC = document.getElementById("From").value;
//     let To = document.getElementById("To").value;
//     let Result;
//
//
//     if (FromC == "USD" && To == "VND") {
//         Result = "Result: " + (Amount * 23000) + " Đ";
//     }
//     else if (FromC == "VND"&& To =="USD"){
//         Result = "Result: "+ (Amount / 23000) + " $";
//     }
//     else if (FromC == "VND") {
//         Result = "Result: " + Amount + " Đ"
//     } else {
//         Result = "Result: " + Amount + " $"
//     }
//
//     document.getElementById("Result").innerHTML = Result;
// }
function clickOne(){
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("from").value;
    let To = document.getElementById("to").value;
    let Result;
    if (FromC == "USD" && To == "VND") {
        Result = "Result: " + (Amount * 23000) + " Đ";
    }
    else if (FromC == "VND"&& To =="USD"){
        Result = "Result: "+ (Amount / 23000) + " $";
    }
    else if (FromC == "VND") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " $"
    }
    document.getElementById("result").innerHTML = Result;
}


