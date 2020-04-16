$(document).ready(function () {
    toggle();
 
   
    $(".contenedor").load("public/vistas/inicio/inicio.html")
 
 
    
    $('#home').click(()=>{
        $(".contenedor").load("public/vistas/inicio/inicio.html");
    
    });
    
    $('#verduras').click(()=>{
        $(".contenedor").load("public/vistas/verduras/verduras.html");
    
    });
   
    $('#frutos').click(()=>{
        $(".contenedor").load("public/vistas/frutos/frutos.html");
    
    });
    
    $('#login').click(()=>{
        $(".contenedor").load("public/vistas/login/login.html")
    });
    $('#btnRegistrar').click(()=>{
        $(".contenedor").load("public/vistas/login/registrar.html")
    });

 });
 function toggle(){
     $(".navbar-toggler").click(function(){
         console.log("click");
         
         $(".collapse").animate({
             height: 'toggle'
           });
       });
 }