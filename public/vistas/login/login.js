var applogin = new Vue({
	el:'#frm-login',
	data:{
		name:{
			correo  	: '',
			pass		:''
		}
	},
	methods:{
		 inicioSesion:function(event){
			fetch(`private/Modulos/usuarios/procesos.php?proceso=recibirDatos&login=${JSON.stringify(this.name)}`).then( resp=>resp.json() ).then(resp=>{
			  this.name.correo="";
			  this.name.pass="";
              this.name.msg=resp.msg;
            });
		 }
	}


})