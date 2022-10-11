
let vatLy =parseInt(prompt('nhập điểm vật lý'));
let hoaHoc= parseInt( prompt('nhập điểm hóa học'));
let sinhHoc= parseInt(prompt('nhập điểm sinh học'));

let diemTrungBinh= (vatLy+hoaHoc+sinhHoc)/3;


document.write('điểm trung bình='+ diemTrungBinh)