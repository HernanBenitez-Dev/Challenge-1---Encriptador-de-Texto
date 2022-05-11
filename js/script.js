const ingresarMensaje = document.getElementById("ingresar-texto");
const mostrarResultado = document.getElementById("mostrar-texto");
const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const bntCopiar = document.getElementById("copiar");
const imagenMunieco = document.getElementById("imagen-derecha");
const textoDerecha1 = document.getElementById("texto-derecha1");
const textoDerecha2 =  document.getElementById("texto-derecha2");

ingresarMensaje.focus();
bntCopiar.style.display="none";
mostrarResultado.style.display="none";

btnEncriptar.onclick = encriptarMensaje;
btnDesencriptar.onclick = desencriptarMensaje;
bntCopiar.onclick = copiarMensaje;

function ocultarElementos(){
    imagenMunieco.style.display = "none";
    textoDerecha1.style.display = "none";
    textoDerecha2.style.display = "none";
}

function mostrarElementos(){
    bntCopiar.style.display='';
    mostrarResultado.style.display='';
}

function encriptarMensaje(){
    var mensaje = ingresarMensaje.value;
     
    if(mensaje!=""){
        var mensajeEncriptado = mensaje
        .replaceAll("e","enter")
        .replaceAll("i","imes")
        .replaceAll("a","ai")
        .replaceAll("o","ober")
        .replaceAll("u","ufat");
    
        ocultarElementos();
        mostrarResultado.value=mensajeEncriptado;
        mostrarElementos();
        ingresarMensaje.value="";
        mostrarResultado.focus();
    }else{
        alert("No hay ningun mensaje para encriptar o desencriptar");
    }

}

function desencriptarMensaje(){
    var mensajeEncriptado = ingresarMensaje.value;
    
    if(mensajeEncriptado!=""){
        var mensaje=mensajeEncriptado
        .replaceAll("enter","e")
        .replaceAll("imes","i")
        .replaceAll("ai","a")
        .replaceAll("ober","o")
        .replaceAll("ufat","u");
    
        ocultarElementos();
        mostrarResultado.value = mensaje;
        mostrarElementos();
        ingresarMensaje.value="";
        mostrarResultado.focus();
    }else{
        alert("No hay ningun mensaje para encriptar o desencriptar");
    }
  
}

function copiarMensaje(){
    var mensajeEncriptado = mostrarResultado.value;

    if(mensajeEncriptado!=""){
        navigator.clipboard.writeText(mensajeEncriptado);
        alert("Se copio el mensaje!");
        ingresarMensaje.value=mensajeEncriptado;
        //ingresarMensaje.select();
        ingresarMensaje.focus();
        mostrarResultado.value="";
    }else{
        alert("No hay ningun mensaje para copiar");
    }
}