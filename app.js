document.addEventListener("DOMContentLoaded",e=>{
    const frm = document.querySelector("#frmConversores");
frm.addEventListener("submit",event=>{
    let de = document.querySelector("#cboDe").value,
    a = document.querySelector("#cboA").value,
    cantidad = document.querySelector("#txtCantidadConversor").value,
    opcion = document.getElementById('cboConvertir');

let monedas = {
    "dolar":1,
    "colones": 8.75,
    "Yenes":111.27,
    "Rupia":69.75,
    "Lempiras":24.36,
    "Peso":19.36,
    "Bitcoin":0.00026
},

    longitudes = {
        "metro":1,
        "Cm": 100,
        "pulgada":39.3701,
        "Pie":3.28084,
        "Varas":1.1963081929167,
        "Yardas":1.09361,
        "Km":0.001,
        "Milla":0.0006213714
    };

let $res = document.querySelector("#lblRespuesta");
if(opcion.value == "divisas"){
  $res.innerHTML = `Respuesta: ${ (monedas[a]/monedas[de]*cantidad).toFixed(2) }`;
} else if(opcion.value == "longitud"){
  $res.innerHTML = `Respuesta: ${ (longitudes[a]/longitudes[de]*cantidad).toFixed(2) }`;
};

});
});
//rellenar optiones
function rellenar(){
    let opcion = document.getElementById("cboConvertir"),
    cbde1 = document.getElementById('cboDe'),
    cba1= document.getElementById('cboA');

    cba1.value = "";
    cba1.innerHTML ="";
    cbde1.value = "";
    cbde1.innerHTM= "";
if(opcion.value =="divisas"){
    var serie = ["Dolares!dolares","Colones!colones(sv)","Yames!yanes","Rupia!rupia","Lempiras!lempiras","Peso!peso(mx)","Bitcoin!bitcoin"];
}else{
    if(opcion.value == "longitud"){
        var serie = ["m!metro","cm!centometro","pulg!pulgada","Pie!pie","Varas!varas","","Yardas!yardas","Km!kilometros","Millas!millas"];
    }
}
for(var i=0;i<serie.length;i++){ 
    var repair = serie[i].split("!");
    var newop = document.createElement("option");
    newop.value = repair[0]
    newop.innerHTML = repair[1];
    cbde1.options.add(newop);
  };
  for(var i=0;i<serie.length;i++){ 
    var repair = serie[i].split("!");
    var newop = document.createElement("option");
    newop.value = repair[0]
    newop.innerHTML = repair[1];
    cba1.options.add(newop);
  };
}