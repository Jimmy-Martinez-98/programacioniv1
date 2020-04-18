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
			direccion	:	''

		}
	},
	method:{
		 guardarUsuario(){
            fetch(`private/Modulos/alumnos/procesos.php?proceso=recibirDatos&alumno=${JSON.stringify(this.alumno)}`).then( resp=>resp.json() ).then(resp=>{
                this.alumno.msg = resp.msg;
            });
        },
        limpiarUsuario(){
            this.alumno.idAlumno=0;
            this.alumno.accion="nuevo";
            this.alumno.codigo="";
            this.alumno.nombre="";
            this.alumno.direccion="";
            this.alumno.telefono="";
            this.alumno.msg="";
		}
	}


});