var appBuscarDocentes = new Vue({
    el:'#frm-buscar-docentes',
    data:{
        misdocentes:[],
        valor:''
    },
    methods:{
        buscarDocente:function(){
            fetch(`private/Modulos/docentes/procesodoce.php?proceso=buscarAlumno&alumno=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.misdocentes = resp;
            });
        },
        modificarAlumno:function(docente){
            appdocente.docente = docente;
            appdocente.docente.accion = 'modificar';
        },
        eliminarAlumno:function(idDocente){
            fetch(`private/Modulos/docentes/procesodoce.php?proceso=eliminarAlumno&alumno=${idDocente}`).then(resp=>resp.json()).then(resp=>{
                this.buscarDocente();
            });
        }
    },
    created:function(){
        this.buscarAlumno();
    }
});