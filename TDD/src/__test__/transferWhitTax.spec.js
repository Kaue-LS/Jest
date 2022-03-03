import { Account } from '../Count/Account';
import { transferWithTax } from '../Count/transferWhitTax';

describe('transferWithTax', () => {
    test('it should charge 100 from the payer account with 1000 for a 500 transfer to a receiver account with 0', () => {
        const payerAccount = new Account(1, 2000);
    const receiverAccount = new Account(2, 1000);

    const updatedAccounts = transferWithTax(payerAccount, receiverAccount, 100);

        console.log(updatedAccounts)
        expect(updatedAccounts).toEqual(
            expect.arrayContaining([
                expect.objectContaining({id: 1, balance: 1800}),
                expect.objectContaining({id: 2, balance:1100}),
            ])
        );
    });
});