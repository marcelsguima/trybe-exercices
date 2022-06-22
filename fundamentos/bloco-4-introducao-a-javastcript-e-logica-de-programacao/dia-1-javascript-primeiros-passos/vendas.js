const bala = -30;
const balaVenda = 60;

if (bala >= 0 && balaVenda >= 0) {
    const balaCusto = bala * 1.2;
    const lucro = (balaVenda - balaCusto) * 1000;
    console.log(lucro);
  } else {
    console.log("Valor de entrada menor do que zero!!!!");
  };