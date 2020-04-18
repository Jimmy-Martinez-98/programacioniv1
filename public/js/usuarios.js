var app =new vue({
	el:'#signupform',
	data:{
		usuario:{
			idusuario	:	0,
			accion		: 	'nuevo',
			nombre		:   '',
			apellido	:	'',
			correo		:	'',
			password	:	'',
			direccion	:	''

		}
	},
	method:{
		guardarusuario:function(){
		console.log("clicksubmit");
		
			fetch(`private/Modulos/usuarios/procesos.php?proceso=recibirDatos&usuario=${JSON.stringify(this.usuario)}`).then( resp=>resp.json() ).then(resp=>{
				this.usuario.msg = resp.msg;
				this.usuario.idusuario=0;
				this.usuario.nombre='';
				this.usuario.apellido='';
				this.usuario.correo='';
				this.usuario.password='';
				this.usuairo.direccion='';
            });
		}
	}


});