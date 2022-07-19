window.addEventListener("load", inicio, true);


function inicio(){

    document.getElementById("mensaje").addEventListener("keyup", function(){
        
        this.value = this.value.toUpperCase();

    }, true);

    document.getElementById("cifrar").addEventListener("click", function(){

        let texto = document.getElementById("mensaje").value;
        let nivel = document.getElementById("nivel").value;
        document.getElementById("resultado").value = cifrar(texto, nivel);

    }, true);

    document.getElementById("descifrar").addEventListener("click", function(){

        let texto = document.getElementById("mensaje").value;
        let nivel = document.getElementById("nivel").value;
        document.getElementById("resultado").value = descifrar(texto, nivel);

    }, true);

}

function cifrar(texto, nivel){

    let resultado = "";
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    nivel= (nivel % 26 + 26) % 26;

    if(texto){

        for(let i=0; i<texto.length; i++){

            if(alfabeto.indexOf(texto[i])!= -1){

                let posicion = ((alfabeto.indexOf(texto[i])+nivel)%26);
                resultado += alfabeto[posicion];
                
            }
            else{

                resultado += texto[i];
                
            }

        }

    }

    return resultado;

}


function descifrar(texto, nivel){

    let resultado = "";
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    nivel= (nivel % 26 - 26) % 26;

    if(texto){

        for(let i=0; i<texto.length; i++){

            if(alfabeto.indexOf(texto[i])!= -1){

                let posicion = ((alfabeto.indexOf(texto[i])-nivel)%26);
                resultado += alfabeto[posicion];
                
            }
            else{

                resultado += texto[i];
                
            }

        }

    }

    return resultado;

}

/*----------------------------------------*/
/*CIFRAR Y DESCIFRAR- METODOS ALTERNATIVOS*/
/*----------------------------------------*/
/*-----------------------------------------
function cifrar2(texto, nivel){

    if(!texto)
        return "";
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    nivel= (nivel % 26 + 26) % 26;

    return texto.replace(/[A-Z]/ig, c=> alfabeto[(alfabeto.lastIndexOf(c)+nivel)%26]);
}


function descifrar2(texto, nivel){

    if(!texto)
        return "";
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    nivel= (nivel % 26 - 26) % 26;

    return texto.replace(/[A-Z]/ig, c=> alfabeto[(alfabeto.lastIndexOf(c)-nivel)%26]);
}

-----------------------------------------*/