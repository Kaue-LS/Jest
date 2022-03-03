export function transfer(payer, receiver, transferAmount) {
    // Bordas = pensar mais sobre o teste, e se os valores forem negativos?
    // São as precausoes q devemos tomar e garantir que podemos prever esses problemas no testew
    if(transferAmount>0){
    payer.balance = payer.balance - transferAmount
    receiver.balance = receiver.balance + transferAmount
    return [payer, receiver];
    } else {
        throw new Error(`Invalid transfer amount: ${transferAmount}`,console.log(transferAmount))
    }
}