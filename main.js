const numberList = [];
const numberList2 = [];

document.getElementById("btnNhapMang").onclick = function (){
    var number = document.getElementById("txtNumber").value * 1;
    numberList.push(number);
    numberList2.push(number);
    console.log(numberList);
}

document.getElementById("btnCheckNumber").onclick = function () {
    
    // Tổng các số dương trong mảng
    
    
    var soDuong = 0;
    var tongSoDuong = 0;
    var min = numberList[0];
    var minDuongNhoNhat = numberList[0] ;
    var lastEvenNumber = -1 ;
    for (var i = 0; i < numberList.length; i++) {
        if (numberList[i] > 0) {
            // Đếm có bao nhiêu số dương trong mảng
            soDuong += 1;
            // Tổng các số dương trong mảng
            tongSoDuong += numberList[i];
        }
        // Tìm số nhỏ nhất trong mảng
        if (min > numberList[i]) {
            min = numberList[i];  
        }
        // Tìm số dương nhỏ nhất trong mảng
        if(minDuongNhoNhat > numberList[i] && numberList[i] > 0){
            minDuongNhoNhat = numberList[i];
        }
        // Tìm số chẵn cuối cùng trong mảng
        if (numberList[i] % 2 === 0 && numberList[i] > 0 ){
            lastEvenNumber = numberList[i];
        }
        
    }
    //Đổi chỗ 2 giá trị trong mảng 
    var num1 = document.getElementById("txtNumber1").value ;
    var num2 = document.getElementById("txtNumber2").value ;
    var a = numberList2[num1 - 1];
        numberList2[num1 - 1] = numberList2[num2 - 1];
        numberList2[num2 - 1] = a
    console.log("numberList", numberList);
    
    //Tìm số nguyên tố đầu tiên trong mảng.
    var count = 0 ;

    for(var i = 0 ; i < numberList.length ; i++){
        for(var j = 1 ; j <= numberList[i]; j++ ){
            if (numberList[i] < 2){
                break
            }
            if(numberList[i] > 2 && numberList[i] / numberList[j] !== 0){
                console.log("num", numberList[i]);
            }
        }
    }

    // if (numberList < 2){
    //     return 0 ;
    // }
    // for(i =2 ; i < numberList.length; i++){
    //     if (numberList[i] % i == 0){
    //         return 0;
    //     }
    //     return 1;
    // }
    


    document.getElementById("footerCheckNumber").innerHTML =
        
        `
        Mảng Ban Đầu : ${numberList} <br>
        Tổng các số Dương trong mảng là :${tongSoDuong} <br>
        Có bao nhiêu số dương trong mảng :${soDuong} <br>
        Số nhỏ nhất trong mảng là :${min} <br>
        Số Dương nhỏ nhất trong mảng là :${minDuongNhoNhat} <br>
        Số Chẵn Cuối Cùng Trong Mảng là : ${lastEvenNumber} <br>
        Mảng sau khi đổi vị trí là : ${numberList2}
        `
};
//Sắp xếp mảng theo thứ tự tăng dần.
document.getElementById("btnSort").onclick = function(){
    var temp ;
    for(var i = 0 ; i < numberList.length - 1; i++ ){
        for(var j = i + 1; j <numberList.length ; j++){
            if(numberList[i] > numberList[j]){
                temp = numberList[i] ;
                numberList[i] = numberList[j]
                numberList[j] = temp ;
            }
        }
    }
        
    document.getElementById("footerCheckNumber").innerHTML = 
    `
    Mảng Ban Đầu : ${numberList2} <br>
    Mảng Tăng Dần : ${numberList}
    `
}



