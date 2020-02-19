document.addEventListener("DOMContentLoaded",e=>{
    const form = document.querySelector("#frmconversores");
    form.addEventListener("submit",e=>{
        event.preventDefault();
        let de = document.querySelector("#cboDe").value,
        a = document.querySelector("#cboA").value,
        cantidad = querySelector("#txtCantidadConversor").value;
        Console.log(de, a , cantidad);

        let monedas = {
            "dolar":1,
            "euro":0.93,
            "quetzal":7.63,
            "lempira":24.90,
            "cordoba":34.19
        };
        let $res = document.querySelector("#lblRespuesta");
        $res.innerHTML = `Respuesta: ${(monedas[a]/monedas[de]*cantidad).toFixed(2)}`;
    });
});