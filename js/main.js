let NombreUsuario = "juancorreas";
let Contrasena = "1234";
function login() {
    let ingreso = false;
    for (i=2; i>=0; i--){
        let IngresoUsuario = prompt("Ingrese su nombre de usuario.");
        let IngresoContrasena = prompt("Ingrese su contraseña. Tiene " + (i + 1) + " " + "oportunidades.");
        if (IngresoContrasena === Contrasena && IngresoUsuario == NombreUsuario) {
            alert ("Bienvenido," + " " + NombreUsuario + ".");
            ingreso = true;
            break;
            } else {
                if (IngresoUsuario == "" || IngresoContrasena == ""){
                    alert ("Los campos no deben estar vacíos.");
                } else {
                    alert ("Contraseña o usuario incorrectos.");
                }
            } 
        }   
    return ingreso;
}

function pago () {
    do {let tarjeta = false;
    let NumeroTarjeta = prompt("Por favor, ingrese el número de su tarjeta de crédito o débito.");
    if (NumeroTarjeta.length != 16) {
        alert ("No se puede comprobar el método de pago. Inténtelo nuevamente.");
    } else {
        let CodigoSeguridad = prompt("Ingrese el código de seguridad (3 dígitos que figuran en el dorso de su tarjeta).");
        if (CodigoSeguridad.length != 3) {
            alert ("Código incorrecto. Inténtelo nuevamente.");
        } else {
            alert ("¡Gracias por su compra!");
            tarjeta = true;
            break;
        }
        }
    } while (true);
    return tarjeta; 
}

let UsuarioValidado = login();

//Resolví incluir sólamente 3 productos a la app por el momento, ya que no he avanzado con el archivo HTML, pero sumaré varios más en las próximas entregas.

if (UsuarioValidado) {
    let ValorFinal = 0;
    let LuisSegundo = 2450;
    let LasAcequias = 815;
    let ElCipres = 510;
    let productos = prompt("Seleccione sus productos (uno por uno): \n1-Luis Segundo. \n2-Las Acequias. \n3-El Ciprés. \n9-Vaciar Carrito. \n0-Finalizar Pedido.");
    
    while (productos != "0") {
        switch (productos) {
            case "1":
                alert ("Seleccionaste Luis Segundo, el costo asciende a $" + (ValorFinal + LuisSegundo) + ".");
                ValorFinal = ValorFinal + 2450;
                break;
            case "2":
                alert ("Seleccionaste Las Acequias, el costo asciende a $" + (ValorFinal + LasAcequias) + ".");
                ValorFinal = ValorFinal + 815;
                break;
            case "3":
                alert ("Seleccionaste El Ciprés, el costo total asciende a $" + (ValorFinal + ElCipres) + ".");
                ValorFinal = ValorFinal + 510;
                break;
            case "9":
                alert ("Carrito vacio.");
                ValorFinal = 0;
                break;
            default:
                alert ("Producto no disponibe o intexistente.");
                break;
        }
        productos = prompt("Seleccione sus productos (uno por uno): \n1-Luis Segundo. \n2-Las Acequias. \n3-El Ciprés. \n9-Vaciar Carrito. \n0-Finalizar Pedido.");
    } 
    if (ValorFinal > 0) {
        alert ("El monto a abonar es de" + " $" + ValorFinal + ".");
        pago ();
    } else {
        alert ("¡Gracias por su visita!");
    }
} else {
    alert ("Intentos agotados. Vuelva a intentarlo más tarde.");
}
    
