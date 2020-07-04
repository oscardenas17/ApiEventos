class Interfaz {
    constructor(){
        //Inicializa la app al instanciar
        this.init();
        //leer el resultado
        this.listado =  document.getElementById('resultado-eventos');

    }
    //Metodo para cuando inicialice la app
    init(){

    }
    //Imprimir categorias
    imprimitcategorias(){
        const listaCategorias = eventbrite.obtenerCategorias();
    }
}