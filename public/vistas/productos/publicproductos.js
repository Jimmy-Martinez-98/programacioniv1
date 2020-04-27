var appProduct = new Vue({
    el:'#frm-producto',
    data:{
      
       
        producto:{
            idProducto 		 : 0,
            accion   		 : 'nuevo',
           fk_idusuario   	 : '',
      	    nombreprod       : '',
          	 precio 		: '',
			descprod 		: '',
			tipohortaliza	:'',
            msg      		 : ''
        },
        usuario:{
            idusuario: 0
        },
       
        usuario:{}
    },
    methods:{
        guardarproducto:function( event){
          
            fetch(`private/Modulos/productos/proceso.php?proceso=recibirDatos&producto=${JSON.stringify(this.producto)}`).then( resp=>resp.json() ).then(resp=>{
                this.producto.idProducto = 0;
         		 this.producto.fk_idusuario  = '';
                this.producto.nombreprod = '';
                this.producto.precio = '';
				this.producto.descprod = '';
                this.producto.descprod='';
                this.producto.tipohortaliza='';
                this.producto.accion = 'nuevo';
                this.producto.msg = resp.msg;
              
            });
           
        },
        created(){
            fetch(`private/Modulos/productos/proceso.php?proceso=traer_usuario&producto=''`).then( resp=>resp.json() ).then(resp=>{
               this.usuario=resp.usuario;
            });
        }
        
    }
});