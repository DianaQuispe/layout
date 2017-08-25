/*
 * Archivo principal de funcionalidad de JS
 */
 var o=0;
var row = document.getElementById("row");

var images = ["assets/images/img-1.jpg", "assets/images/img-2.jpg", "assets/images/img-3.jpg", "assets/images/img-4.jpg", "assets/images/img-5.jpg", "assets/images/img-6.jpg", "assets/images/img-7.jpg", "assets/images/img-8.jpg", "assets/images/img-9.jpg"];
for (o = 0; o < images.length; o++) {
    var div = document.createElement("div");
    div.setAttribute("class", "col-4");
    var crearIM = document.createElement("img");
    crearIM.setAttribute("src", images[o]);
    crearIM.setAttribute("id", o.toString());
    crearIM.setAttribute("onclick", 'iMG('+ o.toString()+')');
    crearIM.style.cursor = "pointer";
    crearIM.setAttribute("class", "imagenes");
        console.log(crearIM);
    var crearH2 = document.createElement("H2");
    var textoH2 = document.createTextNode("NOMBRE DEL PROYECTO")
    crearH2.appendChild(textoH2);
    div.appendChild(crearIM);
    div.appendChild(crearH2);
    row.appendChild(div);
}

function iMG(o) {
    var product = document.getElementById("product");
    var divsote = document.createElement("div");
    divsote.setAttribute("id","divG");
    product.appendChild(divsote);
    var divsito = document.createElement("div");
    divsito.setAttribute("class","divC");
    var crearIMq = document.getElementById(o.toString()).src;
    var crearIM = document.createElement("img");
    crearIM.setAttribute("class","image")
    var crearSpan = document.createElement("p");
    crearSpan.setAttribute("class","span");
    crearSpan.setAttribute("onclick","borrar()");
    var textoSpan = document.createTextNode("X");
    var cambiar = document.createElement('span');
    var cambiarSpan = document.createTextNode(">");
    cambiar.setAttribute("class","spani");
    cambiar.setAttribute("onclick","cambiar("+o.toString().src+")");
    cambiar.appendChild(cambiarSpan);
    crearSpan.appendChild(textoSpan);
    crearIM.setAttribute("src", crearIMq);
    console.log(crearIM);
    divsito.appendChild(cambiar);
    divsito.appendChild(crearSpan);
    divsito.appendChild(crearIM);
    divsote.appendChild(divsito);
}
function borrar() {
    var product = document.getElementById("product");
    product.removeChild(product.firstChild);
}
function cambiar() {
alert(o.toString().src);

}
