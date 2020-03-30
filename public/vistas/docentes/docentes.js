export function modulo(){
    var $ = el => document.querySelector(el),
        frmAlumnos = $("#frm-docentes");
    frmAlumnos.addEventListener("submit",e=>{
        e.preventDefault();
        e.stopPropagation();
        
        let docentes = {
            accion    : frmAlumnos.dataset.accion,
            idDocente  : frmAlumnos.dataset.idDocente,
            codigo    : $("#txtCodigoDocente").value,
            nombre    : $("#txtNombreDocente").value,
            direccion : $("#txtDireccionDocente").value,
            nit       : $("#txtNitDocente").value
        };
        fetch(`private/Modulos/docentes/procesodoce.php?proceso=recibirDatos&alumno=${JSON.stringify(docentes)}`).then( resp=>resp.json() ).then(resp=>{
            $("#respuestaAlumno").innerHTML = `
                <div class="alert alert-success" role="alert">
                    ${resp.msg}
                </div>
            `;
        });
    });
    frmAlumnos.addEventListener("reset",e=>{
        $("#frm-docentes").dataset.accion = 'nuevo';
        $("#frm-docentes").dataset.idDocente = '';
    });
}