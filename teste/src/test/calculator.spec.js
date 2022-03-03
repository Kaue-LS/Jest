import { sum ,subtract} from './Calculator';

import { Account } from "../Account/account";
import { transfer } from "../Account/transfrer";

describe("calculator +/-", () => {
  test("it should sum two positive values", () => {
    const result = sum(2, 2);

    expect(result).toBe(4);
  });

  // ------------------------------
  test("it should sum numbers with a negative value", () => {
    const result = subtract(2, -2);

    expect(result).toBe(0);
  });
});
// ------------=-=-=-==-=-==--==-===-=--==--=-==--==-=--==-=

describe("transfer", () => {
  test("it should transfer 500 from an account with 1000 to another with 0", () => {
    // Criação do cenário
    // Usuarios e seus respectivos armazenamentos
    const payerAccount = new Account(1, 1000);
    const receiverAccount = new Account(2, 0);

    // Execução do que está sendo testado
    // Tranferencia de doador ao recebidor e a quantia
    const updatedAccounts = transfer(payerAccount, receiverAccount, 500);
    // [ Account { id: 1, balance: 500 }, Account { id: 2, balance: 500 } ]
    // console.log(updatedAccounts)



    // Asserts

    
    // expect(updatedAccounts.length).toBe(2);

    // expect(updatedAccounts[0].id).toBe(1);
    // expect(updatedAccounts[0].balance).toBe(500);

    // expect(updatedAccounts[1].id).toBe(2);
    // expect(updatedAccounts[1].balance).toBe(500);


    // ==============================================

    expect(updatedAccounts).toHaveLength(2);

    expect(updatedAccounts).toEqual(
        expect.arrayContaining([
            expect.objectContaining({ id: 2, balance: 500 }),
            expect.objectContaining({ id: 1, balance: 500 })
        ])
    );
  });
});
