function operando() {
    alert("Bienvenido a la calculadora");
    let validar = false;
    do {
        opcion = prompt("Introduce una operación");
        opcion = opcion.trim();
        if (opcion == "+" || opcion == "-" || opcion == "*" || opcion == "/") {
            validar = true;
        }

    } while (validar == false);
    return opcion;
}

let operdores = function () {
    let validacion = false;
    let numeros;
    let numero1;
    let numero2;
    do {
        numero1 = null;
        numero2 = null;
        numeros = prompt("introduce dos numeros separados");
        numeros = numeros.split(" ");
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] !== "") {
                if (numero1 == null) {
                    numero1 = numeros[i];
                } else if (numero2 == null) {
                    numero2 = numeros[i];
                }
            }
        }
        if (!isNaN(Number(numero1)) && !isNaN(Number(numero2))) {
            if (numero1 == null || numero2 == null) {
                validacion = false;
            } else {
                numero1 = Number(numero1);
                numero2 = Number(numero2);
                validacion = true;
            }
        }
        else {
            alert("datos erroneos");
        }
        
    } while (validacion == false);
        numeros[0]=numero1;
        numeros[1]=numero2;
        return numeros;
}

let otraVez = false;
do {
    let opcion = operando();
    let numeros = operdores();
    switch (opcion) {
        case "+": let suma = () => numeros[0] + numeros[1];
            alert(suma());
            break;
        case "-":
            let resta = () => numeros[0] - numeros[1];
            alert(resta());
            break;
        case "*":
            let mult = () => numeros[0] * numeros[1];
            alert(mult());
            break;
        case "/": if (!numeros[1] == 0) {
            let div = () => numeros[0] / numeros[1];
            alert(div());
        } else {
            alert("no se puede dividir entre 0");
        }


            break;
        default: alert("algo has hecho mal");
    }

    otraVez = confirm("Quieres realizar otra operacion");

} while (otraVez == true);

