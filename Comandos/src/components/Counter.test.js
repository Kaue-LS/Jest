import { render, screen } from "@testing-library/react";
import Counter from ".";
import userEvent from '@testing-library/user-event'

describe("Counter Component", () => {
  test("deve iniciar o titulo com o valor 0", () => {
   render(<Counter />);
// ELe vai procurar  elemento 0 no html:ele retorna o elemento
    const counterTitle = screen.getByText("0");
    
    // o query ele da retorno null caso nao acha
    // const counterTitle = screen.queryByText("0");

    // Ele retorna a promise,ele espera aparecer para confirmar que esta nos elementos
    // const counterTitle = screen.findByText("0");

    expect(counterTitle).toBeInTheDocument();
  });
  test("Verificar se contem o counter_title no titulo", () => {
    render(<Counter />);
 // ELe vai procurar  elemento 0 no html:ele retorna o elemento
     const counterTitle = screen.getByText("0");
     
     // o query ele da retorno null caso nao acha
     // const counterTitle = screen.queryByText("0");
 
     // Ele retorna a promise,ele espera aparecer para confirmar que esta nos elementos
     // const counterTitle = screen.findByText("0");
 
     expect(counterTitle).toHaveClass("counter__title");
   });
   test("não deve iniciar o titulo com as classes counter__title--increment e counter__title--decrement", () => {
    render(<Counter />);
 // ELe vai procurar  elemento 0 no html:ele retorna o elemento
     const counterTitle = screen.getByText("0");
     
     // o query ele da retorno null caso nao acha
     // const counterTitle = screen.queryByText("0");
 
     // Ele retorna a promise,ele espera aparecer para confirmar que esta nos elementos
     // const counterTitle = screen.findByText("0");
 
     expect(counterTitle).not.toHaveClass("counter__title--increment");
     expect(counterTitle).not.toHaveClass("counter__title--decrement");
   });
   test("Verificar se tem os seguintes botoes", () => {
    render(<Counter />);
 // Vai dar erro pois ele vai achar mais de um
    //  const counterTitle = screen.getByRole("button");
     const buttonIncrement= screen.getByRole("button",{name:/incrementar/i});
    expect(buttonIncrement).toBeInTheDocument()
   
 
   });
   test("Verificar se os botoes tenham as seguintes classes", () => {
    render(<Counter />);
     const buttonIncrement= screen.getByRole("button",{name:/incrementar/i});
    expect(buttonIncrement).toHaveClass('button')
    expect(buttonIncrement).toHaveClass('button--decrement')
    expect(buttonIncrement).toHaveClass('button--increment')
   
 
   });
   test("deve incrementar + 1 ao clicar no botão incrementar", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(screen.queryByText("1")).toBeNull();
    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("deve decrementar - 1 ao clicar no botão decrementar", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(screen.queryByText("-1")).toBeNull();
    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  test("deve adicionar a classe counter__title--increment no titulo, quando o valor for maior do que 0", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--increment"
    );
    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toHaveClass("counter__title--increment");
  });

  test("deve adicionar a classe counter__title--decrement no titulo, quando o valor for menor do que 0", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--decrement"
    );
    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toHaveClass("counter__title--decrement");
  });
});