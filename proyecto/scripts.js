let nombreartista= "daft punk"
let reproducciones= 5000
let megusta= "la luna"
let amigos= 5
console.log("mi artista favorito es:", nombreartista);
console.log("he escuchado sus canciones esta cantidad de veces: ",reproducciones);
console.log("siempre en las noches veo a: ", megusta, "y tengo ", amigos, "amigos")
let mititulo=document.getElementById("tituloprincipal");
mititulo.innerText="la super pagina de " + nombreartista;

function cambiarcolor(){
    if (document.body.style.backgroundColor=="yellow"){
        document.body.style.backgroundColor="lightpink";
    } else{
        document.body.style.backgroundColor="yellow";
    }
}