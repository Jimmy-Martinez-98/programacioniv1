
var appdocente = new Vue({
    el:'#frm-docentes',
    data:{
        docente:{
            idDocente  : 0,
            accion    : 'nuevo',
            codigo    : '',
            nombre    : '',
            direccion : '',
            nit       : '',
            msg       : ''
        }
    },
    methods:{
        guardarDocente:function(){
            fetch(`private/Modulos/docentes/procesodoce.php?proceso=recibirDatos&alumno=${JSON.stringify(this.docente)}`).then( resp=>resp.json() ).then(resp=>{
                this.docente.msg = resp.msg;
                this.docente.idAlumno = 0;
                this.docente.codigo = '';
                this.docente.nombre = '';
                this.docente.direccion = '';
                this.docente.nit = '';
                this.docente.accion = 'nuevo';
                appBuscarDocentes.buscarDocente();
            });
        }
    }
});

$(document).ready(function() {
    //Obtienes el contenedor donde se va a poner el nuevo formulario
    var contenedor = $("#contenedor");
    //Obtienes el boton que acciona el agregado
    var btnAddMore = $("#btnRegistrar");
    //Adjuntas un evento click al boton add More
    btnAddMore.click(function() {
      //Agregas el contenido al contenedor cuando se realice el click al boton add more
      contenedor.append(plantilla);
  
    });
  });