function luasSegitiga(){  
    var tinggi=document.getElementById("input-tinggi").valueAsNumber;  
    var alas=document.getElementById("input-alas").valueAsNumber;
    var luasSegitiga=0.5*alas*tinggi;
    document.getElementById("hasil-luas-segitiga").innerHTML = luasSegitiga;
}
    
function kelilingSegitiga(){  
    var sisi1=document.getElementById("input-sisi-1").valueAsNumber;  
    var sisi2=document.getElementById("input-sisi-2").valueAsNumber;
    var sisi3=document.getElementById("input-sisi-3").valueAsNumber;
    var kelilingSegitiga=sisi1+sisi2+sisi3;
    document.getElementById("hasil-keliling-segitiga").innerHTML = kelilingSegitiga; 
}