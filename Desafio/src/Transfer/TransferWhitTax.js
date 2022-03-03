
export function TransferirComTaxa(doador,recebedor,quantia){
    console.log(doador.poupanca,quantia)

    if(quantia>=1000 && quantia<=9999){
        if(quantia<doador.poupanca){
            doador.poupanca=TaxaParaTransferencia(doador.poupanca,quantia)
            recebedor.poupanca=recebedor.poupanca+quantia

            return[doador,recebedor]
        }else{
            throw new Error("Transferencia maior do que a poupança:"+doador.poupanca)
        }

    }else{
        throw new Error("Transferencia maior do que o permitido")
    }
}


export function TaxaParaTransferencia(poupanca,transferencia){
    const taxFixa=100
    let taxa=0
    if(poupanca>=1000 && poupanca<=5000){
        taxa=((transferencia*5)/100)+taxFixa


    }else{
         taxa=((transferencia*10)/100)+taxFixa
        

    }
    return poupanca - transferencia - taxa

}