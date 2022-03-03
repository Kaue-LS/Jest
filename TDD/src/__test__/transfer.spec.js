import { Account } from '../Count/Account';
import { transfer } from '../Count/Transfer';

describe("transfer", () => {
  test("it should transfer 500 from an account with 1000 to another with 0", () => {
    // Criação do cenário
    const payerAccount = new Account(1, 1000)
    const receiverAccount = new Account(2, 0)

    // Execução do que está sendo testado
    const updatedAccounts = transfer(payerAccount, receiverAccount, 500)

    // Asserts
    expect(updatedAccounts.length).toBe(2);

    expect(updatedAccounts[0].id).toBe(1);
    expect(updatedAccounts[0].balance).toBe(500);

    expect(updatedAccounts[1].id).toBe(2);
    expect(updatedAccounts[1].balance).toBe(500);
  });
});

test("it should throw an error when transfer amount is negative",()=>{
  const playerAccount= new Account(1,1000)
  const receiverAccount= new Account(2,1000)

    const updatedAccounts=()=>{
      transfer(playerAccount,receiverAccount,0)
    };

    expect(updatedAccounts).toThrow(Error('Invalid transfer amount: 0'));
})