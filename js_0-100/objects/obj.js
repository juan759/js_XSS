
//Aquí ya tenemos nuestro objeto llamado vulnerabilidades
function vulnerabilidades(description,id) {
    this.description = description
    this.id = id
    this.unir = function () {
        return this.description+":"+this.id
    }
}

//Aquí ya creamos nuestro objeto.
vuln = new vulnerabilidades("ms17-010,eternalblue","1");

console.log(vuln.unir());

//Así obtenemos todas las propiedades y funciones de un metodo.
alert(Object.getOwnPropertyNames(vuln))

function carro(marca,precio,año,color) {
    this.marca=marca;
    this.precio=precio;
    this.año=año;
    this.color=color;
    this.crear=function () {
        alert("Carro Nuevo.")
    }
}

carro = new carro("Volvo","100,000","2019","rojo")
carro.crear()
