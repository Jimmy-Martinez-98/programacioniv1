var app =new vue({
	el:'#registrobox',
	data:{
		usuario:{
			idusuario	:	0,
			accion		: 	'nuevo',
			nombre		:   '',
			apellido	:	'',
			correo		:	'',
			password	:	'',
			direccion	:	'',
			msg         :   ''

		}
	},
	method:{
		 guardarUsuario(){
            fetch(`private/Modulos/usuarios/procesos.php?proceso=recibirDatos&usuario=${JSON.stringify(this.usuario)}`).then( resp=>resp.json() ).then(resp=>{
                this.usuario.msg = resp.msg;
			});
			console.log("hola")
        },
        limpiarUsuario(){
            this.usuario.idusuario=0;
            this.usuario.accion="nuevo";
            this.usuario.nombre="";
            this.usuario.apellido="";
            this.usuario.correo="";
			this.usuario.password="";
			this.usuario.direccion=""
			this.usuario.msg="";
		}
	}


});