export function modulo(){
    var $ = el => document.querySelector(el),
        frmAlumnos = $("#frm-docentes");
    frmAlumnos.addEventListener("submit",e=>{
        e.preventDefault();
        e.stopPropagation();
        
        let alumnos = {
            accion    : frmAlumnos.dataset.accion,
            idDocente  : frmAlumnos.dataset.idDocente,
            codigo    : $("#txtCodigoDocentes").value,
            nombre    : $("#txtNombreDocentes").value,
            direccion : $("#txtDireccionDocentes").value,
            nit       : $("#txtNitDocente").value
        };
        fetch(`private/Modulos/docentes/procesodoce.php?proceso=recibirDatos&alumno=${JSON.stringify(alumnos)}`).then( resp=>resp.json() ).then(resp=>{
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