function luasSegitiga(){  
    var tinggi=document.getElementById("input-tinggi").valueAsNumber;  
    var alas=document.getElementById("input-alas").valueAsNumber;
    
    if(!alas || !tinggi){
        console.log("Alas atau Tinggi Kosong atau bukan diisi angka");
        alert("Alas dan Tinggi harus diisi angka");
    } else {
        var luasSegitiga=0.5*alas*tinggi;
        document.getElementById("hasil-luas-segitiga").innerHTML = "Luas Segitiga = 0.5 x Alas x Tinggi"+"<br/>"+
        "Luas Segitiga = 0.5 x "+alas+" X "+tinggi+"<br/>"+
        "Luas Segitiga = "+luasSegitiga;
    }   
}
    
function kelilingSegitiga(){  
    var sisi1=document.getElementById("input-sisi-1").valueAsNumber;  
    var sisi2=document.getElementById("input-sisi-2").valueAsNumber;
    var sisi3=document.getElementById("input-sisi-3").valueAsNumber;

    if(!sisi1 || !sisi2 || !sisi3){
        console.log("Sisi 1, Sisi 2, Sisi 3 ada yang Kosong");
        alert("Sisi 1, Sisi 2 dan Sisi 3 harus diisi");
    } else {
        var kelilingSegitiga=sisi1+sisi2+sisi3;
        document.getElementById("hasil-keliling-segitiga").innerHTML = "Keliling Segitiga = Sisi 1 + Sisi 2 + Sisi 3"+"<br/>"+
        "Keliling Segitiga = "+sisi1+" + "+sisi2+" + "+sisi3+"<br/>"+
        "Keliling Segitiga = "+kelilingSegitiga;
    }    
}

function resetAll(){ 
    document.getElementById("input-alas").value = null; 
    document.getElementById("input-tinggi").value = null; 
    document.getElementById("input-sisi-1").value = null; 
    document.getElementById("input-sisi-2").value = null; 
    document.getElementById("input-sisi-3").value = null; 
    document.getElementById("hasil-luas-segitiga").innerHTML = null; 
    document.getElementById("hasil-keliling-segitiga").innerHTML = null; 
}