let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //ocultará el menu una vez que seleccionemos una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}