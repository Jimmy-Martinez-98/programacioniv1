document.addEventListener("DOMContentLoaded", e=>{
    const form = document.querySelector("#frmSaludo");
    form.addEventListener("submit", event=>{
        event.preventDefault();

       let nombre = document.querySelector("#txtNombre").value;
       fetch(`saludo.php?name=${nombre}`)
            .then(resp=>resp.text())
            .then(respuesta=>{
                document.querySelector("#lblSaludo").innerHTML = respuesta;
            });
    });
});