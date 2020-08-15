//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
if (sessionStorage.getItem('correo')) {
    location.href="index.html"
}
var singin=document.getElementById('formulario');
singin.addEventListener("submit", function(e){
    var correoo=document.getElementById('exampleInputEmail1').value;
    sessionStorage.setItem('correo', correoo);
});
});