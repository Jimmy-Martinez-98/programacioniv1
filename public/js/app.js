$(document).ready(function () {
    toggle();
  
 
    $('#verduras').click(()=>{
       
        $(".container").load("public/vistas/verduras/verduras.html",function(data){
          $(this).html(data);
       });
    
    });
   
    $('#frutos').click(()=>{
    
        $(".container").load("public/vistas/frutos/frutos.html",function(data){
          $(this).html(data);
       });
    
    });
    $('#login').click(()=>{
      
       $('.container').load("public/vistas/login/login.html", function (data) {
          $(this).html(data);
          
       });
    });
    
    $('#newusuario').click(()=>{
      
     $('.container').load("public/vistas/usuario/nuevousurario.html",function(data){
        $(this).html(data);
     });
    });
        
    
    
    });
   
   
   
 
    $('ul li a:first').addClass('active');
 
    $('ul li a').click(function (e) { 
       $('ul li a').removeClass('active');
       $(this).addClass('active');
       
    });
       
 function toggle(){
     $("#toggles").click(function(){
         console.log("click");
         
         $(".collapse").animate({
             height: 'toggle'
           });
       });
 }