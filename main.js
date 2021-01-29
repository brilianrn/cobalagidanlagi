function soal() {
    let acakPertama = Math.random() * 10;
    let acakKedua = Math.random() * 10;
    let angkaPertama = Math.floor(acakPertama);
    let angkaKedua = Math.floor(acakKedua);
    let hasil = [];
    hasil.push(angkaPertama, angkaKedua);
    return hasil;
}

function hasil(arr) {
    let hasilPenjumlahan = 0;
    let result = "";
    
    for (let i = 0; i < arr.length; i++) {
        hasilPenjumlahan += arr[i];
    }
    
    let ubahKeStr = "" + hasilPenjumlahan;
    
    for (let j = 0; j < ubahKeStr.length; j++) {
        if (j === ubahKeStr.length-1) {
            result += ubahKeStr[j];
        }
    }
    return result;
}

function game() {
    let question = soal();
    let result = hasil(question);
    return result;
}

// console.log(game());

function masukkanKeHTML() {
    let soalYangAda = soal();
    let jawabanNya = hasil(soalYangAda);
    let ambilAngka1 = document.getElementById("angka-pertama");
    let ambilAngka2 = document.getElementById("angka-kedua");
    let ucapan = document.querySelector("#game .box #box-jawaban #hasil-benar");

    ambilAngka1.innerHTML = `${soalYangAda[0]}`;
    ambilAngka2.innerHTML = `${soalYangAda[1]}`;
    ucapan.innerHTML = `Hasilnya adalah ${jawabanNya}`
    return jawabanNya;
}

let jawabanSistem = masukkanKeHTML();

let ubah = document.querySelector("#refresh");
ubah.onclick = masukkanKeHTML;

//0
function nilai0() {
    let num0 = document.getElementById("angka0").value;
    return num0;
}

function pembanding0(jawabanSistem, panggil0) {
    if (panggil0 !== jawabanSistem) {
        return false;
    } else {
        return true;
    }
}

let pAngka0 = document.getElementById("angka0");
pAngka0.addEventListener("click", function () {
    const hasilSistem = masukkanKeHTML();
    const masukkanNilai0 = nilai0();
    const hasil = pembanding0(hasilSistem, masukkanNilai0);
    console.log(hasil);
});

//1
function nilai1() {
    let num1 = document.getElementById("angka1").value;
    return num1;
}

function pembanding1(jawabanSistem, panggil1) {
    if (panggil1 !== jawabanSistem) {
        return false;
    } else {
        return true;
    }
}

let pAngka1 = document.getElementById("angka1");
pAngka1.addEventListener("click", function () {
    const hasilSistem = masukkanKeHTML();
    const masukkanNilai1 = nilai1();
    const hasil = pembanding1(hasilSistem, masukkanNilai1);
    console.log(hasil);
});

//2
function nilai2() {
    let num2 = document.getElementById("angka2").value;
    return num2;
}

function pembanding2(jawabanSistem, panggil2) {
    if (panggil2 !== jawabanSistem) {
        return false;
    } else {
        return true;
    }
}

let pAngka2 = document.getElementById("angka2");
pAngka2.addEventListener("click", function () {
    const hasilSistem = masukkanKeHTML();
    const masukkanNilai2 = nilai2();
    const hasil = pembanding2(hasilSistem, masukkanNilai2);
    console.log(hasil);
});

//3
function nilai3() {
    let num3 = document.getElementById("angka3").value;
    return num3;
}

function pembanding3(jawabanSistem, panggil3) {
    if (panggil3 !== jawabanSistem) {
        return false;
    } else {
        return true;
    }
}

let pAngka3 = document.getElementById("angka3");
pAngka3.addEventListener("click", function () {
    const hasilSistem = masukkanKeHTML();
    const masukkanNilai3 = nilai3();
    const hasil = pembanding3(hasilSistem, masukkanNilai3);
    console.log(hasil);
});

//4
function nilai4() {
    let num4 = document.getElementById("angka4").value;
    return num4;
}

function pembanding4(jawabanSistem, panggil4) {
    if (panggil4 !== jawabanSistem) {
        return false;
    } else {
        return true;
    }
}

let pAngka4 = document.getElementById("angka4");
pAngka4.addEventListener("click", function () {
    const hasilSistem = masukkanKeHTML();
    const masukkanNilai4 = nilai4();
    const hasil = pembanding4(hasilSistem, masukkanNilai4);
    console.log(hasil);
});

//5
function nilai5() {
    let num5 = document.getElementById("angka5").value;
    return num5;
}

function pembanding5(jawabanSistem, panggil5) {
    if (panggil5 !== jawabanSistem) {
        return false;
    } else {
        return true;
    }
}

let pAngka5 = document.getElementById("angka5");
pAngka5.addEventListener("click", function () {
    const hasilSistem = masukkanKeHTML();
    const masukkanNilai5 = nilai5();
    const hasil = pembanding5(hasilSistem, masukkanNilai5);
    console.log(hasil);
});

//6
function nilai6() {
    let num6 = document.getElementById("angka6").value;
    return num6;
}

function pembanding6(jawabanSistem, panggil6) {
    if (panggil6 !== jawabanSistem) {
        return false;
    } else {
        return true;
    }
}

let pAngka6 = document.getElementById("angka6");
pAngka6.addEventListener("click", function () {
    const hasilSistem = masukkanKeHTML();
    const masukkanNilai6 = nilai6();
    const hasil = pembanding6(hasilSistem, masukkanNilai6);
    console.log(hasil);
});

//7
function nilai7() {
    let num7 = document.getElementById("angka7").value;
    return num7;
}

function pembanding7(jawabanSistem, panggil7) {
    if (panggil7 !== jawabanSistem) {
        return false;
    } else {
        return true;
    }
}

let pAngka7 = document.getElementById("angka7");
pAngka7.addEventListener("click", function () {
    const hasilSistem = masukkanKeHTML();
    const masukkanNilai7 = nilai7();
    const hasil = pembanding7(hasilSistem, masukkanNilai7);
    console.log(hasil);
});

//8
function nilai8() {
    let num8 = document.getElementById("angka8").value;
    return num8;
}

function pembanding8(jawabanSistem, panggil8) {
    if (panggil8 !== jawabanSistem) {
        return false;
    } else {
        return true;
    }
}

let pAngka8 = document.getElementById("angka8");
pAngka8.addEventListener("click", function () {
    const hasilSistem = masukkanKeHTML();
    const masukkanNilai8 = nilai8();
    const hasil = pembanding8(hasilSistem, masukkanNilai8);
    console.log(hasil);
});

//9
function nilai9() {
    let num9 = document.getElementById("angka9").value;
    return num9;
}

function pembanding9(jawabanSistem, panggil9) {
    if (panggil9 !== jawabanSistem) {
        return false;
    } else {
        return true;
    }
}

let pAngka9 = document.getElementById("angka9");
pAngka9.addEventListener("click", function () {
    const hasilSistem = masukkanKeHTML();
    const masukkanNilai9 = nilai9();
    const hasil = pembanding9(hasilSistem, masukkanNilai9);
    console.log(hasil);
});






