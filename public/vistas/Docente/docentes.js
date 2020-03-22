var $ = el => document.querySelector(el),
    frmAlumnos = $("#frmDocentes");
frmAlumnos.addEventListener("submit",e=>{
    e.preventDefault();
    e.stopPropagation();
    
    let docentes = {
        accion    : 'nuevo',
        codigo    : $("#txtCodigoDocente").value,
        nombre    : $("#txtNombreDocente").value,
        direccion : $("#txtDireccionDocente").value,
        telefono  : $("#txtTelefonoDocente").value,
        dui  : $("#txtDuiDocente").value
    };
    fetch(`private/Modulos/Docentes/procesodoce.php?proceso=recibirDatos&alumno=${JSON.stringify(docentes)}`).then( resp=>resp.json() ).then(resp=>{
        $("#respuestaDocente").innerHTML = `
            <div class="alert alert-success" role="alert">
                ${resp.msg}
            </div>
        `;
    });
});