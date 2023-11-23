window.onload=inicio;
var tabla=document.getElementById("cajaTabla");

var bloqueHtml=document.createElement("div");

function inicio(){
    console.log("entro en inicio");
    //ENCABEZAMIENTO DE LA HTML
    bloqueHtml.innerHTML="<div class='row'>"+
    "<div class='col-lg-2 text-center'>ID</div>"+
    "<div class='col-lg-2 text-center'>NOMBRE</div>"+

    "<div class='col-lg-2 text-center'>PRECIO</div>"+

    "<div class='col-lg-2 text-center'>IMAGEN</div>"+
    "<div class='col-lg-2 text-center'>ELIMINAR</div>"+
    "<div class='col-lg-2 text-center'>MODIFICAR</div></div>";

    //bloque AJAX PARA EXTRAER DATOS
   var xhr=new XMLHttpRequest();
   xhr.onreadystatechange=function(){
     //control el estado de la petición de datos al servidor
       if (this.readyState==4 && this.status==200){
        let  objeto= JSON.parse(this.responseText);
         objeto.forEach(recorrer);
         function recorrer(fruta,indice){
            console.log("entro en bucle")
           
           const vector=[fruta.id,fruta.name,fruta.price,fruta.photo];
           console.log(vector);
           bloqueHtml.innerHTML+="<div class='row'>"+
           "<div class='col-lg-2 text-center'>"+fruta.id+"</div>"+
           "<div class='col-lg-2 text-center'>"+fruta.name+"</div>"+
       
           "<div class='col-lg-2 text-center'>"+fruta.price+"</div>"+
       
           "<div class='col-lg-2 text-center'><img src="+fruta.photo+" witdh='80' height='90'></div>"+
           //con un href simulo un boton utilizando las clases btn btn-danger
           //javascript:void(0) anula el link del ancla a
           //pero tengo que añadir el evento de javascript
           "<div class='col-lg-2 text-center'><a href=javascript:void(0) "+
           "class='btn btn-danger btn-md' onclick=eliminar("+fruta.id+")>Eliminar</a></div>"+
           "<div class='col-lg-2 text-center'><a href=javascript:void(0) "+
           "class='btn btn-danger btn-md' onclick=Modificar("+fruta+")>Modificar </a></div></div>";
         }
       }
    }
     xhr.open("GET","http://moralo.atwebpages.com/menuAjax/productos3/getProductos.php",true);
     xhr.send();
     console.log("bloqueHtml"+bloqueHtml);
     tabla.appendChild(bloqueHtml);

   }






function eliminar(id){
    console.log("item para eliminar"+id);
}
function modificar(fruta){

}