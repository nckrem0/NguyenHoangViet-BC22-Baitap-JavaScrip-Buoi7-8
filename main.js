const numberList = [];
const numberList2 = [];
const plusArray = [];
const minusArray = [];

document.getElementById("btnNhapMang").onclick = function () {
  var number = document.getElementById("txtNumber").value * 1;
  if(number > 0){
      plusArray.push(number);
  }else {
      minusArray.push(number);
  }
  numberList.push(number);
  numberList2.push(number);
};

// 1. Tổng các số dương trong mảng
document.getElementById("btnCheckTongSoDuong").onclick = function (){
    var tongSoDuong = 0;
    for (var i = 0; i < numberList.length; i++) {
        if (numberList[i] > 0) {
          tongSoDuong += numberList[i];
        }  
    }
    document.getElementById("footerCheckNumber").innerHTML = 
        `
        Mảng : ${numberList} <br>
        Tổng các số Dương trong mảng là : ${tongSoDuong}
        `;
};



// 2.Đếm có bao nhiêu số dương trong mảng 
document.getElementById("btnCheckSoDuong").onclick = function(){
    var soDuong = 0;
    for (var i = 0; i < numberList.length; i++) {
        if (numberList[i] > 0) {
        soDuong += 1;
        }
    }
    document.getElementById("footerCheckNumber").innerHTML = 
        `
        Mảng : ${numberList} <br>
        Số Dương trong mảng là : ${soDuong}
        `;
};

// 3. Tìm số nhỏ nhất trong mảng
document.getElementById("btnCheckSoNhoNhat").onclick = function (){
    var min = numberList[0];
    for(var i = 0; i < numberList.length; i++){
        if (min > numberList[i]) {
            min = numberList[i];
        }
    }
    document.getElementById("footerCheckNumber").innerHTML = 
    `
    Mảng : ${numberList} <br>
    Số Nhỏ Nhất trong mảng là : ${min}
    `;
};

//4. Tìm số dương nhỏ nhất trong mảng
document.getElementById("btnCheckSoDuongNhoNhat").onclick = function(){
    var minDuongNhoNhat = plusArray[0];
    for (var i = 0; i < plusArray.length; i++) {
        if(minDuongNhoNhat > plusArray[i]){
            minDuongNhoNhat = plusArray[i];
        }
    }
    document.getElementById("footerCheckNumber").innerHTML = 
    `
    Mảng : ${numberList} <br>
    Số Dương Nhỏ Nhất trong mảng là : ${minDuongNhoNhat}
    `;
};


//5. Tìm số chẵn cuối cùng trong mảng
document.getElementById("btnCheckSoChanCuoiCung").onclick = function(){
    var lastEvenNumber = -1 ;
    for (var i = 0; i < numberList.length; i++){
        if(numberList[i] % 2 === 0 && numberList[i] > 0){
            lastEvenNumber = numberList[i]
        }
    }
    document.getElementById("footerCheckNumber").innerHTML = 
    `
    Mảng : ${numberList} <br>
    Số Chẵn Cuối Cùng trong mảng là : ${lastEvenNumber}
    `;
};

//6. Đổi chỗ 2 giá trị trong mảng
document.getElementById("btnDoiViTri").onclick = function (){
    var num1 = document.getElementById("txtNumber1").value;
    var num2 = document.getElementById("txtNumber2").value;
    var a = numberList2[num1 - 1];
    numberList2[num1 - 1] = numberList2[num2 - 1];
    numberList2[num2 - 1] = a;
    document.getElementById("footerCheckNumber").innerHTML = 
    `
    Mảng Ban Đầu : ${numberList} <br>
    Mảng sau khi đổi vị trí là : ${numberList2} <br>
    `;
};


//7. Sắp xếp mảng theo thứ tự tăng dần.
document.getElementById("btnSort").onclick = function () {
    var temp;
    for (var i = 0; i < numberList.length - 1; i++) {
      for (var j = i + 1; j < numberList.length; j++) {
        if (numberList[i] > numberList[j]) {
          temp = numberList[i];
          numberList[i] = numberList[j];
          numberList[j] = temp;
        }
      }
    }
  
    document.getElementById("footerCheckNumber").innerHTML = `
    Mảng Ban Đầu : ${numberList2} <br>
    Mảng Tăng Dần : ${numberList}
    `;
};


//8. Tìm số nguyên tố đầu tiên trong mảng.
document.getElementById("btnSoNguyenToDauTien").onclick = function () {
    var soNguyenToDauTien = -1;
    for (var i = 0; i < numberList.length; i++) {
        soNguyenToDauTien = kiemtrasonguyento(numberList[i]);
        if (soNguyenToDauTien !== -1) {
        break;
        }
    }
    function kiemtrasonguyento(num) {
        if (num < 2) {
            return -1;
        }
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                return -1;
            }
        }
        return num;
    }
    document.getElementById("footerCheckNumber").innerHTML = 
    `
    Mảng : ${numberList} <br>
    Số Nguyên Tố đầu tiên trong mảng là : ${soNguyenToDauTien}
    `;
};


//9. Tìm xem trong mảng có bao nhiêu số nguyên
document.getElementById("btnCheckSoNguyen").onclick = function () {
    var count = "";
    for (var i = 0; i < numberList.length; i++) {
        if (numberList[i] % 1 === 0) {
        count++;
        }  
    }
    document.getElementById("footerCheckNumber").innerHTML = 
    `
    Mảng : ${numberList} <br>
    Số Nguyên trong mảng là : ${count}
    `;
};


//10. So sánh số âm và số dương trong mảng cái nào nhiều hơn
document.getElementById("btnSoSanhAmDuong").onclick = function () {
    var negativeNumbers = "" ;
    var positiveNumbers= "" ;
    var ketQua ;
    for(var i = 0 ; i < numberList.length; i++){
        if (numberList[i] > 0){
            positiveNumbers += 1;
        }else{
            negativeNumbers += 1;
        }
        if (positiveNumbers > negativeNumbers ) {
            ketQua = "Số dương nhiều hơn"
        }else if (positiveNumbers < negativeNumbers){
            ketQua = "Số âm nhiều hơn"
        }else{
            ketQua = "Số âm và dương trong mảng có số lượng bằng nhau"
        }
    }
    document.getElementById("footerCheckNumber").innerHTML = 
    `
    Mảng : ${numberList} <br>
    So sánh giữa số âm và dương trong mảng là : ${ketQua}
    `;
};