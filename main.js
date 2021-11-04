const Año = parseInt ("2021");
let nombre = prompt ("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");

if (nombre == "" || apellido == ""){
    console.error( "Error! Datos no ingresados");
    alert("Ingresar Datos Validos");
} else {
    let fechaNacimiento = parseInt( prompt("Ingrese su fecha de Nacimiento"));
    let edad = parseInt( Año - fechaNacimiento );
        if ( fechaNacimiento == "" || edad < 18 ){  
            alert("No puede Ingresar!");
        } else {
            document.write("<div class=box2 >" + "<h2>" + "Hola "+ nombre + " " + apellido + "\nBienvenido al curos de JavaScript!" + "</h2>" + "</div>");
            console.log(nombre);
            console.log(apellido);
            console.log(edad);

            class Producto {
                constructor(nombre, precio) {
                    this.nombre = nombre.toUpperCase();
                    this.precio = parseFloat(precio);
                    this.stock  = true; 
                }
                sumaIva() {
                    this.precio = this.precio * 1.21;
                }
            
                sinStock() {
                    this.stock = false;
                }
            }
            
            producto1 = new Producto("Nvidia Gigabyte GeForce 10 Series GT 1030 2GB", 21550);
            producto2 = new Producto("Nvidia Gigabyte GeForce 10 Series GT 1050 4GB", 49200);
            producto3 = new Producto("Nvidia MSI Ventus GeForce RTX 30 Series RTX 3070 8GB", 210000);
            producto4 = new Producto("AMD Afox Radeon RX 500 Series RX 580 8GB", 119990);
            
            producto1.sumaIva();
            producto2.sumaIva();
            producto3.sumaIva();
            producto4.sumaIva();
            
            producto1.sinStock();
            producto4.sinStock();
            
            
            console.log(producto1);
            console.log(producto2);
            console.log(producto3);
            console.log(producto4);
        }
}




