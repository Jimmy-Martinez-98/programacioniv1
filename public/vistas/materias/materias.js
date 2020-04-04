var appmateria = new Vue({
    el:'#frm-materias',
    data:{
        materia:{
            idMateria  : 0,
            accion    : 'nuevo',
            codigo    : '',
            nombre    : '',
            duracion  : '',
            msg       : ''
        }
    },
    methods:{
        guardarMateria:function(){
            fetch(`private/Modulos/materias/procesomate.php?proceso=recibirDatos&alumno=${JSON.stringify(this.materia)}`).then( resp=>resp.json() ).then(resp=>{
                this.materia.msg = resp.msg;
                this.materia.idMateria = 0;
                this.materia.codigo = '';
                this.materia.nombre = '';
                this.materia.duracion = '';
                this.materia.accion = 'nuevo';
                appBuscarMaterias.buscarMateria();
            });
        }
    }
});