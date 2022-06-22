const bruto = 3500.66;
let inss;
let leao;



if (bruto <= 1556.94) {
  inss = bruto * 0.08;
} else if (bruto <= 2594.92) {
  inss = bruto * 0.09;
} else if (bruto <= 5189.82) {
  inss = bruto * 0.11;
} else {
  inss = 570.88;
}

const inssPos = bruto - inss;

if (inssPos <= 1903.98) {
  leao = 0;
} else if (inssPos <= 2826.65) {
  leao = (inssPos * 0.075) - 142.80;
} else if (inssPos <= 3751.05) {
  leao = (inssPos * 0.15) - 354.80;
} else if (inssPos <= 4664.68) {
  leao = (inssPos * 0.225) - 636.13;
} else {
  leao = (inssPos * 0.275) - 869.36;
};

console.log("salário líquido: " + (inssPos - leao));