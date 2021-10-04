
let opcion;
let validar=false;
let numeros;
let numero1;
    let numero2; 
    let validacion=false;
    let otraVez=false;

do {
    
    alert("Bienvenido a la calculadora");
    do {
        opcion = prompt("Introduce una operación");
        opcion=opcion.trim();
        if(opcion=="+" || opcion=="-" || opcion=="*" || opcion=="/"){
            validar=true;
        }
        
    } while (validar==false);
    
    
    
    do {
        numero1=null;
        numero2=null; 
        
        numeros = prompt("introduce dos numeros separados");
        numeros= numeros.split(" ",numeros.length);
        for (let i = 0; i < numeros.length; i++) {
            
            if (numeros[i]!=="") {
                if (numero1==null) {
                    numero1=numeros[i];
                   
                }else if(numero2==null){
                    numero2=numeros[i];
                    
                }
                
            }
            
            
        }
        
        
        if (!isNaN(Number(numero1)) && !isNaN(Number(numero2))) {
            if (numero1==null || numero2==null) {
                validacion=false;
                
            } else {
                numero1=Number(numero1);
                numero2=Number(numero2);
                validacion=true;
                
            }
            
        }
         else {
                alert("datos erroneos");
        
        }
        } while (validacion==false);
        switch(opcion){
            case "+" : 
                        alert(numero1+numero2);
        
            break;
            case "-" : 
                        alert(numero1-numero2);
        
            break;
            case "*" : 
                        alert(numero1*numero2);
        
            break;
            case "/" : if (!numero2==0) {
                alert(numero1/numero2);
            } else {
                alert("no se puede dividir entre 0");
            }
                     
        
            break;
            default : alert("algo has hecho mal");
        }
    
        otraVez=confirm("Quieres realizar otra operacion");
        validacion=false;
        validar=false;
    
} while (otraVez==true);

