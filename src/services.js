export function semaforo(cor) {
    let msgm="";
      if (cor != "verde" && cor != "vermelho"){
            return msgm="SEMAFORO INOPERANTE"

      }
      if (cor == "verde") {
          return msgm= "Atravesse"
      }

      if (cor == "vermelho") {
        return msgm= "Não atravesse"
    }

    if (cor == "Amarelo") {
        return msgm= "Pense bem"
    }
}

export function diasemana(dia){
    let msgm="";
    if(dia == 0 ){
        return msgm = "domingo"
    }

    else if(dia == 1 ){
        return msgm = "segunda" }

    else if(dia == 2 ){
     return msgm = "terça" }
 
    else if(dia == 3 ){
        return msgm = "quarta" }

    else if(dia == 4 ){
        return msgm = "quinta" }
    else if(dia == 5 ){
         return msgm = "sexta" }

    else if(dia == 6 ){
        return msgm = "sabado" }
}

export function fatorial( numero ) {
    let c= 1;
    for (let contador = numero; contador >= 1; contador--)
    {
        c = c* contador;
    }
    return c;
}

export function sequenciaPar(numero){
    for(contador = 0; contador <= numero; contador +=2)
    {
        console.log(contador);
    }
    sequenciaPar(8);
}