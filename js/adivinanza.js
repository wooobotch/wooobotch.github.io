let intentos = 0;

let aprobado = document.getElementById("test_d");
let falso_1 = document.getElementById("test_a");
let falso_2 = document.getElementById("test_b");
let falso_3 = document.getElementById("test_c");

let pista = function(n){
    switch(n){
        case 1:
            alert("La correcta es otra que no hayas intentado.");
            break;
        case 2:
            alert("Queda una, no hay mucho que probar.");
            break;
        default:
            break;
    }
}

let setIntento = function(nombre){
    if (nombre=="correcto" || intentos==4){
        intentos = 0;
    }else{
        pista(intentos);
        intentos +=1;
    }
};

aprobado.onclick = function() {
    setIntento("correcto");
    alert("Todo piola, adivinaste!!");
  };

falso_1.onclick= function(){
    setIntento("malo");
};
falso_2.onclick = function(){
    setIntento("malo");
};
falso_3.onclick = function(){
    setIntento("malo");
};