// Nhập N
let mangN = [];

function nhapN() {
  //đầu vào
  let soN = +document.getElementById("soN").value;
  mangN.push(soN);
  document.getElementById("xuatN").innerHTML += soN + ",";
}
//Bài 1
function tongDuong() {
  let tongDuong = mangN.reduce((tongDuong, value) => {
    return value > 0 ? tongDuong + value : tongDuong;
  }, 0);
  let xuatTongDuong = "";
  xuatTongDuong = document.getElementById("tongDuong").innerHTML =
    "Tổng số dương: " + tongDuong;
}
//Bài 2
function demDuong() {
  let demDuong = mangN.reduce((demDuong, value) => {
    return value > 0 ? demDuong + 1 : demDuong;
  }, 0);
  let xuatDemDuong = "";
  xuatDemDuong = document.getElementById("demDuong").innerHTML =
    "số dương: " + demDuong;
}
//Bài 3
function min() {
  let min = mangN.reduce((min, value) => {
    return value < min ? value : min;
  });
  let xuatMin = "";
  xuatMin = document.getElementById("min").innerHTML = "Số nhỏ nhất: " + min;
}
//Bài 4
function minDuong() {
  let minDuong = mangN.reduce((min, value) => {
    return value > 0 && value < min ? value : min;
  });
  let xuatMinDuong = "";
  xuatMinDuong = document.getElementById("minDuong").innerHTML =
    "Số dương nhỏ nhất: " + minDuong;
}
//Bài 5
function lastChan() {
  let lastChan = mangN.reduce((lastChan, value) => {
    return value % 2 == 0 && mangN[mangN.length - 1] ? value : lastChan;
  });
  let xuatLastChan = (document.getElementById("lastChan").innerHTML =
    "Số chẳn cuối cùng của mảng: " + lastChan);
}

//Bài 6
function doiCho() {
  let viTri1 = +document.getElementById("viTri1").value;
  let viTri2 = +document.getElementById("viTri2").value;
  let temp = 0;
  let ketQua = "";
  for (let i = 0; i < mangN.length; i++) {
    if (viTri1 === i) {
      temp = mangN[viTri1];
    }
    if (viTri2 === i) {
      mangN[viTri1] = mangN[viTri2];
      mangN[viTri2] = temp;
    }
  }
  ketQua = document.getElementById("doiCho").innerHTML =
    "Mảng sau khi đổi" + mangN;
}
// Bài 7
function sapXep() {
  mangN.sort(function (a, b) {
    return a - b;
  });
  let sapXep = "";
  sapXep = document.getElementById("sapXep").innerHTML =
    "Mảng sau khi sắp xếp" + mangN;
}
// Bài 8
function NTDauTien() {
  let result = "";
  for (let i = 0; i < mangN.length; i++) {
    let isSoNT = true;
    if (mangN[i] < 2) {
      isSoNT = false;
    }
    for (let j = 2; j <= mangN[i] / 2; j++) {
      if (Math.sqrt(mangN[i]) % j === 0) {
        isSoNT = false;
        break;
      }
    }
    if (isSoNT == true) {
      result += mangN[i];
      break;
    }
  }
  document.getElementById("NTDauTien").innerHTML =
    "Số nguyên tố đầu tiên là: " + result;
}
//Bài 9: Đếm số nguyên
function demSoNguyen() {
  let demSoNguyen = mangN.reduce((dem, value) => {
    return Number.isInteger(value) ? (value = dem + 1) : dem;
  }, 0);
  document.getElementById("demSoNguyen").innerHTML =
    "Số Nguyên: " + demSoNguyen;
}
//Bài 10: So Sánh
function soSanh() {
  let demAm = 0;
  let demDuong = 0;
  let result = "";
  for (let i = 0; i < mangN.length; i++) {
    if (mangN[i] < 0) {
      demAm += 1;
    } else {
      demDuong += 1;
    }
  }
  if (demAm < demDuong) {
    result = " Số âm < Số Dương";
  } else if (demAm > demDuong) {
    result = " Số âm > Số Dương";
  } else {
    result = "Số âm = Số dương";
  }
  document.getElementById("soSanh").innerHTML = result;
}
