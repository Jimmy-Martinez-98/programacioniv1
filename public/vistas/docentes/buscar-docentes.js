export function modulo(){
    var $ = el => document.querySelector(el),
        frmBuscarAlumnos = $("#txtBuscarDocente");
    frmBuscarAlumnos.addEventListener('keyup', e=>{
        traerDatos(frmBuscarAlumnos.value);
    });
    let modificarAlumno = (alumno)=>{
        $("#frm-docentess").dataset.accion = 'modificar';
        $("#frm-docentes").dataset.iddocente = alumno.idDocente;
        $("#txtCodigoDocente").value = alumno.codigo;
        $("#txtNombreDocente").value = alumno.nombre;
        $("#txtDireccionDocente").value = alumno.direccion;
        $("#txtNitDocente").value = alumno.nit;
    };
    let eliminarAlumno = (idDocente)=>{
        fetch(`private/Modulos/docentes/procesodoce.php?proceso=eliminarAlumno&alumno=${idDocente}`).then(resp=>resp.json()).then(resp=>{
            traerDatos('');
        });
    };
    let traerDatos = (valor)=>{
        fetch(`private/Modulos/docentes/procesodoce.php?proceso=buscarAlumno&alumno=${valor}`).then(resp=>resp.json()).then(resp=>{
            let filas = '';
            resp.forEach(alumno => {
                filas += `
                    <tr data-iddocente='${alumno.idDocente}' data-docente='${JSON.stringify(alumno)}'>
                        <td>${alumno.codigo}</td>
                        <td>${alumno.nombre}</td>
                        <td>${alumno.direccion}</td>
                        <td>${alumno.nit}</td>
                        <td>
                            <input type="button" class="btn btn-outline-danger text-white" value="del">
                        </td>
                    </tr>
                `;
            });
            $("#tbl-buscar-docentes > tbody").innerHTML = filas;
            $("#tbl-buscar-docentes > tbody").addEventListener("click",e=>{
                if( e.srcElement.parentNode.dataset.alumno==null ){
                    eliminarAlumno( e.srcElement.parentNode.parentNode.dataset.iddocente );
                } else {
                    modificarAlumno( JSON.parse(e.srcElement.parentNode.dataset.alumno) );
                }
            });
        });
    };
    traerDatos('');
}