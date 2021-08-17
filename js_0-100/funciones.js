//Vamos a ver onload.Que es cuando el sitio se termina de cargar.
//Esta es la funcion que se ejecutara en cuanto terminé de cargar la
//pagina.
function verCookies() {
    if (navigator.cookieEnabled == true) {
        alert("las cookies están activadas.")
        console.log(document.cookies);
    }else {
        alert("Las cookies no están activadas.")
    }
}

//El evento onchange se realiza cuando al realizar un cambio ya sea en un boton o sobre un innput etc.
//ESta es la funcion que se ejecuta al onchange de nuestro input.
function cambio(nombre) {
         var nombre = document.getElementById("nombre")
         nombre.value = nombre.value.toUpperCase()
}

//Onmouseover es cuando pasamos el mouse sobre algun elemento.
//onmouseout es cuando no esta el mouse sobre algun elemento.
function sobreMouse(obj) {
    obj.innerHTML = "Y0U F0UND M3"
}

function quitarMouse(obj) {
    obj.innerHTML = "No pases el mouse sobre mí -_-"
}

//Onmousedown es que al presionar un elemento algo ocurre.
//Onmouseup es cuando dejamos de presionar un elemento.
function mDown(obj) {
    obj.style.backgroundColor = "red";
    obj.innerHTML = "estas presionando."
}

function mUp(obj) {
    obj.style.backgroundColor = "purple";
    obj.innerHTML = ""
}
