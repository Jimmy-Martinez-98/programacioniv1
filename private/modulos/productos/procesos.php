<?php 
include('../../Config/Config.php');
$producto = new producto($Conexion);

$proceso = '';
if( isset($_GET['proceso']) && strlen($_GET['proceso'])>0 ){
	$proceso = $_GET['proceso'];
}
$producto->$proceso( $_GET['producto'] );
print_r(json_encode($producto->respuesta));

class producto{
    private $datos = array(), $db;
    public $respuesta = ['msg'=>'correcto'];
    
    public function __construct($db){
        $this->db=$db;
    }
    public function recibirDatos($producto){
        $this->datos = json_decode($producto, true);
        $this->validar_datos();
    }
    private function validar_datos(){
       
        if( empty($this->datos['nombreprod']) ){
            $this->respuesta['msg'] = 'por favor ingrese el nombreprod de la producto';
        }
        if( empty($this->datos['precio']) ){
            $this->respuesta['msg'] = 'por favor ingrese la precio de la producto';
		}
		if( empty($this->datos['descprod']) ){
            $this->respuesta['msg'] = 'por favor ingrese la descprod de la producto';
        }
        $this->almacenar_producto();
    }
    private function almacenar_producto(){
        if( $this->respuesta['msg']==='correcto' ){
            if( $this->datos['accion']==='nuevo' ){
                $this->db->consultas('
                    INSERT INTO producto (fk_idusuario,nombreprod,precio,descprod) VALUES(
                        "'. $this->datos['fk_idusuario']['id'] .'",
                        "'. $this->datos['nombreprod'] .'",
                        "'. $this->datos['precio'] .'",
                        "'. $this->datos['descprod'] .'"
                    )
                ');
                $this->respuesta['msg'] = 'Registro insertado correctamente';
             } //else if( $this->datos['accion']==='modificar' ){
            //     $this->db->consultas('
            //        UPDATE producto SET
            //             fk_idusuario     = "'. $this->datos['fk_idusuario'] .'",
            //             nombreprod     = "'. $this->datos['nombreprod'] .'",
            //             precio  = "'. $this->datos['precio'] .'",
            //             descprod   = "'. $this->datos['descprod'] .'"
            //         WHERE idproducto = "'. $this->datos['idproducto'] .'"
            //     ');
            //     $this->respuesta['msg'] = 'Registro actualizado correctamente';
            // }
        }
    }

    public function traer_usuario(){
        $this->$db->consultas('
        SELECT usuario.idusuario AS id FROM usuario
        ');
       return $this->respuesta=['usuario'=>$usuario];
    }

    // public function buscarMateria($valor=''){
    //     $this->db->consultas('
    //         select producto.idMateria, producto.fk_idusuario, producto.nombreprod, producto.precio, producto.descprod
    //         from producto
    //         where producto.fk_idusuario like "%'.$valor.'%" or producto.nombreprod like "%'.$valor.'%" or producto.precio like "%'.$valor.'%" or producto.descprod like "%'.$valor.'%"
    //     ');
    //     return $this->respuesta = $this->db->obtener_datos();
    // }
    // public function eliminarMateria($idMateria=''){
    //     $this->db->consultas('
    //         delete producto
    //         from producto
    //         where producto.idMateria = "'.$idMateria.'"
    //     ');
    //     $this->respuesta['msg'] = 'Registro eliminado correctamente';
    // }
}
?>