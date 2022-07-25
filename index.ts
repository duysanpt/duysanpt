// 1. Viết chương trình TS để tìm tổng, hiệu, tích và thương của hai số nguyên và in kết quả ra màn hình.
let a:number=4,b:number=2;
let 
Tong = a+b,
Hieu= a-b,
Thuong= a*b,
Tich= a/b;
console.log("Tong là:"+Tong);
console.log("Tong là:"+Hieu);
console.log("Tong là:"+Thuong);
console.log("Tong là:"+Tich);

// 2. Viết chương trình TS để nhập hai số nguyên từ bàn phím và sau đó in ra màn hình tổng và trung bình của hai số bạn vừa nhập.
let x= prompt("Nhập vào  số x:","");
let y= prompt("Nhập vào  số y:","");
 if ( (x)&&(y)) {
            console.log("Tổng 2 số",parseInt(x) + parseInt(y));
            console.log("TBC 2 số ",(parseInt(x) + parseInt(y))/2)
       }

// 3. Viết chương trình TS để tìm vận tốc cuối cùng và in kết quả ra màn hình khi biết vận tốc ban đầu, gia tốc và thời gian.
// Vbd = vận tốc ban đầu
// Vcc = vận tốc Cuối cùng
//gt= gia tốc
//tg= thời gian
let vbd:number= 4,gt:number=3,tg:number=2;
let vcc:number=vbd+(gt*tg)
console.log(" Vận tốc cuối cùng :" +vcc);

// 4. Chương này chúng ta cùng làm quen với các toán tử tăng (++) và toán tử giảm (--) trong TS và cách chúng ta in kết quả ra màn hình theo định dạng nào đó.
let c=5,d=6;
c++;
d--;
console.log("ket qua inc tăng :"+c);
console.log(" ket qua in d giảm :"+d);

// 5. Viết chương trình TS để nhập điểm kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ và tính tổng điểm, sau đó in kết quả.
let dkt= prompt("Nhập vào  số dkt:","");
let dgk= prompt("Nhập vào  số dgk:","");
let dck= prompt("Nhập vào  số dck:","");
let TongDiem = parseInt(dkt)+parseInt(dgk)+parseInt(dck);
 if ( (dkt)&&(dgk)&& (dck)){
  
            console.log("TBC 2 số ",+TongDiem);
       }

