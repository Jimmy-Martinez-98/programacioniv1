<?php 
include('../../Config/Config.php');
$login = new login($Conexion);

$proceso = '';
if( isset($_GET['proceso']) && strlen($_GET['proceso'])>0 ){
	$proceso = $_GET['proceso'];
}
$login->$proceso( $_GET['login'] );
print_r(json_encode($login->respuesta));

class login{
    private $datos = array(), $db;
    public $respuesta = ['msg'=>"correcto"];
    
 
    public function recibirDatos($login){
        $this->datos = json_decode($login, true);
        $this->validar_datos();
        $this->respuesta['msg']=$login;
       }

    private function validar_datos(){
       
        if( empty($this->datos['correo']) ){
            $this->respuesta['msg'] = 'por favor ingrese el correo';
        }
		if( empty($this->datos['pass']) ){
            $this->respuesta['msg'] = 'por favor ingrese la pass';
        }
      
        
    }
}
?>
