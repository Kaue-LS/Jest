import { Conta } from "../Transfer/Account";
import { TransferirComTaxa } from "../Transfer/TransferWhitTax";

describe("Transferir Com Taxa",()=>{
    test("Vai fazer a transferencia de 2000",()=>{
        
        const ContaDoador= new Conta(1,5000);
        const ContaRecebedor= new Conta(2,0);
        const UpdateContas=TransferirComTaxa(ContaDoador,ContaRecebedor,2500)
        console.log(UpdateContas)


        expect(UpdateContas).toEqual(
            expect.arrayContaining([
                expect.objectContaining({id:1,poupanca:2275}),
                expect.objectContaining({id:2,poupanca:2500})  

            ])
        )
    })
})