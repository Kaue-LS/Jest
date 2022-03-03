import { Account } from "./Account";

export function transferWithTax(payer, receiver, transferAmount) {
    // const payerBalance =400;
    // const payerAccountId=1;
    // const payerAccount= new Account(payerAccountId,payerBalance);

    // const receiverBalance= 500;
    // const receiverAccountId=2;
    // const receiverAccount= new Account(receiverAccountId,receiverBalance)
    // return [payerAccount, receiverAccount];


    const payerAccountAfterTransfer = new Account(payer.id, chargeTaxForTransfer(payer.balance, transferAmount));
    const receiverAccountAfterTransfer = new Account(receiver.id, receiver.balance + transferAmount);

    return [payerAccountAfterTransfer, receiverAccountAfterTransfer];
}

function chargeTaxForTransfer(balance, transferAmount) {
    const tax = 100;
    return balance - transferAmount - tax;
}
