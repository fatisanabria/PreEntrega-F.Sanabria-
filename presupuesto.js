let menuPrincipal
let cantPersonajes
let totalPrecio = 0
let estilosDibujo
let encuadreDibujo
let menuGen
let preFinal
function showTotal() {
    alert("El precio total actual es de: " + "$" + totalPrecio)
}
function sumaPrecio(valor1, valor2){
    resultado = valor1 + valor2
    return resultado
}
menuDeInicio()
function menuDeInicio() {
    do {
        menuPrincipal = parseInt(prompt("Presione (1) para hacer su presupuesto \nPresione (2) para salir del menu"))
        totalPrecio = 0
        switch (menuPrincipal) {
            case 1: cantidadDePersonajes()
                break
            case 2:
                alert("Saliendo del programa")
                break
            default:
                alert("Por favor, ingresar un valor válido")
        }
    } while (menuPrincipal != 2)
}
function cantidadDePersonajes() {
    cantPersonajes = parseInt(prompt("¿Cuantos personajes queres en tu dibujo? \nUno \nDos \nTres \nCuatro \nCinco \n Escribe el valor en NUMEROS"))
    switch (cantPersonajes) {
        case 1: totalPrecio = totalPrecio + 1000
            showTotal()
            break
        case 2: totalPrecio = totalPrecio + 2000
            showTotal()
            break
        case 3: totalPrecio = totalPrecio + 25000
            showTotal()
            break
        case 4: totalPrecio = totalPrecio + 3500
            showTotal()
            break
        case 5: totalPrecio = totalPrecio + 4500
            showTotal()
            break
        default:
            alert("Por favor, ingresar uno de los valores listados en formato NUMERICO")
    }
    estiloDeDibujo()
}
function estiloDeDibujo() {
    estilosDibujo = parseInt(prompt("Elige un estilo de dibujado \n1_Lineart (sin color) \n2_Coloreado simple (colores planos) \n3_Coloreado completo (luces y sombras) \n4_Coloreado completo + fondo"))
    switch (estilosDibujo) {
        case 1: totalPrecio = totalPrecio + 1000
            showTotal()
            break
        case 2: totalPrecio = totalPrecio + 2000
            showTotal()
            break
        case 3: totalPrecio = totalPrecio + 3000
            showTotal()
            break
        case 4: totalPrecio = totalPrecio + 3500
            showTotal()
            break
        default:
            alert("Por favor, ingresar un valor válido")
    }
    encuadreDeDibujo()
}
function encuadreDeDibujo() {
    encuadreDibujo = parseInt(prompt("Elige un encuadre: \n1_Primer plano \n2_Cabeza y torso \n3_Cuerpo entero"))
    switch (encuadreDibujo) {
        case 1: totalPrecio = totalPrecio + 300
            showTotal()
            break
        case 2: totalPrecio = totalPrecio + 500
            showTotal()
            break
        case 3: totalPrecio = totalPrecio + 750
            showTotal()
            break
        default:
            alert("Por favor, ingresar un valor válido")
    }
    presupuestoFinal()
}

function presupuestoFinal() {
    preFinal = alert("El valor final del presupuesto es de: " + "$" + totalPrecio)
    menuDeInicio()
}

