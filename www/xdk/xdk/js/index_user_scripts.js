/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {

    
        /* button  #btnZeros */
    $(document).on("click", "#btnZeros", function(evt)
    {
       txtNumeros.placeholder = txtNumeros.placeholder + 0;
         return false;
    });
    
        /* button  #btnremover */
    $(document).on("click", "#btnremover", function(evt)
    {
        /* your code goes here */
        var textoantigo = txtNumeros.placeholder;
        
        txtNumeros.placeholder = txtNumeros.replace(textoantigo,'aaa');
        
         return false;
    });
    
        /* button  #btnCadastro */
    $(document).on("click", "#btnCadastro", function(evt)
    {
         /*global activate_page */
         activate_page("#CadastrarPet"); 
         return false;
    });
    
        /* button  #btnProcurar */
    $(document).on("click", "#btnProcurar", function(evt)
    {
         /*global activate_page */
         activate_page("#ProcurarPet"); 
         return false;
    });
    
        /* button  #btnComoFunciona */
    $(document).on("click", "#btnComoFunciona", function(evt)
    {
         /*global activate_page */
         activate_page("#ComoFunciona"); 
         return false;
    });
    
        /* button  #btnContato */
    $(document).on("click", "#btnContato", function(evt)
    {
         /*global activate_page */
         activate_page("#Contatenos"); 
         return false;
    });
    
        /* button  #btnEncontrei */
    
    
        /* button  #btnEncontrei */
    $(document).on("click", "#btnEncontrei", function(evt)
    {
         /*global activate_page */
         activate_page("#EncontreiPet"); 
         return false;
    });
    
        /* button  #btnEncontrei */
    $(document).on("click", "#btnEncontrei", function(evt)
    {
         /*global activate_page */
         activate_page("#EncontreiPet"); 
         return false;
    });
    
        /* button  #btnEncontrei */
    $(document).on("click", "#btnEncontrei", function(evt)
    {
         /*global activate_page */
         activate_page("#ProcurarPet"); 
         return false;
    });
    
        /* button  #btnEncontrei */
    $(document).on("click", "#btnEncontrei", function(evt)
    {
         /*global activate_page */
         activate_page("#EncontreiPet"); 
         return false;
    });
    
        /* button  #btnHome */
    $(document).on("click", "#btnHome", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #btnCadastrar */
    $(document).on("click", "#btnCadastrar", function(evt)
    {
         /*global activate_page */
         activate_page("#CadastrarPet"); 
         return false;
    });
    
        /* button  #btnProcurar */
    $(document).on("click", "#btnProcurar", function(evt)
    {
         /*global activate_page */
         activate_page("#ProcurarPet"); 
         return false;
    });
    
        /* button  #btnComoFunciona */
    $(document).on("click", "#btnComoFunciona", function(evt)
    {
         /*global activate_page */
         activate_page("#ComoFunciona"); 
         return false;
    });
    
        /* button  #btnContatenos */
    $(document).on("click", "#btnContatenos", function(evt)
    {
         /*global activate_page */
         activate_page("#Contatenos"); 
         return false;
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_71", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#navbar"));  
         return false;
    });
    
        /* button  #voltar */
    $(document).on("click", "#voltar", function(evt)
    {
         window.history.go(-1);
         return false;
    });
    
        /* button  #enviar */
    $(document).on("click", "#enviar", function(evt)
    {
         /*global activate_page */
         activate_page("#ProcurarPet"); 
         return false;
    });
    
        /* button  #enviar */
    $(document).on("click", "#enviar", function(evt)
    {
         /*global activate_page */
         activate_page("#ProcurarPet"); 
         return false;
    });
    
        /* button  #enviar */
    $(document).on("click", "#enviar", function(evt)
    {
         /*global activate_page */
         activate_page("#Contatenos"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
