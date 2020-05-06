var appbuscar_alquiler = new Vue({
    el: '#frm-buscar-alquiler',
    data:{
        mis_alquiler:[],
        valor:''
    },
    methods:{
        buscarMatriculas(){
            fetch(`private/Modulos/alquiler/procesos.php?proceso=buscarMatricula&matricula=${this.valor}`).then( resp=>resp.json() ).then(resp=>{ 
                this.mis_alquiler = resp;
                
            });
        },
        modificarMatricula(alquiler){
            appalquiler.alquiler = alquiler;
            appalquiler.alquiler.accion = 'modificar';
        },
        eliminarMatricula(idAlquiler){
            var opcion = confirm("¿esta seguro que desea borrarlo?");
            if(opcion==true){
            fetch(`private/Modulos/alquiler/procesos.php?proceso=eliminarMatricula&matricula=${idAlquiler}`).then( resp=>resp.json() ).then(resp=>{
                this.buscarMatriculas();
            });
        }
    }
    
    },
    created(){
        this.buscarMatriculas();
    }
});